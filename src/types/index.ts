export type ProductCategory = 
  | 'all'
  | 'ss-material'
  | 'pharma-material'
  | 'electrical-material'
  | 'mechanical-material'
  | 'other-industrial';

export interface ProductItem {
  id: string;
  name: string;
  category: 'ss-material' | 'pharma-material' | 'electrical-material' | 'mechanical-material' | 'other-industrial';
  subCategory: string;
  tagline: string;
  description: string;
  specifications: string[];
  brands: string[];
  popular?: boolean;
  applications: string[];
  badge?: string;
  imageUrl?: string;
}

export interface BrandPartner {
  name: string;
  category: 'mechanical' | 'electrical' | 'pneumatics' | 'all';
  type: string;
  description?: string;
  popular?: boolean;
  logoUrl?: string;
  accentColor?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  features: string[];
  sla: string;
  imageUrl?: string;
}

export interface RfqItem {
  product: ProductItem;
  quantity?: number;
  note?: string;
}

export interface InquiryFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  location: string;
  category: string;
  message: string;
  urgency: 'routine' | 'urgent' | 'breakdown';
  selectedProducts: string[];
}
