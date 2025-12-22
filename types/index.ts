export interface Service {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  longDescription?: string;
  image?: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  category: string;
  process?: {
    concept?: string;
    planning?: string;
    execution?: string;
    completion?: string;
  };
}

export interface PortfolioItem {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  category: string;
  images: Array<{
    asset: {
      _ref: string;
      _type: string;
    };
  }>;
  video?: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  featured?: boolean;
  date?: string;
  client?: string;
}

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio?: string;
  image?: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  socialLinks?: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
}

export interface Client {
  _id: string;
  name: string;
  logo?: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  website?: string;
  category?: string;
}

export interface Testimonial {
  _id: string;
  name: string;
  role?: string;
  company?: string;
  content: string;
  image?: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  rating?: number;
}

