import type { Metadata } from 'next';
import './globals.css';
import { Montserrat } from 'next/font/google';
import Header from './components/Header/Header';
import { cookies } from 'next/headers';
import Footer from './components/Footer/Footer';

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nodar Miminoshvili | Portfolio',
  description:
    'Personal portfolio featuring skills, project showcases, and contact information. Explore my work and get in touch for collaboration or opportunities.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = cookies().get('theme')?.value
    ? (cookies().get('theme')!.value as 'dark' | 'light')
    : 'system';

  return (
    <html lang="en" className={theme}>
      <body className={`${montserrat.className} antialiased`}>
        <Header theme={theme} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
