'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ChevronDown, ArrowRight, Boxes } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { navLinks, products } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleMegaEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMegaMenuOpen(true);
  };

  const handleMegaLeave = () => {
    timeoutRef.current = setTimeout(() => setMegaMenuOpen(false), 200);
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'glass shadow-lg shadow-primary/5 py-2'
            : 'bg-transparent py-4'
        )}
      >
        <nav className="container-max px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 blur-lg group-hover:bg-primary/50 transition-colors" />
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Boxes className="w-6 h-6 text-white" />
              </div>
            </div>
            <span className="font-heading font-bold text-xl text-foreground">
              Solver
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasMegaMenu ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={handleMegaEnter}
                  onMouseLeave={handleMegaLeave}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                    {link.label}
                    <ChevronDown className={cn('w-4 h-4 transition-transform', megaMenuOpen && 'rotate-180')} />
                  </button>

                  <AnimatePresence>
                    {megaMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px]"
                      >
                        <div className="glass-card p-6 shadow-2xl shadow-primary/10">
                          <div className="grid grid-cols-2 gap-3">
                            {products.map((product) => (
                              <Link
                                key={product.id}
                                href={`#products`}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors group/item"
                              >
                                <div className={cn(
                                  'w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center shrink-0',
                                  product.gradient
                                )}>
                                  <product.icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <p className="text-sm font-semibold text-foreground group-hover/item:text-primary transition-colors">
                                    {product.name}
                                  </p>
                                  <p className="text-xs text-muted-foreground line-clamp-1">
                                    {product.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">
                              {products.length}+ products for every industry
                            </span>
                            <Link href="#products" className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
                              View all products <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(!searchOpen)}
              className="rounded-full hover:bg-primary/10"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </Button>
            <ThemeToggle />
            <Button asChild className="hidden sm:flex rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-lg shadow-primary/25">
              <Link href="#contact">Book Demo</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-full"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </nav>

        {/* Search bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="container-max px-4 sm:px-6 lg:px-8 mt-2"
            >
              <div className="glass-card p-4">
                <div className="flex items-center gap-3">
                  <Search className="w-5 h-5 text-muted-foreground" />
                  <input
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products, solutions, industries..."
                    className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                  />
                  <button onClick={() => { setSearchOpen(false); setSearchQuery(''); }}>
                    <X className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                  </button>
                </div>
                {searchQuery && (
                  <div className="mt-3 space-y-1 max-h-60 overflow-y-auto">
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map((p) => (
                        <Link
                          key={p.id}
                          href="#products"
                          onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors"
                        >
                          <p.icon className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">{p.name}</span>
                          <span className="text-xs text-muted-foreground">— {p.category}</span>
                        </Link>
                      ))
                    ) : (
                      <p className="text-sm text-muted-foreground p-2">No results found.</p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-background shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <span className="font-heading font-bold text-lg">Menu</span>
                <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                  <X className="w-6 h-6" />
                </Button>
              </div>
              <div className="p-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-xl text-foreground hover:bg-primary/5 hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4">
                  <Button asChild className="w-full rounded-full bg-gradient-to-r from-primary to-accent text-white">
                    <Link href="#contact" onClick={() => setMobileOpen(false)}>Book Free Demo</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
