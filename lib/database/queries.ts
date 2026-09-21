import type {
  ClientLogoRow,
  ContactInquiryInsert,
  ContactInquiryRow,
  IndustryRow,
  MarketingToolRow,
  MobileAppRow,
  NavLinkRow,
  PlatformFeatureRow,
  ProductRow,
  StatRow,
  TestimonialRow,
  WhyChooseFeatureRow,
} from './types';
import { getSupabase } from './connection';


export async function getProducts(): Promise<ProductRow[]> {
  const { data, error } = await getSupabase()
    .from('products')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return (data ?? []) as ProductRow[];
}

export async function getFeaturedProducts(): Promise<ProductRow[]> {
  const { data, error } = await getSupabase()
    .from('products')
    .select('*')
    .eq('featured', true)
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return (data ?? []) as ProductRow[];
}

export async function getMarketingTools(): Promise<MarketingToolRow[]> {
  const { data, error } = await getSupabase()
    .from('marketing_tools')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return (data ?? []) as MarketingToolRow[];
}

export async function getMobileApps(): Promise<MobileAppRow[]> {
  const { data, error } = await getSupabase()
    .from('mobile_apps')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return (data ?? []) as MobileAppRow[];
}

export async function getWhyChooseFeatures(): Promise<WhyChooseFeatureRow[]> {
  const { data, error } = await getSupabase()
    .from('why_choose_features')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return (data ?? []) as WhyChooseFeatureRow[];
}

export async function getIndustries(): Promise<IndustryRow[]> {
  const { data, error } = await getSupabase()
    .from('industries')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return (data ?? []) as IndustryRow[];
}

export async function getPlatformFeatures(): Promise<PlatformFeatureRow[]> {
  const { data, error } = await getSupabase()
    .from('platform_features')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return (data ?? []) as PlatformFeatureRow[];
}

export async function getStats(): Promise<StatRow[]> {
  const { data, error } = await getSupabase()
    .from('stats')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return (data ?? []) as StatRow[];
}

export async function getTestimonials(): Promise<TestimonialRow[]> {
  const { data, error } = await getSupabase()
    .from('testimonials')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return (data ?? []) as TestimonialRow[];
}

export async function getClientLogos(): Promise<ClientLogoRow[]> {
  const { data, error } = await getSupabase()
    .from('client_logos')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return (data ?? []) as ClientLogoRow[];
}

export async function getNavLinks(): Promise<NavLinkRow[]> {
  const { data, error } = await getSupabase()
    .from('nav_links')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return (data ?? []) as NavLinkRow[];
}

export async function submitContactInquiry(
  inquiry: ContactInquiryInsert
): Promise<void> {
  const { error } = await getSupabase()
    .from('contact_inquiries')
    .insert(inquiry);

  if (error) throw error;
}
export async function getContactInquiries(): Promise<ContactInquiryRow[]> {
  const { data, error } = await getSupabase()
    .from('contact_inquiries')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return (data ?? []) as ContactInquiryRow[];
}
