export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
  note?: string;
}

export interface Service {
  no: string;              // 01..04
  slug: string;
  title: string;
  summary: string;
  points: string[];
  image: string;
}

export interface Sector {
  slug: string;
  title: string;
  image: string;
}

export interface Project {
  slug: string;
  title: string;
  sector: string;
  location: string;
  year: string;
  scope: string;
  image: string;
  facts: { label: string; value: string }[];
}

export interface Expertise {
  title: string;
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
  no: string;
  image: string;
  placeholder: true;       // всегда образец, пока нет реальных документов
}

export interface QualityPillar {
  title: string;
  description: string;
}

export interface NewsItem {
  slug: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
}

export interface Partner {
  name: string;
  kind: string;            // тип заказчика/партнёра (напр. «Государственный заказчик»)
}

export interface ServiceDetail {
  slug: string;
  lead: string;
  overview: string[];
  deliverables: { title: string; description: string }[];
  process: { no: string; title: string; description: string }[];
}

export interface ProjectDetail {
  slug: string;
  lead: string;
  overview: string[];
  task: string;
  result: string[];
  gallery: string[];
}

export interface NewsDetail {
  slug: string;
  lead: string;
  body: string[];
}

export interface UiLabels {
  home: string;
  backHome: string;
  servicesTitle: string;
  servicesLead: string;
  projectsTitle: string;
  projectsLead: string;
  newsTitle: string;
  newsLead: string;
  whatWeDeliver: string;
  howWeWork: string;
  task: string;
  result: string;
  gallery: string;
  facts: string;
  otherServices: string;
  otherProjects: string;
  otherNews: string;
  readMore: string;
  ctaTitle: string;
  ctaText: string;
  privacyPolicy: string;
}

export interface Company {
  name: string;
  legalName: string;
  inn: string;
  kpp: string;
  tagline: string;
  foundedNote: string;
}

export interface Contacts {
  phone: string;
  email: string;
  address: string;
  hours: string;
}

export interface SiteContent {
  company: Company;
  nav: NavItem[];
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    marquee: string[];
  };
  stats: Stat[];
  about: {
    kicker: string;
    title: string;
    lead: string;
    body: string[];
  };
  fullCycle: {
    kicker: string;
    title: string;
    intro: string;
    steps: { no: string; title: string; description: string }[];
  };
  services: {
    kicker: string;
    title: string;
    intro: string;
    items: Service[];
  };
  sectors: {
    kicker: string;
    title: string;
    intro: string;
    items: Sector[];
  };
  expertise: {
    kicker: string;
    title: string;
    intro: string;
    items: Expertise[];
  };
  projects: {
    kicker: string;
    title: string;
    intro: string;
    cta: string;
    items: Project[];
  };
  quality: {
    kicker: string;
    title: string;
    intro: string;
    pillars: QualityPillar[];
  };
  certifications: {
    kicker: string;
    title: string;
    intro: string;
    disclaimer: string;
    items: Certification[];
  };
  partners: {
    kicker: string;
    title: string;
    intro: string;
    note: string;
    items: Partner[];
  };
  geography: {
    kicker: string;
    title: string;
    intro: string;
    regions: string[];
  };
  news: {
    kicker: string;
    title: string;
    cta: string;
    items: NewsItem[];
  };
  contact: {
    kicker: string;
    title: string;
    intro: string;
    form: {
      name: string;
      company: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
      consent: string;
    };
  };
  footer: {
    about: string;
    columns: { title: string; links: NavItem[] }[];
    rights: string;
    placeholderNote: string;
  };
  common: {
    menu: string;
    close: string;
    requestQuote: string;
    learnMore: string;
    allProjects: string;
    scroll: string;
    sampleBadge: string;
  };
  ui: UiLabels;
}
