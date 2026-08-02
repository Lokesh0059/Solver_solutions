import {
    Briefcase,
    GraduationCap,
    FlaskConical,
    Apple,
    Milk,
    BookOpen,
    Building2,
    HardHat,
    Package,
    Shirt,
    Receipt,
    Megaphone,
    MapPin,
    Mail,
    Smartphone,
    School,
    Utensils,
    ShoppingBag,
    ShieldCheck,
    Wallet,
    Lock,
    SlidersHorizontal,
    Smartphone as PhoneIcon,
    Headphones,
    Zap,
    RefreshCw,
    Database,
    Cloud,
    Boxes,
    Calculator,
    FileText,
    Users,
    BarChart3,
    Truck,
    PackageCheck,
    Globe,
    Clock,
    Heart,
    type LucideIcon,
  } from 'lucide-react';
  
  export type Product = {
    id: string;
    name: string;
    category: 'Business' | 'Education' | 'Healthcare' | 'Industry' | 'Retail' | 'Services';
    description: string;
    features: string[];
    icon: LucideIcon;
    gradient: string;
    featured?: boolean;
  };
  
  export const products: Product[] = [
    {
      id: 'business-erp',
      name: 'Business ERP',
      category: 'Business',
      description: 'Complete enterprise resource planning for growing businesses with real-time insights.',
      features: ['Inventory & Stock', 'Accounting', 'CRM', 'HR Management', 'Reports & Analytics'],
      icon: Briefcase,
      gradient: 'from-blue-500 to-cyan-500',
      featured: true,
    },
    {
      id: 'school-erp',
      name: 'School ERP',
      category: 'Education',
      description: 'Manage students, staff, fees, exams, and attendance in one unified platform.',
      features: ['Student Management', 'Fee Collection', 'Timetable', 'Exam Results', 'Parent Portal'],
      icon: GraduationCap,
      gradient: 'from-violet-500 to-purple-500',
      featured: true,
    },
    {
      id: 'clinical-lab',
      name: 'Clinical Lab Software',
      category: 'Healthcare',
      description: 'Streamline lab operations from sample collection to report delivery.',
      features: ['Sample Tracking', 'Test Reports', 'Patient Records', 'Billing', 'Barcode Support'],
      icon: FlaskConical,
      gradient: 'from-rose-500 to-pink-500',
      featured: true,
    },
    {
      id: 'fruit-veg-erp',
      name: 'Fruit & Vegetable ERP',
      category: 'Industry',
      description: 'Specialized ERP for produce businesses with batch tracking and perishable management.',
      features: ['Batch Tracking', 'Quality Control', 'Cold Chain', 'Supplier Management', 'Wastage Reports'],
      icon: Apple,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: 'dairy-erp',
      name: 'Dairy ERP',
      category: 'Industry',
      description: 'End-to-end dairy management from milk collection to distribution.',
      features: ['Milk Collection', 'Route Management', 'Quality Testing', 'Farmer Payments', 'Dispatch'],
      icon: Milk,
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      id: 'library-mgmt',
      name: 'Library Management',
      category: 'Education',
      description: 'Complete library automation with cataloging, circulation, and member management.',
      features: ['Cataloging', 'Circulation', 'Member Management', 'Fine Tracking', 'OPAC'],
      icon: BookOpen,
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      id: 'institute-mgmt',
      name: 'Institute Management',
      category: 'Education',
      description: 'Manage coaching institutes, training centers, and vocational programs.',
      features: ['Batch Management', 'Fee Tracking', 'Attendance', 'Faculty Scheduling', 'Online Tests'],
      icon: Building2,
      gradient: 'from-teal-500 to-cyan-500',
    },
    {
      id: 'shuttering-erp',
      name: 'Shuttering ERP',
      category: 'Industry',
      description: 'Construction shuttering material management with rental and return tracking.',
      features: ['Material Tracking', 'Rental Billing', 'Return Management', 'Site Reports', 'Stock Ledger'],
      icon: HardHat,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 'courier-software',
      name: 'Courier Software',
      category: 'Services',
      description: 'Complete courier and logistics management with tracking and delivery optimization.',
      features: ['Booking & Tracking', 'Route Optimization', 'Delivery Proof', 'COD Management', 'Branch Network'],
      icon: Truck,
      gradient: 'from-sky-500 to-blue-500',
    },
    {
      id: 'dry-cleaning',
      name: 'Dry Cleaning Software',
      category: 'Services',
      description: 'Manage dry cleaning and laundry operations with pickup and delivery support.',
      features: ['Order Tracking', 'Pickup & Delivery', 'Customer CRM', 'Invoice & Billing', 'SMS Alerts'],
      icon: Shirt,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 'billing-software',
      name: 'Billing Software',
      category: 'Retail',
      description: 'Fast GST-compliant billing with barcode support and inventory integration.',
      features: ['GST Billing', 'Barcode Scanning', 'Quick POS', 'Returns & Exchange', 'Day Reports'],
      icon: Receipt,
      gradient: 'from-cyan-500 to-teal-500',
      featured: true,
    },
  ];
  
  export const productCategories = [
    'All',
    'Business',
    'Education',
    'Healthcare',
    'Industry',
    'Retail',
    'Services',
  ] as const;
  
  export type MarketingTool = {
    id: string;
    name: string;
    description: string;
    features: string[];
    icon: LucideIcon;
    gradient: string;
  };
  
  export const marketingTools: MarketingTool[] = [
    {
      id: 'whatsapp-marketing',
      name: 'WhatsApp Marketing',
      description: 'Reach customers directly with bulk WhatsApp campaigns, auto-replies, and broadcast lists.',
      features: ['Bulk Messaging', 'Auto Reply Bot', 'Campaign Analytics', 'Contact Management', 'Template Messages'],
      icon: Megaphone,
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      id: 'maps-lead-gen',
      name: 'Google Maps Lead Generator',
      description: 'Extract business leads from Google Maps by category and location for targeted outreach.',
      features: ['Location-Based Extraction', 'Category Filters', 'Export to CSV', 'Phone & Email Capture', 'Bulk Processing'],
      icon: MapPin,
      gradient: 'from-red-400 to-rose-500',
    },
    {
      id: 'email-marketing',
      name: 'Email Marketing',
      description: 'Design, schedule, and track professional email campaigns with drag-and-drop templates.',
      features: ['Drag & Drop Builder', 'Email Templates', 'Scheduled Campaigns', 'Open Rate Tracking', 'Subscriber Lists'],
      icon: Mail,
      gradient: 'from-blue-400 to-indigo-500',
    },
  ];
  
  export type MobileApp = {
    id: string;
    name: string;
    description: string;
    icon: LucideIcon;
    gradient: string;
    features: string[];
  };
  
  export const mobileApps: MobileApp[] = [
    {
      id: 'business-app',
      name: 'Business App',
      description: 'Manage your entire business operations on the go with real-time dashboards.',
      icon: Briefcase,
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Sales Dashboard', 'Inventory Check', 'Invoice Creation', 'Reports', 'Multi-Branch'],
    },
    {
      id: 'school-app',
      name: 'School App',
      description: 'Connect parents, teachers, and students with real-time updates and notifications.',
      icon: School,
      gradient: 'from-violet-500 to-purple-500',
      features: ['Attendance', 'Exam Results', 'Fee Payments', 'Homework', 'Notices'],
    },
    {
      id: 'restaurant-app',
      name: 'Restaurant App',
      description: 'Take orders, manage tables, and track kitchen orders from your phone.',
      icon: Utensils,
      gradient: 'from-orange-500 to-red-500',
      features: ['Table Orders', 'Menu Management', 'KOT', 'Bill Settlement', 'Delivery Tracking'],
    },
    {
      id: 'market-app',
      name: 'Market App',
      description: 'Run your retail store with quick billing and stock management anywhere.',
      icon: ShoppingBag,
      gradient: 'from-green-500 to-emerald-500',
      features: ['Quick Billing', 'Stock Updates', 'Customer Loyalty', 'Daily Reports', 'Barcode Scan'],
    },
  ];
  
  export type WhyChooseFeature = {
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
  };
  
  export const whyChooseFeatures: WhyChooseFeature[] = [
    { title: 'Easy to Use', description: 'Intuitive interface that requires minimal training.', icon: Zap, color: 'text-amber-500' },
    { title: 'Affordable', description: 'Pricing plans that fit businesses of all sizes.', icon: Wallet, color: 'text-green-500' },
    { title: 'Secure', description: 'Bank-grade encryption and data protection.', icon: Lock, color: 'text-red-500' },
    { title: 'Customizable', description: 'Tailor every module to your specific workflow.', icon: SlidersHorizontal, color: 'text-purple-500' },
    { title: 'Mobile Friendly', description: 'Access your data from any device, anywhere.', icon: PhoneIcon, color: 'text-blue-500' },
    { title: '24/7 Support', description: 'Round-the-clock assistance when you need it.', icon: Headphones, color: 'text-cyan-500' },
    { title: 'Fast Setup', description: 'Get running in minutes, not weeks.', icon: Zap, color: 'text-orange-500' },
    { title: 'Lifetime Updates', description: 'Free updates and new features forever.', icon: RefreshCw, color: 'text-teal-500' },
    { title: 'Automatic Backup', description: 'Your data is always safe and recoverable.', icon: Database, color: 'text-indigo-500' },
    { title: 'Cloud Sync', description: 'Real-time sync across all your devices and branches.', icon: Cloud, color: 'text-sky-500' },
  ];
  
  export type Industry = {
    name: string;
    icon: LucideIcon;
    color: string;
    bgColor: string;
  };
  
  export const industries: Industry[] = [
    { name: 'Retail', icon: ShoppingBag, color: 'text-blue-600', bgColor: 'bg-blue-50 dark:bg-blue-950/40' },
    { name: 'Wholesale', icon: Package, color: 'text-cyan-600', bgColor: 'bg-cyan-50 dark:bg-cyan-950/40' },
    { name: 'Manufacturing', icon: Building2, color: 'text-orange-600', bgColor: 'bg-orange-50 dark:bg-orange-950/40' },
    { name: 'Education', icon: GraduationCap, color: 'text-violet-600', bgColor: 'bg-violet-50 dark:bg-violet-950/40' },
    { name: 'Healthcare', icon: Heart, color: 'text-rose-600', bgColor: 'bg-rose-50 dark:bg-rose-950/40' },
    { name: 'Restaurants', icon: Utensils, color: 'text-amber-600', bgColor: 'bg-amber-50 dark:bg-amber-950/40' },
    { name: 'Hotels', icon: Building2, color: 'text-teal-600', bgColor: 'bg-teal-50 dark:bg-teal-950/40' },
    { name: 'Courier', icon: Truck, color: 'text-sky-600', bgColor: 'bg-sky-50 dark:bg-sky-950/40' },
    { name: 'Construction', icon: HardHat, color: 'text-yellow-600', bgColor: 'bg-yellow-50 dark:bg-yellow-950/40' },
    { name: 'Dairy', icon: Milk, color: 'text-stone-600', bgColor: 'bg-stone-50 dark:bg-stone-950/40' },
    { name: 'Laboratory', icon: FlaskConical, color: 'text-pink-600', bgColor: 'bg-pink-50 dark:bg-pink-950/40' },
    { name: 'Library', icon: BookOpen, color: 'text-indigo-600', bgColor: 'bg-indigo-50 dark:bg-indigo-950/40' },
    { name: 'Pharmacy', icon: PackageCheck, color: 'text-emerald-600', bgColor: 'bg-emerald-50 dark:bg-emerald-950/40' },
    { name: 'Supermarket', icon: ShoppingBag, color: 'text-green-600', bgColor: 'bg-green-50 dark:bg-green-950/40' },
    { name: 'Finance', icon: BarChart3, color: 'text-purple-600', bgColor: 'bg-purple-50 dark:bg-purple-950/40' },
    { name: 'Agriculture', icon: Apple, color: 'text-lime-600', bgColor: 'bg-lime-50 dark:bg-lime-950/40' },
  ];
  
  export type Feature = {
    title: string;
    description: string;
    icon: LucideIcon;
    span?: string;
  };
  
  export const features: Feature[] = [
    { title: 'Inventory Management', description: 'Real-time stock tracking across multiple warehouses with automated reorder alerts and batch management.', icon: Boxes, span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Accounting', description: 'Double-entry accounting with GST, TDS, and multi-currency support.', icon: Calculator },
    { title: 'Billing & Invoicing', description: 'GST-compliant invoices with barcode, POS, and thermal printer support.', icon: Receipt },
    { title: 'CRM', description: 'Track leads, manage pipelines, and nurture customer relationships.', icon: Users },
    { title: 'Reports & Analytics', description: 'Real-time dashboards with 100+ report formats and export options.', icon: BarChart3, span: 'lg:col-span-2' },
    { title: 'Document Management', description: 'Store, organize, and share business documents securely in the cloud.', icon: FileText },
    { title: 'Multi-Branch', description: 'Manage unlimited branches with consolidated reporting and stock transfer.', icon: Globe },
    { title: 'HR & Payroll', description: 'Employee management with attendance, leave, and payroll processing.', icon: Users },
    { title: 'Order Management', description: 'Track orders from creation to fulfillment with delivery scheduling.', icon: PackageCheck, span: 'lg:col-span-2' },
  ];
  
  export type Stat = {
    value: number;
    suffix: string;
    label: string;
    icon: LucideIcon;
  };
  
  export const stats: Stat[] = [
    { value: 15, suffix: '+', label: 'Years Experience', icon: Clock },
    { value: 500000, suffix: '+', label: 'Customers', icon: Users },
    { value: 50, suffix: '+', label: 'Countries', icon: Globe },
    { value: 126, suffix: '+', label: 'Industries', icon: Briefcase },
    { value: 99, suffix: '%', label: 'Satisfaction', icon: Heart },
  ];
  
  export type Testimonial = {
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    avatar: string;
  };
  
  export const testimonials: Testimonial[] = [
    {
      name: 'Rajesh Kumar',
      role: 'Managing Director',
      company: 'Sharma Traders',
      content: 'Solver ERP transformed our entire operation. Inventory management that used to take days now happens in real-time. The ROI was visible within the first month.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Priya Sharma',
      role: 'Principal',
      company: 'Greenwood International School',
      content: 'The School ERP has been a game-changer for us. Parents love the real-time updates, and our administrative workload has dropped by 70%. Absolutely recommended.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Dr. Amit Patel',
      role: 'Lab Director',
      company: 'MediLab Diagnostics',
      content: 'From sample collection to report delivery, everything is seamless now. The barcode tracking and automated reporting have eliminated errors completely.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Sunita Reddy',
      role: 'CEO',
      company: 'FreshMart Supermarket',
      content: 'The billing software is incredibly fast. We process 500+ bills a day with zero downtime. The GST compliance features alone have saved us countless hours.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Mohammed Iqbal',
      role: 'Owner',
      company: 'Speed Courier Services',
      content: 'The courier software handles our entire network of 40 branches effortlessly. Real-time tracking and COD management have made us far more efficient.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Vikram Singh',
      role: 'Operations Head',
      company: 'Anand Dairy',
      content: 'Milk collection, quality testing, route management — everything in one place. The farmer payment system alone has saved us 20 hours of work every week.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
  ];
  
  export const clientLogos = [
    'Sharma Traders',
    'Greenwood School',
    'MediLab',
    'FreshMart',
    'Speed Courier',
    'Anand Dairy',
    'BuildWell',
    'EduPlus',
    'TechRetail',
    'AgriFresh',
    'MediStore',
    'CityHotel',
  ];
  
  export const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products', hasMegaMenu: true },
    { label: 'Solutions', href: '#features' },
    { label: 'Industries', href: '#industries' },
    { label: 'Apps', href: '#apps' },
    { label: 'About', href: '#why-us' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];
  