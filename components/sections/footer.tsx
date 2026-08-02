'use client';

import Link from 'next/link';
import { Boxes, Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const footerLinks = {
  Products: ['Business ERP', 'School ERP', 'Billing Software', 'Clinical Lab', 'Courier Software', 'Dairy ERP'],
  Solutions: ['Inventory Management', 'Accounting', 'CRM', 'HR & Payroll', 'Reports', 'Multi-Branch'],
  Company: ['About Us', 'Testimonials', 'Industries', 'Mobile Apps', 'Marketing Tools', 'Contact'],
  Resources: ['Documentation', 'Help Center', 'API Reference', 'Blog', 'Case Studies', 'Partners'],
};

const socialLinks = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Youtube, label: 'YouTube' },
  { icon: Instagram, label: 'Instagram' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-secondary/30">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Boxes className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-foreground">Solver</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Smart ERP solutions for every business. Trusted by 500,000+ customers across 50+ countries.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href="#"
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
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Solver Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link>
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
