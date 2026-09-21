export type ProductCategory =
  | 'Business'
  | 'Education'
  | 'Healthcare'
  | 'Industry'
  | 'Retail'
  | 'Services';

export type ContactInquiryStatus = 'new' | 'contacted' | 'closed';

export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface ProductRow {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  features: Json;
  icon: string;
  gradient: string;
  featured: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface MarketingToolRow {
  id: string;
  name: string;
  description: string;
  features: Json;
  icon: string;
  gradient: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface MobileAppRow {
  id: string;
  name: string;
  description: string;
  features: Json;
  icon: string;
  gradient: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface WhyChooseFeatureRow {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  sort_order: number;
  created_at: string;
}

export interface IndustryRow {
  id: number;
  name: string;
  icon: string;
  color: string;
  bg_color: string;
  sort_order: number;
  created_at: string;
}

export interface PlatformFeatureRow {
  id: number;
  title: string;
  description: string;
  icon: string;
  span: string | null;
  sort_order: number;
  created_at: string;
}

export interface StatRow {
  id: number;
  value: number;
  suffix: string;
  label: string;
  icon: string;
  sort_order: number;
  created_at: string;
}

export interface TestimonialRow {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  sort_order: number;
  created_at: string;
}

export interface ClientLogoRow {
  id: number;
  name: string;
  sort_order: number;
  created_at: string;
}

export interface NavLinkRow {
  id: number;
  label: string;
  href: string;
  has_mega_menu: boolean;
  sort_order: number;
  created_at: string;
}

export interface ContactInquiryRow {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  product: string;
  message: string;
  status: ContactInquiryStatus;
  created_at: string;
}

export interface ContactInquiryInsert {
  name: string;
  email: string;
  phone: string;
  company: string;
  product: string;
  message: string;
}

export interface Database {
  public: {
    Tables: {
      products: {
        Row: ProductRow;
        Insert: Omit<ProductRow, 'created_at' | 'updated_at'> & {
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<ProductRow>;
        Relationships: [];
      };
      marketing_tools: {
        Row: MarketingToolRow;
        Insert: Omit<MarketingToolRow, 'created_at' | 'updated_at'> & {
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<MarketingToolRow>;
        Relationships: [];
      };
      mobile_apps: {
        Row: MobileAppRow;
        Insert: Omit<MobileAppRow, 'created_at' | 'updated_at'> & {
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<MobileAppRow>;
        Relationships: [];
      };
      why_choose_features: {
        Row: WhyChooseFeatureRow;
        Insert: Omit<WhyChooseFeatureRow, 'id' | 'created_at'> & {
          id?: number;
          created_at?: string;
        };
        Update: Partial<WhyChooseFeatureRow>;
        Relationships: [];
      };
      industries: {
        Row: IndustryRow;
        Insert: Omit<IndustryRow, 'id' | 'created_at'> & {
          id?: number;
          created_at?: string;
        };
        Update: Partial<IndustryRow>;
        Relationships: [];
      };
      platform_features: {
        Row: PlatformFeatureRow;
        Insert: Omit<PlatformFeatureRow, 'id' | 'created_at'> & {
          id?: number;
          created_at?: string;
        };
        Update: Partial<PlatformFeatureRow>;
        Relationships: [];
      };
      stats: {
        Row: StatRow;
        Insert: Omit<StatRow, 'id' | 'created_at'> & {
          id?: number;
          created_at?: string;
        };
        Update: Partial<StatRow>;
        Relationships: [];
      };
      testimonials: {
        Row: TestimonialRow;
        Insert: Omit<TestimonialRow, 'id' | 'created_at'> & {
          id?: number;
          created_at?: string;
        };
        Update: Partial<TestimonialRow>;
        Relationships: [];
      };
      client_logos: {
        Row: ClientLogoRow;
        Insert: Omit<ClientLogoRow, 'id' | 'created_at'> & {
          id?: number;
          created_at?: string;
        };
        Update: Partial<ClientLogoRow>;
        Relationships: [];
      };
      nav_links: {
        Row: NavLinkRow;
        Insert: Omit<NavLinkRow, 'id' | 'created_at'> & {
          id?: number;
          created_at?: string;
        };
        Update: Partial<NavLinkRow>;
        Relationships: [];
      };
      contact_inquiries: {
        Row: ContactInquiryRow;
        Insert: ContactInquiryInsert & {
          id?: string;
          status?: ContactInquiryStatus;
          created_at?: string;
        };
        Update: Partial<ContactInquiryRow>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
  };
}
