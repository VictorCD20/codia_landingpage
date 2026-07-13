import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from './LiveProjectButton';
import { FadeIn } from './FadeIn';

const projects = [
  {
    num: "01",
    client: "E-Commerce",
    name: "Tienda en Línea",
    images: {
      left1: "/p1_ecommerce_product_1783039173671.jpg",
      left2: "/p1_ecommerce_mobile_1783039166808.jpg",
      right: "/p1_ecommerce_dashboard_1783039159517.jpg"
    }
  },
  {
    num: "02",
    client: "Ventas",
    name: "Punto de Venta",
    images: {
      left1: "/p2_pos_analytics_1783039194767.jpg",
      left2: "/p2_pos_tablet_1783039188003.jpg",
      right: "/p2_pos_dashboard_1783039180830.jpg"
    }
  },
  {
    num: "03",
    client: "App Móvil",
    name: "App de Envíos",
    images: {
      left1: "/p3_delivery_tracking_1783039215548.jpg",
      left2: "/p3_delivery_mobile_1783039208097.jpg",
      right: "/p3_delivery_dashboard_1783039201262.jpg"
    }
  }
];

const Card = ({ project, index, progress, range, targetScale }: any) => {
  const containerRef = useRef(null);
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={containerRef} className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32 w-full" style={{ top: `calc(6rem + ${index * 28}px)` }}>
      <motion.div 
        style={{ scale }}
        className="flex flex-col relative w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 transform-gpu origin-top"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6 md:gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <span className="text-[#D7E2EA] font-black text-[clamp(3rem,10vw,140px)] leading-none">{project.num}</span>
            <div className="flex flex-col gap-1">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs md:text-sm">{project.client}</span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-xl md:text-3xl lg:text-4xl">{project.name}</h3>
            </div>
          </div>
          <div className="hidden sm:block">
            <LiveProjectButton />
          </div>
        </div>

        <div className="flex gap-4 sm:gap-6 md:gap-8 flex-1 min-h-0">
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-[40%] min-h-0">
            <img src={project.images.left1} alt="Project image 1" className="w-full object-cover object-top rounded-[40px] sm:rounded-[50px] md:rounded-[60px]" style={{ height: 'clamp(130px, 16vw, 230px)' }} />
            <img src={project.images.left2} alt="Project image 2" className="w-full object-cover object-top rounded-[40px] sm:rounded-[50px] md:rounded-[60px]" style={{ height: 'clamp(160px, 22vw, 340px)' }} />
          </div>
          <div className="w-[60%] min-h-0">
            <img src={project.images.right} alt="Project image main" className="w-full h-full object-cover object-top rounded-[40px] sm:rounded-[50px] md:rounded-[60px]" />
          </div>
        </div>
        
        <div className="mt-6 sm:hidden">
          <LiveProjectButton />
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section id="portafolio" ref={containerRef} className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 pt-20 pb-40 px-5 sm:px-8 md:px-10">
      <FadeIn delay={0} y={40} className="w-full flex justify-center mb-16 md:mb-24">
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(2.5rem,10vw,140px)] leading-none">
          Portafolio
        </h2>
      </FadeIn>

      <div className="relative">
        {projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - 1 - i) * 0.03);
          const range = [i * 0.25, 1];
          return (
            <Card 
              key={i} 
              index={i} 
              project={project} 
              progress={scrollYProgress} 
              range={range} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>
    </section>
  );
};
