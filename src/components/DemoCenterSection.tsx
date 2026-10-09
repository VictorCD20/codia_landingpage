import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { m, AnimatePresence } from 'motion/react';
import { SectionEyebrow } from './Primitives';
import { Sparkles, CheckCircle2, Clock, Calendar, ShieldCheck, Send, Volume2, VolumeX, Play, Pause, Maximize2 } from 'lucide-react';
import { telemetry } from '../tracking/tracker';
import { saveLeadToGoogleSheets } from '../services/contactService';
import videoCafeteria from '../../assets/videos/video_cafeteria.mp4';

export const DemoCenterSection: React.FC = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [marketingAccepted, setMarketingAccepted] = useState(false);
  const [bookingError, setBookingError] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);

  const [bookingData, setBookingData] = useState({
    businessName: '',
    name: '',
    email: '',
    whatsapp: '',
    industry: 'Alimentos & Bebidas',
    mainGoal: 'Inventario & Stock',
    teamSize: '2 a 5 personas',
    preferredTime: 'Por la mañana (10:00 - 13:00)',
  });

  const toggleSound = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      videoRef.current.volume = 1.0;
      setIsMuted(nextMuted);
      if (!nextMuted && videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBookingError('');

    if (!privacyAccepted) {
      setBookingError('Debes leer y aceptar el Aviso de Privacidad para agendar tu demostración.');
      return;
    }

    setIsSubmitting(true);
    telemetry.trackCTAClick('Demo_Assisted_Booking', JSON.stringify(bookingData));
    const messageText = `[SOLICITUD DE DEMOSTRACIÓN GUIADA]\nNegocio: ${bookingData.businessName}\nCorreo: ${bookingData.email || 'No proporcionado'}\nGiro: ${bookingData.industry}\nObjetivo a resolver: ${bookingData.mainGoal}\nTamaño de equipo: ${bookingData.teamSize}\nHorario preferido: ${bookingData.preferredTime}`;

    try {
      // 1. Direct Save to Google Sheets Database
      await saveLeadToGoogleSheets({
        nombre: bookingData.name,
        negocio: bookingData.businessName,
        correo: bookingData.email || `${bookingData.businessName.replace(/\s+/g, '').toLowerCase()}@demo.request`,
        telefono: bookingData.whatsapp,
        solucion: `Demostración: ${bookingData.industry}`,
        mensaje: messageText,
        aviso_privacidad: 'Aceptado el ' + new Date().toISOString(),
        consentimiento_marketing: marketingAccepted ? 'Aceptado' : 'No aceptado'
      });

      // 2. Send email via Resend serverless endpoint
      await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: bookingData.name,
          business_name: bookingData.businessName,
          email: bookingData.email || `${bookingData.businessName.replace(/\s+/g, '').toLowerCase()}@demo.request`,
          phone: bookingData.whatsapp,
          solution_type: `Demostración: ${bookingData.industry}`,
          message: messageText,
          privacy_accepted: true,
          marketing_accepted: marketingAccepted
        }),
      });
    } catch (err) {
      console.warn('[Demo Booking Warning]:', err);
    } finally {
      setIsSubmitting(false);
      setIsBooked(true);
    }
  };

  return (
    <section id="demo" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 relative z-10">
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <SectionEyebrow label="Demostración en Video & Asistida" tag="Recorrido 1 a 1" />
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] max-w-3xl">
          Conoce cómo funciona el sistema{' '}
          <span className="text-[#00d2ff]">adaptado a tu negocio.</span>
        </h2>
        <div className="mt-4 max-w-2xl px-5 py-3.5 rounded-2xl bg-black/70 border border-white/15 backdrop-blur-md shadow-xl text-center">
          <p className="text-white/90 text-sm md:text-base font-normal leading-relaxed">
            Mira el video explicativo de 60 segundos o agenda una sesión de 20 minutos con uno de nuestros desarrolladores para evaluar tu caso específico.
          </p>
        </div>

        {/* Sectors Availability Pill Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Disponible hoy: Sector Alimenticio (Cafetería / Restaurante)</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span>Próximamente: Ópticas & Retail</span>
          </div>
        </div>
      </div>

      {/* Main Showcase & Video Experience Card */}
      <m.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
        className="liquid-glass rounded-[28px] md:rounded-[40px] p-5 sm:p-8 md:p-10 border border-white/15 shadow-2xl relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Commercial Value & Highlights */}
          <div className="lg:col-span-5 flex flex-col justify-between order-2 lg:order-1">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#00d2ff] font-semibold mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Demostración de Arquitectura</span>
              </div>
              
              <h3 className="text-white text-2xl sm:text-3xl font-semibold mb-3">
                Software en acción: pedidos, cocina y stock
              </h3>
              
              <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed mb-6">
                Descubre cómo un sistema a la medida simplifica los cobros en mostrador, coordina comandas con cocina y descuenta insumos de forma automática.
              </p>

              {/* Highlights */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00d2ff]/10 border border-[#00d2ff]/30 flex items-center justify-center text-[#00d2ff] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-white text-xs sm:text-sm font-medium">Toma de pedidos en &lt; 30 segundos</span>
                    <p className="text-white/50 text-[11px]">Catálogo táctil para tablet y celular con variantes y modificadores.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00d2ff]/10 border border-[#00d2ff]/30 flex items-center justify-center text-[#00d2ff] shrink-0 mt-0.5">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-white text-xs sm:text-sm font-medium">Sincronización y control en vivo</span>
                    <p className="text-white/50 text-[11px]">Monitorea las ventas de tu negocio en tiempo real desde tu teléfono.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#3ecf8e]/10 border border-[#3ecf8e]/30 flex items-center justify-center text-[#3ecf8e] shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-white text-xs sm:text-sm font-medium">Demostración 1 a 1 sin costo</span>
                    <p className="text-white/50 text-[11px]">Te mostramos el sistema con tus propios productos en 20 minutos.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => setShowBookingModal(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full font-semibold text-xs sm:text-sm px-6 py-3.5 bg-gradient-to-r from-[#00d2ff] to-[#3ecf8e] text-[#091020] hover:opacity-95 transition-all shadow-lg shadow-[#00d2ff]/20 active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar una demostración</span>
              </button>

              <a
                href="#diagnostico"
                className="inline-flex items-center justify-center gap-2 rounded-full font-medium text-xs sm:text-sm px-5 py-3.5 border border-white/20 text-white hover:bg-white/5 transition-all text-center"
              >
                Evaluar mi negocio
              </a>
            </div>
          </div>

          {/* Right Column: Full Responsive Video Player with Audio Controls */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/15 bg-black/80 shadow-2xl group flex flex-col">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-white/5 border-b border-white/10 text-xs text-white/50">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
                  <span className="ml-2 font-mono text-[11px] text-white/60 hidden sm:inline">Demostración en Video CODIA</span>
                </div>
                
                <div className="flex items-center gap-2">
                  {/* Audio toggle button */}
                  <button
                    type="button"
                    onClick={toggleSound}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium transition-all ${
                      isMuted 
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30' 
                        : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30'
                    }`}
                    title={isMuted ? "Activar audio" : "Silenciar audio"}
                  >
                    {isMuted ? (
                      <>
                        <VolumeX className="w-3.5 h-3.5" />
                        <span>Activar sonido</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                        <span>Sonido activo</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Video Player Container */}
              <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
                <video
                  ref={videoRef}
                  src={videoCafeteria}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  controls={false}
                  onClick={togglePlay}
                  className="w-full h-full object-contain cursor-pointer"
                />

                {/* Unmute floating banner if muted */}
                {isMuted && (
                  <button
                    type="button"
                    onClick={toggleSound}
                    className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-xs font-medium hover:bg-[#00d2ff] hover:text-[#091020] transition-all shadow-lg animate-bounce"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Clic para escuchar</span>
                  </button>
                )}

                {/* Floating Bottom Minimal Controls */}
                <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 opacity-90 group-hover:opacity-100 transition-opacity text-xs text-white">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={togglePlay}
                      className="p-1.5 rounded-lg hover:bg-white/10 text-white transition-colors"
                      title={isPlaying ? "Pausar" : "Reproducir"}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>

                    <button
                      type="button"
                      onClick={toggleSound}
                      className="p-1.5 rounded-lg hover:bg-white/10 text-white transition-colors"
                      title={isMuted ? "Activar audio" : "Silenciar"}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-amber-300" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                    </button>
                    <span className="text-[11px] text-white/70 hidden sm:inline">Demostración interactiva de cafetería</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setShowBookingModal(true)}
                      className="px-3 py-1 rounded-lg bg-[#00d2ff] text-[#091020] font-bold text-[11px] hover:bg-[#A4F4FD] transition-colors"
                    >
                      Agendar sesión
                    </button>
                    
                    <button
                      type="button"
                      onClick={handleFullscreen}
                      className="p-1.5 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                      title="Pantalla completa"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </m.div>

      {/* Booking Modal */}
      <AnimatePresence>
        {showBookingModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="liquid-glass rounded-3xl p-6 sm:p-8 border border-white/20 max-w-lg w-full shadow-2xl relative"
            >
              <button
                type="button"
                onClick={() => {
                  setShowBookingModal(false);
                  setIsBooked(false);
                }}
                className="absolute top-5 right-5 text-white/50 hover:text-white text-sm"
              >
                ✕ Cerrar
              </button>

              {!isBooked ? (
                <form onSubmit={handleBookingSubmit} method="post" className="space-y-4 text-left">
                  <div className="text-left mb-6">
                    <span className="text-xs uppercase tracking-widest text-[#00d2ff] font-semibold">
                      Demostración Personalizada
                    </span>
                    <h3 className="text-white text-xl sm:text-2xl font-bold mt-1">
                      Agenda tu sesión guiada de 20 min
                    </h3>
                    <p className="text-white/60 text-xs sm:text-sm font-light mt-1">
                      Ingresa tus datos y coordinaremos el enlace de videollamada contigo por WhatsApp.
                    </p>
                  </div>

                  {bookingError && (
                    <div role="alert" className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs text-center font-medium">
                      {bookingError}
                    </div>
                  )}

                  <div>
                    <label htmlFor="demo-input-negocio" className="block text-xs text-white/70 mb-1 font-medium">Nombre de tu Negocio *</label>
                    <input
                      id="demo-input-negocio"
                      name="nombre_negocio"
                      type="text"
                      required
                      value={bookingData.businessName}
                      onChange={e => setBookingData({ ...bookingData, businessName: e.target.value })}
                      placeholder="Ej. Cafetería Los Portales"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white placeholder-white/30 text-sm focus:border-[#00d2ff] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="demo-input-name" className="block text-xs text-white/70 mb-1 font-medium">Tu Nombre *</label>
                      <input
                        id="demo-input-name"
                        name="nombre"
                        type="text"
                        required
                        value={bookingData.name}
                        onChange={e => setBookingData({ ...bookingData, name: e.target.value })}
                        placeholder="Ej. Carlos Mendoza"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white placeholder-white/30 text-sm focus:border-[#00d2ff] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="demo-input-phone" className="block text-xs text-white/70 mb-1 font-medium">WhatsApp *</label>
                      <input
                        id="demo-input-phone"
                        name="telefono"
                        type="tel"
                        required
                        value={bookingData.whatsapp}
                        onChange={e => setBookingData({ ...bookingData, whatsapp: e.target.value })}
                        placeholder="+52 55 1234 5678"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white placeholder-white/30 text-sm focus:border-[#00d2ff] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="demo-input-email" className="block text-xs text-white/70 mb-1 font-medium">Correo Electrónico (Opcional)</label>
                    <input
                      id="demo-input-email"
                      name="email"
                      type="email"
                      value={bookingData.email}
                      onChange={e => setBookingData({ ...bookingData, email: e.target.value })}
                      placeholder="carlos@empresa.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white placeholder-white/30 text-sm focus:border-[#00d2ff] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="demo-select-industry" className="block text-xs text-white/70 mb-1 font-medium">Giro de tu Negocio</label>
                      <select
                        id="demo-select-industry"
                        name="giro_negocio"
                        value={bookingData.industry}
                        onChange={e => setBookingData({ ...bookingData, industry: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white text-sm focus:border-[#00d2ff] focus:outline-none"
                      >
                        <option value="Alimentos & Bebidas" className="bg-[#091020]">Alimentos & Bebidas (Cafetería / Restaurante)</option>
                        <option value="Comercio & Retail" className="bg-[#091020]">Comercio & Retail (Boutique / Tienda)</option>
                        <option value="Salud & Óptica" className="bg-[#091020]">Salud & Óptica</option>
                        <option value="Servicios Profesionales" className="bg-[#091020]">Servicios Profesionales</option>
                        <option value="Otro Giro" className="bg-[#091020]">Otro Giro Comercial</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="demo-select-goal" className="block text-xs text-white/70 mb-1 font-medium">¿Qué quieres resolver?</label>
                      <select
                        id="demo-select-goal"
                        name="objetivo"
                        value={bookingData.mainGoal}
                        onChange={e => setBookingData({ ...bookingData, mainGoal: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white text-sm focus:border-[#00d2ff] focus:outline-none"
                      >
                        <option value="Inventario & Stock" className="bg-[#091020]">Control de Inventario & Stock</option>
                        <option value="Punto de Venta / Caja" className="bg-[#091020]">Punto de Venta (POS) & Cobros</option>
                        <option value="Sitio Web & Ventas Online" className="bg-[#091020]">Sitio Web / Catálogo Online</option>
                        <option value="Automatización WhatsApp" className="bg-[#091020]">Automatización de Pedidos/Citas</option>
                        <option value="Software a la Medida" className="bg-[#091020]">Software / Panel a la Medida</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="demo-select-team" className="block text-xs text-white/70 mb-1 font-medium">Tamaño del Equipo</label>
                      <select
                        id="demo-select-team"
                        name="tamano_equipo"
                        value={bookingData.teamSize}
                        onChange={e => setBookingData({ ...bookingData, teamSize: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white text-sm focus:border-[#00d2ff] focus:outline-none"
                      >
                        <option value="Solo yo (1 persona)" className="bg-[#091020]">Solo yo (1 persona)</option>
                        <option value="2 a 5 personas" className="bg-[#091020]">2 a 5 personas</option>
                        <option value="6 a 15 personas" className="bg-[#091020]">6 a 15 personas</option>
                        <option value="Más de 15 personas" className="bg-[#091020]">Más de 15 personas</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="demo-select-time" className="block text-xs text-white/70 mb-1 font-medium">Horario de Preferencia</label>
                      <select
                        id="demo-select-time"
                        name="horario_preferencia"
                        value={bookingData.preferredTime}
                        onChange={e => setBookingData({ ...bookingData, preferredTime: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white text-sm focus:border-[#00d2ff] focus:outline-none"
                      >
                        <option value="Por la mañana (10:00 - 13:00)" className="bg-[#091020]">Por la mañana (10:00 - 13:00)</option>
                        <option value="Por la tarde (14:00 - 18:00)" className="bg-[#091020]">Por la tarde (14:00 - 18:00)</option>
                        <option value="Sábado por la mañana" className="bg-[#091020]">Sábado por la mañana</option>
                      </select>
                    </div>
                  </div>

                  {/* Consent Checkboxes */}
                  <div className="flex flex-col gap-2.5 pt-1">
                    {/* 1. Mandatory Privacy Consent */}
                    <label className="flex items-start gap-2.5 cursor-pointer text-xs text-white/80 select-none">
                      <input
                        type="checkbox"
                        name="aviso_privacidad_aceptado"
                        checked={privacyAccepted}
                        onChange={(e) => setPrivacyAccepted(e.target.checked)}
                        required
                        className="mt-0.5 w-4 h-4 rounded border-white/30 bg-black/40 text-blue-500 focus:ring-blue-400 focus:ring-offset-0 shrink-0 cursor-pointer"
                      />
                      <span>
                        He leído y acepto el{' '}
                        <Link to="/aviso-de-privacidad" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-medium">
                          Aviso de Privacidad
                        </Link>
                        . <span className="text-red-400">*</span>
                      </span>
                    </label>

                    {/* 2. Optional Marketing Consent */}
                    <label className="flex items-start gap-2.5 cursor-pointer text-xs text-white/60 select-none">
                      <input
                        type="checkbox"
                        name="consentimiento_marketing"
                        checked={marketingAccepted}
                        onChange={(e) => setMarketingAccepted(e.target.checked)}
                        className="mt-0.5 w-4 h-4 rounded border-white/30 bg-black/40 text-blue-500 focus:ring-blue-400 focus:ring-offset-0 shrink-0 cursor-pointer"
                      />
                      <span>
                        Deseo recibir información sobre soluciones, demostraciones y novedades de CODIA.
                      </span>
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#00d2ff] to-[#3ecf8e] text-[#091020] text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Agendando...</span>
                      ) : (
                        <>
                          <span>Confirmar mi Demostración</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-white text-2xl font-bold mb-2">¡Solicitud Confirmada!</h4>
                  <p className="text-white/70 text-sm font-light mb-6">
                    Hemos registrado tu solicitud para <strong className="text-white">{bookingData.businessName}</strong>. Un especialista técnico te escribirá por WhatsApp para enviarte el link de la videollamada en tu horario preferido.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setShowBookingModal(false);
                      setIsBooked(false);
                    }}
                    className="px-6 py-2.5 rounded-full bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-colors"
                  >
                    Entendido
                  </button>
                </div>
              )}
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
