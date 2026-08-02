import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://solvererp.com'),
  title: 'Solver — Smart ERP Solutions for Every Business',
  description:
    'Transform your business with smart ERP software. 15+ years of experience serving 500,000+ customers across 50+ countries. Business ERP, School ERP, Retail, Manufacturing & more.',
  keywords: [
    'ERP software',
    'business ERP',
    'school ERP',
    'billing software',
    'inventory management',
    'accounting software',
    'ERP solutions India',
    'cloud ERP',
  ],
  authors: [{ name: 'Solver Solutions' }],
  openGraph: {
    title: 'Solver — Smart ERP Solutions for Every Business',
    description:
      'Transform your business with smart ERP software. 500,000+ customers across 50+ countries trust our ERP solutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solver — Smart ERP Solutions',
    description: 'Transform your business with smart ERP software.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
