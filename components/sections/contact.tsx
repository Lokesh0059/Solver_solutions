'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().min(1, 'Company name is required'),
  product: z.string().min(1, 'Please select a product'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof schema>;

const productOptions = [
  'Business ERP',
  'School ERP',
  'Clinical Lab Software',
  'Fruit & Vegetable ERP',
  'Dairy ERP',
  'Library Management',
  'Institute Management',
  'Shuttering ERP',
  'Courier Software',
  'Dry Cleaning Software',
  'Billing Software',
  'Other',
];

export function ContactSection() {
  const [submitted, setSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const selectedProduct = watch('product');

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-1 dark:bg-mesh-dark opacity-50" />
      <div className="container-max px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Get in Touch
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-4">
              Book Your Free Demo Today
            </h2>
            <p className="text-muted-foreground text-lg mb-8 text-balance">
              See our ERP solutions in action. Our team will walk you through a personalized demo and help you choose the right product for your business.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'solversolutions@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+977 9821323322' },
                { icon: MapPin, label: 'Office', value: 'Kathmandu, Nepal' },
                { icon: Clock, label: 'Hours', value: 'Mon–Sat, 9 AM – 7 PM GMT+5:45' },
                { icon: Globe, label: 'Nationwide', value: 'Serving 50+ company' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 glass-card p-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-semibold text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 sm:p-8 shadow-2xl shadow-primary/10"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">Thank You!</h3>
                <p className="text-muted-foreground text-sm">
                  We&apos;ve received your request. Our team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" {...register('name')} className="mt-1.5" />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" {...register('email')} className="mt-1.5" />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="+91 98765 43210" {...register('phone')} className="mt-1.5" />
                    {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your Company" {...register('company')} className="mt-1.5" />
                    {errors.company && <p className="text-xs text-destructive mt-1">{errors.company.message}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="product">Product of Interest</Label>
                  <Select
                    value={selectedProduct}
                    onValueChange={(val) => setValue('product', val, { shouldValidate: true })}
                  >
                    <SelectTrigger className="mt-1.5 w-full">
                      <SelectValue placeholder="Select a product" />
                    </SelectTrigger>
                    <SelectContent>
                      {productOptions.map((p) => (
                        <SelectItem key={p} value={p}>
                          {p}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.product && <p className="text-xs text-destructive mt-1">{errors.product.message}</p>}
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    {...register('message')}
                    className="mt-1.5 resize-none"
                  />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-lg shadow-primary/25 group"
                >
                  {isSubmitting ? 'Sending...' : 'Book Free Demo'}
                  {!isSubmitting && <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
