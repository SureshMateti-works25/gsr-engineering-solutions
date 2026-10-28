export type ProductCategory = 
  | 'all'
  | 'mechanical-items'
  | 'electrical-items'
  | 'automation-electronics'
  | 'pneumatics-items';

export type IndustryDomainId = 
  | 'all'
  | 'pharma-biotech'
  | 'chemical-petrochem'
  | 'food-dairy-beverage'
  | 'steel-heavy-engineering'
  | 'automation-oem'
  | 'water-etp-utilities';

export interface IndustryDomain {
  id: IndustryDomainId;
  name: string;
  badge: string;
  iconName: string;
  tagline: string;
  description: string;
  color: string;
  gradient: string;
  borderHover: string;
  keyStandards: string[];
  hubAreas: string[];
  specificProductIds: string[];
  commonProductIds: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'mechanical-items' | 'electrical-items' | 'automation-electronics' | 'pneumatics-items';
  subCategory: string;
  tagline: string;
  description: string;
  specifications: string[];
  brands: string[];
  popular?: boolean;
  applications: string[];
  badge?: string;
  imageUrl?: string;
  originalPrice?: string;
  discountPrice?: string;
  discountBadge?: string;
}

export interface BrandPartner {
  name: string;
  category: 'mechanical' | 'electrical' | 'pneumatics' | 'automation' | 'all';
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

export interface OfferItem {
  id: string;
  title: string;
  badge: string;
  category: ProductCategory;
  couponCode: string;
  description: string;
  discount: string;
  highlightText: string;
  validUntil: string;
  imageUrl: string;
  targetCategoryLabel: string;
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
