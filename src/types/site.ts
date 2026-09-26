export interface ContactInfo {
  phone: string;
  whatsapp: string;
  whatsappUrl: string;
  phoneUrl: string;
  email: string;
  emailUrl: string;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  facebookHandle: string;
  instagramHandle: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  fullTitle: string;
  domain: string;
  description: string;
  contact: ContactInfo;
  social: SocialLinks;
}
