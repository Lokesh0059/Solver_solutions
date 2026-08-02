'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, TrendingUp, Users, DollarSign, Activity, Bell, BarChart3, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { stats } from '@/lib/data';
import { AnimatedCounter } from '@/components/animated-counter';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh-1 dark:bg-mesh-dark" />
      <div className="absolute inset-0 bg-grid opacity-50 dark:opacity-20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-primary/10 via-accent/10 to-transparent rounded-full blur-3xl animate-spin-slow" />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground/80">Made in Nepal · Trusted Globally</span>
            </motion.div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-balance">
              Transform Your Business with{' '}
              <span className="gradient-text animate-gradient-x">Smart ERP Solutions</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-balance">
              All-in-one ERP software for every industry. Manage inventory, billing, accounting,
              and operations with real-time insights — trusted by 500,000+ businesses worldwide.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-xl shadow-primary/30 group">
                <Link href="#contact">
                  Book Free Demo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full glass group">
                <Link href="#products">
                  <Play className="w-5 h-5 mr-2 text-primary" />
                  Explore Products
                </Link>
              </Button>
            </div>

            {/* Mini stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              {stats.slice(0, 3).map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="font-heading text-2xl font-bold text-foreground">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Animated Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative perspective-1000"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="relative">
      {/* Main dashboard card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="glass-card p-5 shadow-2xl shadow-primary/20 relative z-10"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Activity className="w-3.5 h-3.5 text-green-500" />
            Live Dashboard
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { icon: DollarSign, label: 'Revenue', value: '₹4.2L', color: 'text-green-500', bg: 'bg-green-500/10' },
            { icon: Users, label: 'Customers', value: '12,450', color: 'text-blue-500', bg: 'bg-blue-500/10' },
            { icon: TrendingUp, label: 'Growth', value: '+24%', color: 'text-accent', bg: 'bg-accent/10' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="p-3 rounded-xl bg-background/50"
            >
              <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center mb-2`}>
                <item.icon className={`w-4 h-4 ${item.color}`} />
              </div>
              <p className="text-lg font-bold text-foreground">{item.value}</p>
              <p className="text-xs text-muted-foreground">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Chart */}
        <div className="p-4 rounded-xl bg-background/50">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-foreground">Sales Overview</span>
            <BarChart3 className="w-4 h-4 text-primary" />
          </div>
          <div className="flex items-end gap-2 h-32">
            {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.6 + i * 0.05, duration: 0.5 }}
                className="flex-1 rounded-t-md bg-gradient-to-t from-primary to-accent"
                style={{ minHeight: '8px' }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating Card 1 - Revenue */}
      <motion.div
        animate={{ y: [0, -16, 0], x: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-6 -left-6 sm:-left-10 z-20 glass-card p-3 shadow-xl shadow-primary/10"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Monthly Revenue</p>
            <p className="font-bold text-foreground">₹4,20,500</p>
          </div>
        </div>
      </motion.div>

      {/* Floating Card 2 - Orders */}
      <motion.div
        animate={{ y: [0, 14, 0], x: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-4 -right-4 sm:-right-8 z-20 glass-card p-3 shadow-xl shadow-accent/10"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
            <Bell className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">New Orders</p>
            <p className="font-bold text-foreground">+128 today</p>
          </div>
        </div>
      </motion.div>

      {/* Floating Card 3 - Growth */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-1/2 -right-2 sm:-right-12 z-20 glass-card p-3 shadow-xl shadow-primary/10 hidden sm:block"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Growth</p>
            <p className="font-bold text-sm text-foreground">+24.5%</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
