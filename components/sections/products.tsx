'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Download, ArrowRight, Star, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products, productCategories, type Product } from '@/lib/data';
import { cn } from '@/lib/utils';

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = React.useState<string>('All');
  const [search, setSearch] = React.useState('');

  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="section-padding relative">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
          >
            ERP Products
          </motion.span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Software for Every Business Need
          </h2>
          <p className="mt-4 text-muted-foreground text-lg text-balance">
            From retail to manufacturing, education to healthcare — find the perfect ERP solution for your industry.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="mb-10 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-3 rounded-full glass border border-border focus:border-primary outline-none text-foreground placeholder:text-muted-foreground transition-colors"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {productCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all',
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25'
                    : 'glass text-foreground/70 hover:text-primary hover:bg-primary/5'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No products found. Try a different search or category.</p>
          </div>
        )}
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative"
    >
      <div className="gradient-border h-full p-6 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
        {/* Featured badge */}
        {product.featured && (
          <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-semibold shadow-lg">
            <Star className="w-3 h-3 fill-white" />
            Featured
          </div>
        )}

        {/* Icon */}
        <div className={cn('w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-4 group-hover:scale-110 transition-transform', product.gradient)}>
          <product.icon className="w-7 h-7 text-white" />
        </div>

        {/* Category */}
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
          {product.category}
        </span>

        {/* Name */}
        <h3 className="font-heading text-xl font-bold mt-1 mb-2 text-foreground">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Features */}
        <ul className="space-y-1.5 mb-6">
          {product.features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-foreground/70">
              <Check className="w-4 h-4 text-green-500 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1 rounded-full group/btn">
            Learn More
            <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
          <Button size="sm" className="rounded-full bg-gradient-to-r from-primary to-accent text-white">
            <Download className="w-4 h-4 mr-1" />
            Download
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
