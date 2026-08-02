-- Seed data matching lib/data.ts
-- Run after schema.sql in the Supabase SQL Editor.

INSERT INTO products (id, name, category, description, features, icon, gradient, featured, sort_order) VALUES
  ('business-erp', 'Business ERP', 'Business', 'Complete enterprise resource planning for growing businesses with real-time insights.', '["Inventory & Stock", "Accounting", "CRM", "HR Management", "Reports & Analytics"]', 'Briefcase', 'from-blue-500 to-cyan-500', true, 1),
  ('school-erp', 'School ERP', 'Education', 'Manage students, staff, fees, exams, and attendance in one unified platform.', '["Student Management", "Fee Collection", "Timetable", "Exam Results", "Parent Portal"]', 'GraduationCap', 'from-violet-500 to-purple-500', true, 2),
  ('clinical-lab', 'Clinical Lab Software', 'Healthcare', 'Streamline lab operations from sample collection to report delivery.', '["Sample Tracking", "Test Reports", "Patient Records", "Billing", "Barcode Support"]', 'FlaskConical', 'from-rose-500 to-pink-500', true, 3),
  ('fruit-veg-erp', 'Fruit & Vegetable ERP', 'Industry', 'Specialized ERP for produce businesses with batch tracking and perishable management.', '["Batch Tracking", "Quality Control", "Cold Chain", "Supplier Management", "Wastage Reports"]', 'Apple', 'from-green-500 to-emerald-500', false, 4),
  ('dairy-erp', 'Dairy ERP', 'Industry', 'End-to-end dairy management from milk collection to distribution.', '["Milk Collection", "Route Management", "Quality Testing", "Farmer Payments", "Dispatch"]', 'Milk', 'from-amber-500 to-orange-500', false, 5),
  ('library-mgmt', 'Library Management', 'Education', 'Complete library automation with cataloging, circulation, and member management.', '["Cataloging", "Circulation", "Member Management", "Fine Tracking", "OPAC"]', 'BookOpen', 'from-indigo-500 to-blue-500', false, 6),
  ('institute-mgmt', 'Institute Management', 'Education', 'Manage coaching institutes, training centers, and vocational programs.', '["Batch Management", "Fee Tracking", "Attendance", "Faculty Scheduling", "Online Tests"]', 'Building2', 'from-teal-500 to-cyan-500', false, 7),
  ('shuttering-erp', 'Shuttering ERP', 'Industry', 'Construction shuttering material management with rental and return tracking.', '["Material Tracking", "Rental Billing", "Return Management", "Site Reports", "Stock Ledger"]', 'HardHat', 'from-orange-500 to-red-500', false, 8),
  ('courier-software', 'Courier Software', 'Services', 'Complete courier and logistics management with tracking and delivery optimization.', '["Booking & Tracking", "Route Optimization", "Delivery Proof", "COD Management", "Branch Network"]', 'Truck', 'from-sky-500 to-blue-500', false, 9),
  ('dry-cleaning', 'Dry Cleaning Software', 'Services', 'Manage dry cleaning and laundry operations with pickup and delivery support.', '["Order Tracking", "Pickup & Delivery", "Customer CRM", "Invoice & Billing", "SMS Alerts"]', 'Shirt', 'from-purple-500 to-pink-500', false, 10),
  ('billing-software', 'Billing Software', 'Retail', 'Fast GST-compliant billing with barcode support and inventory integration.', '["GST Billing", "Barcode Scanning", "Quick POS", "Returns & Exchange", "Day Reports"]', 'Receipt', 'from-cyan-500 to-teal-500', true, 11)
ON CONFLICT (id) DO NOTHING;

INSERT INTO marketing_tools (id, name, description, features, icon, gradient, sort_order) VALUES
  ('whatsapp-marketing', 'WhatsApp Marketing', 'Reach customers directly with bulk WhatsApp campaigns, auto-replies, and broadcast lists.', '["Bulk Messaging", "Auto Reply Bot", "Campaign Analytics", "Contact Management", "Template Messages"]', 'Megaphone', 'from-green-400 to-emerald-500', 1),
  ('maps-lead-gen', 'Google Maps Lead Generator', 'Extract business leads from Google Maps by category and location for targeted outreach.', '["Location-Based Extraction", "Category Filters", "Export to CSV", "Phone & Email Capture", "Bulk Processing"]', 'MapPin', 'from-red-400 to-rose-500', 2),
  ('email-marketing', 'Email Marketing', 'Design, schedule, and track professional email campaigns with drag-and-drop templates.', '["Drag & Drop Builder", "Email Templates", "Scheduled Campaigns", "Open Rate Tracking", "Subscriber Lists"]', 'Mail', 'from-blue-400 to-indigo-500', 3)
ON CONFLICT (id) DO NOTHING;

INSERT INTO mobile_apps (id, name, description, features, icon, gradient, sort_order) VALUES
  ('business-app', 'Business App', 'Manage your entire business operations on the go with real-time dashboards.', '["Sales Dashboard", "Inventory Check", "Invoice Creation", "Reports", "Multi-Branch"]', 'Briefcase', 'from-blue-500 to-cyan-500', 1),
  ('school-app', 'School App', 'Connect parents, teachers, and students with real-time updates and notifications.', '["Attendance", "Exam Results", "Fee Payments", "Homework", "Notices"]', 'School', 'from-violet-500 to-purple-500', 2),
  ('restaurant-app', 'Restaurant App', 'Take orders, manage tables, and track kitchen orders from your phone.', '["Table Orders", "Menu Management", "KOT", "Bill Settlement", "Delivery Tracking"]', 'Utensils', 'from-orange-500 to-red-500', 3),
  ('market-app', 'Market App', 'Run your retail store with quick billing and stock management anywhere.', '["Quick Billing", "Stock Updates", "Customer Loyalty", "Daily Reports", "Barcode Scan"]', 'ShoppingBag', 'from-green-500 to-emerald-500', 4)
ON CONFLICT (id) DO NOTHING;

INSERT INTO why_choose_features (title, description, icon, color, sort_order) VALUES
  ('Easy to Use', 'Intuitive interface that requires minimal training.', 'Zap', 'text-amber-500', 1),
  ('Affordable', 'Pricing plans that fit businesses of all sizes.', 'Wallet', 'text-green-500', 2),
  ('Secure', 'Bank-grade encryption and data protection.', 'Lock', 'text-red-500', 3),
  ('Customizable', 'Tailor every module to your specific workflow.', 'SlidersHorizontal', 'text-purple-500', 4),
  ('Mobile Friendly', 'Access your data from any device, anywhere.', 'Smartphone', 'text-blue-500', 5),
  ('24/7 Support', 'Round-the-clock assistance when you need it.', 'Headphones', 'text-cyan-500', 6),
  ('Fast Setup', 'Get running in minutes, not weeks.', 'Zap', 'text-orange-500', 7),
  ('Lifetime Updates', 'Free updates and new features forever.', 'RefreshCw', 'text-teal-500', 8),
  ('Automatic Backup', 'Your data is always safe and recoverable.', 'Database', 'text-indigo-500', 9),
  ('Cloud Sync', 'Real-time sync across all your devices and branches.', 'Cloud', 'text-sky-500', 10);

INSERT INTO industries (name, icon, color, bg_color, sort_order) VALUES
  ('Retail', 'ShoppingBag', 'text-blue-600', 'bg-blue-50 dark:bg-blue-950/40', 1),
  ('Wholesale', 'Package', 'text-cyan-600', 'bg-cyan-50 dark:bg-cyan-950/40', 2),
  ('Manufacturing', 'Building2', 'text-orange-600', 'bg-orange-50 dark:bg-orange-950/40', 3),
  ('Education', 'GraduationCap', 'text-violet-600', 'bg-violet-50 dark:bg-violet-950/40', 4),
  ('Healthcare', 'Heart', 'text-rose-600', 'bg-rose-50 dark:bg-rose-950/40', 5),
  ('Restaurants', 'Utensils', 'text-amber-600', 'bg-amber-50 dark:bg-amber-950/40', 6),
  ('Hotels', 'Building2', 'text-teal-600', 'bg-teal-50 dark:bg-teal-950/40', 7),
  ('Courier', 'Truck', 'text-sky-600', 'bg-sky-50 dark:bg-sky-950/40', 8),
  ('Construction', 'HardHat', 'text-yellow-600', 'bg-yellow-50 dark:bg-yellow-950/40', 9),
  ('Dairy', 'Milk', 'text-stone-600', 'bg-stone-50 dark:bg-stone-950/40', 10),
  ('Laboratory', 'FlaskConical', 'text-pink-600', 'bg-pink-50 dark:bg-pink-950/40', 11),
  ('Library', 'BookOpen', 'text-indigo-600', 'bg-indigo-50 dark:bg-indigo-950/40', 12),
  ('Pharmacy', 'PackageCheck', 'text-emerald-600', 'bg-emerald-50 dark:bg-emerald-950/40', 13),
  ('Supermarket', 'ShoppingBag', 'text-green-600', 'bg-green-50 dark:bg-green-950/40', 14),
  ('Finance', 'BarChart3', 'text-purple-600', 'bg-purple-50 dark:bg-purple-950/40', 15),
  ('Agriculture', 'Apple', 'text-lime-600', 'bg-lime-50 dark:bg-lime-950/40', 16)
ON CONFLICT (name) DO NOTHING;

INSERT INTO platform_features (title, description, icon, span, sort_order) VALUES
  ('Inventory Management', 'Real-time stock tracking across multiple warehouses with automated reorder alerts and batch management.', 'Boxes', 'lg:col-span-2 lg:row-span-2', 1),
  ('Accounting', 'Double-entry accounting with GST, TDS, and multi-currency support.', 'Calculator', NULL, 2),
  ('Billing & Invoicing', 'GST-compliant invoices with barcode, POS, and thermal printer support.', 'Receipt', NULL, 3),
  ('CRM', 'Track leads, manage pipelines, and nurture customer relationships.', 'Users', NULL, 4),
  ('Reports & Analytics', 'Real-time dashboards with 100+ report formats and export options.', 'BarChart3', 'lg:col-span-2', 5),
  ('Document Management', 'Store, organize, and share business documents securely in the cloud.', 'FileText', NULL, 6),
  ('Multi-Branch', 'Manage unlimited branches with consolidated reporting and stock transfer.', 'Globe', NULL, 7),
  ('HR & Payroll', 'Employee management with attendance, leave, and payroll processing.', 'Users', NULL, 8),
  ('Order Management', 'Track orders from creation to fulfillment with delivery scheduling.', 'PackageCheck', 'lg:col-span-2', 9);

INSERT INTO stats (value, suffix, label, icon, sort_order) VALUES
  (15, '+', 'Years Experience', 'Clock', 1),
  (500000, '+', 'Customers', 'Users', 2),
  (50, '+', 'Countries', 'Globe', 3),
  (126, '+', 'Industries', 'Briefcase', 4),
  (99, '%', 'Satisfaction', 'Heart', 5);

INSERT INTO testimonials (name, role, company, content, rating, avatar, sort_order) VALUES
  ('Rajesh Kumar', 'Managing Director', 'Sharma Traders', 'Solver ERP transformed our entire operation. Inventory management that used to take days now happens in real-time. The ROI was visible within the first month.', 5, 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150', 1),
  ('Priya Sharma', 'Principal', 'Greenwood International School', 'The School ERP has been a game-changer for us. Parents love the real-time updates, and our administrative workload has dropped by 70%. Absolutely recommended.', 5, 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150', 2),
  ('Dr. Amit Patel', 'Lab Director', 'MediLab Diagnostics', 'From sample collection to report delivery, everything is seamless now. The barcode tracking and automated reporting have eliminated errors completely.', 5, 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150', 3),
  ('Sunita Reddy', 'CEO', 'FreshMart Supermarket', 'The billing software is incredibly fast. We process 500+ bills a day with zero downtime. The GST compliance features alone have saved us countless hours.', 5, 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150', 4),
  ('Mohammed Iqbal', 'Owner', 'Speed Courier Services', 'The courier software handles our entire network of 40 branches effortlessly. Real-time tracking and COD management have made us far more efficient.', 5, 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150', 5),
  ('Vikram Singh', 'Operations Head', 'Anand Dairy', 'Milk collection, quality testing, route management — everything in one place. The farmer payment system alone has saved us 20 hours of work every week.', 5, 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150', 6);

INSERT INTO client_logos (name, sort_order) VALUES
  ('Sharma Traders', 1),
  ('Greenwood School', 2),
  ('MediLab', 3),
  ('FreshMart', 4),
  ('Speed Courier', 5),
  ('Anand Dairy', 6),
  ('BuildWell', 7),
  ('EduPlus', 8),
  ('TechRetail', 9),
  ('AgriFresh', 10),
  ('MediStore', 11),
  ('CityHotel', 12)
ON CONFLICT (name) DO NOTHING;

INSERT INTO nav_links (label, href, has_mega_menu, sort_order) VALUES
  ('Home', '#home', false, 1),
  ('Products', '#products', true, 2),
  ('Solutions', '#features', false, 3),
  ('Industries', '#industries', false, 4),
  ('Apps', '#apps', false, 5),
  ('About', '#why-us', false, 6),
  ('Testimonials', '#testimonials', false, 7),
  ('Contact', '#contact', false, 8);
