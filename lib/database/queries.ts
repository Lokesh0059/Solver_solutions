import type { ContactInquiryInsert } from './types';
import { getSupabase } from './connection';

export async function getProducts() {
  const { data, error } = await getSupabase()
    .from('products')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return data;
}

export async function getFeaturedProducts() {
  const { data, error } = await getSupabase()
    .from('products')
    .select('*')
    .eq('featured', true)
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return data;
}

export async function getMarketingTools() {
  const { data, error } = await getSupabase()
    .from('marketing_tools')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return data;
}

export async function getMobileApps() {
  const { data, error } = await getSupabase()
    .from('mobile_apps')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return data;
}

export async function getWhyChooseFeatures() {
  const { data, error } = await getSupabase()
    .from('why_choose_features')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return data;
}

export async function getIndustries() {
  const { data, error } = await getSupabase()
    .from('industries')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return data;
}

export async function getPlatformFeatures() {
  const { data, error } = await getSupabase()
    .from('platform_features')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return data;
}

export async function getStats() {
  const { data, error } = await getSupabase()
    .from('stats')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return data;
}

export async function getTestimonials() {
  const { data, error } = await getSupabase()
    .from('testimonials')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return data;
}

export async function getClientLogos() {
  const { data, error } = await getSupabase()
    .from('client_logos')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return data;
}

export async function getNavLinks() {
  const { data, error } = await getSupabase()
    .from('nav_links')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return data;
}

export async function submitContactInquiry(inquiry: ContactInquiryInsert) {
  const { data, error } = await getSupabase()
    .from('contact_inquiries')
    .insert(inquiry)
    .select()
    .single();

  if (error) throw error;
  return data;
}
