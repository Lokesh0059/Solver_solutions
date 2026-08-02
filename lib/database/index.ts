export type { Database, ProductCategory, ContactInquiryStatus } from './types';
export type {
  ProductRow,
  MarketingToolRow,
  MobileAppRow,
  WhyChooseFeatureRow,
  IndustryRow,
  PlatformFeatureRow,
  StatRow,
  TestimonialRow,
  ClientLogoRow,
  NavLinkRow,
  ContactInquiryRow,
  ContactInquiryInsert,
} from './types';

export {
  getSupabase,
  createBrowserClient,
  createServerClient,
  createAdminClient,
} from './connection';

export {
  getProducts,
  getFeaturedProducts,
  getMarketingTools,
  getMobileApps,
  getWhyChooseFeatures,
  getIndustries,
  getPlatformFeatures,
  getStats,
  getTestimonials,
  getClientLogos,
  getNavLinks,
  submitContactInquiry,
} from './queries';
