export type ProductCategory =
  | 'Business'
  | 'Education'
  | 'Healthcare'
  | 'Industry'
  | 'Retail'
  | 'Services';

export type ContactInquiryStatus = 'new' | 'contacted' | 'closed';

export interface ProductRow {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  features: string[];
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
  features: string[];
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
  features: string[];
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

export interface ContactInquiryInsert {
  name: string;
  email: string;
  phone: string;
  company: string;
  product: string;
  message: string;
}

type TableDef<Row, Insert, Update> = {
  Row: Row;
  Insert: Insert;
  Update: Update;
  Relationships: [];
};

export interface Database {
  public: {
    Tables: {
      products: TableDef<
        ProductRow,
        Omit<ProductRow, 'created_at' | 'updated_at'> & {
          created_at?: string;
          updated_at?: string;
        },
        Partial<ProductRow>
      >;
      marketing_tools: TableDef<
        MarketingToolRow,
        Omit<MarketingToolRow, 'created_at' | 'updated_at'> & {
          created_at?: string;
          updated_at?: string;
        },
        Partial<MarketingToolRow>
      >;
      mobile_apps: TableDef<
        MobileAppRow,
        Omit<MobileAppRow, 'created_at' | 'updated_at'> & {
          created_at?: string;
          updated_at?: string;
        },
        Partial<MobileAppRow>
      >;
      why_choose_features: TableDef<
        WhyChooseFeatureRow,
        Omit<WhyChooseFeatureRow, 'id' | 'created_at'> & {
          id?: number;
          created_at?: string;
        },
        Partial<WhyChooseFeatureRow>
      >;
      industries: TableDef<
        IndustryRow,
        Omit<IndustryRow, 'id' | 'created_at'> & {
          id?: number;
          created_at?: string;
        },
        Partial<IndustryRow>
      >;
      platform_features: TableDef<
        PlatformFeatureRow,
        Omit<PlatformFeatureRow, 'id' | 'created_at'> & {
          id?: number;
          created_at?: string;
        },
        Partial<PlatformFeatureRow>
      >;
      stats: TableDef<
        StatRow,
        Omit<StatRow, 'id' | 'created_at'> & {
          id?: number;
          created_at?: string;
        },
        Partial<StatRow>
      >;
      testimonials: TableDef<
        TestimonialRow,
        Omit<TestimonialRow, 'id' | 'created_at'> & {
          id?: number;
          created_at?: string;
        },
        Partial<TestimonialRow>
      >;
      client_logos: TableDef<
        ClientLogoRow,
        Omit<ClientLogoRow, 'id' | 'created_at'> & {
          id?: number;
          created_at?: string;
        },
        Partial<ClientLogoRow>
      >;
      nav_links: TableDef<
        NavLinkRow,
        Omit<NavLinkRow, 'id' | 'created_at'> & {
          id?: number;
          created_at?: string;
        },
        Partial<NavLinkRow>
      >;
      contact_inquiries: {
        Row: ContactInquiryRow;
        Insert: {
          name: string;
          email: string;
          phone: string;
          company: string;
          product: string;
          message: string;
          id?: string;
          status?: ContactInquiryStatus;
          created_at?: string;
        };
        Update: Partial<ContactInquiryRow>;
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      product_category: ProductCategory;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
