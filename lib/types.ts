export interface Franchise {
  id: string;
  name: string;
  category: string;
  investmentRange: {
    min: number;
    max: number;
  };
  description: string;
  shortDescription: string;
  roi: number;
  yearsInBusiness: number;
  unitsOperating: number;
  supportLevel: string;
  image: string;
  logo?: string;
  website?: string;
  highlights: string[];
}

export interface Exhibition {
  id: string;
  name: string;
  date: Date;
  location: string;
  description: string;
  image: string;
  featured: boolean;
  attendees?: number;
  booths?: number;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  businessType?: string;
  investmentCapacity?: string;
  message: string;
}
