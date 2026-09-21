'use client';

import Link from 'next/link';
import { Boxes, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { navLinks } from '@/lib/data';

// Single source of truth: pull each anchor straight from navLinks
// (the same array the Navbar uses) instead of re-typing hrefs here.
// If a navLink's label or href ever changes, the footer follows
// automatically — no more #solutions-vs-#features style drift.
function hrefFor(navLabel: string): string {
  const match = navLinks.find((l) => l.label === navLabel);
  if (!match) {
    // Dev-time signal: this label doesn't exist in navLinks, so there's
    // nothing to stay in sync with. Falls back to "#" (does nothing)
    // rather than silently guessing a section id that may not exist.
    console.warn(`Footer: no navLinks entry found for "${navLabel}"`);
    return '#';
  }
  return match.href;
}

const footerLinks: Record<string, { label: string; href: string }[]> = {
  // All six products live inside the one Products section — same
  // destination as the navbar's "Products" link and its mega menu.
  Products: [
    { label: 'Business ERP', href: hrefFor('Products') },
    { label: 'School ERP', href: hrefFor('Products') },
    { label: 'Billing Software', href: hrefFor('Products') },
    { label: 'Clinical Lab', href: hrefFor('Products') },
    { label: 'Courier Software', href: hrefFor('Products') },
    { label: 'Dairy ERP', href: hrefFor('Products') },
  ],
  // "Solutions" in the footer maps to the navbar's "Solutions" label,
  // which actually points at #features in data.ts — same section.
  Solutions: [
    { label: 'Inventory Management', href: hrefFor('Solutions') },
    { label: 'Accounting', href: hrefFor('Solutions') },
    { label: 'CRM', href: hrefFor('Solutions') },
    { label: 'HR & Payroll', href: hrefFor('Solutions') },
    { label: 'Reports', href: hrefFor('Solutions') },
    { label: 'Multi-Branch', href: hrefFor('Solutions') },
  ],
  Company: [
    { label: 'About Us', href: hrefFor('About') },
    { label: 'Testimonials', href: hrefFor('Testimonials') },
    { label: 'Industries', href: hrefFor('Industries') },
    { label: 'Mobile Apps', href: hrefFor('Apps') },
    // ⚠️ There's no "Marketing Tools" entry in navLinks / no matching
    // section id anywhere in data.ts. Point this at whichever real
    // section actually holds marketing tools content once you add one,
    // or add a navLinks entry for it so it stays in sync too.
    // { label: 'Marketing Tools', href: '#' },
    { label: 'Contact', href: hrefFor('Contact') },
  ],
};

// Contact info is real contact info, not navigation — leave as tel:/mailto:.
const contactInfo = [
  { label: '+977 9821839121', href: 'tel:+9779821839121' },
  { label: 'solversolutions@gmail.com', href: 'mailto:solversolutions@gmail.com' },
  { label: 'Kathmandu, Nepal', href: null },
];

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/yourpage' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/yourhandle' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/yourcompany' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/yourhandle' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-secondary/30">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={hrefFor('Home')} className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Boxes className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-foreground">Solver</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Smart ERP solutions for every business. Trusted by 50,000+ customers across 10+ countries.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column — plain text/tel/mailto, not section anchors */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Solver Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            {/* These aren't landing-page sections — they're legal documents,
                so they stay as real routes rather than anchors. Create
                app/privacy-policy/page.tsx etc. if these don't exist yet. */}
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-orange-500">●</span>
            <span>Made in Nepal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}