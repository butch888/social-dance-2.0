import {
  IBM_Plex_Mono,
  Inter,
  PT_Serif,
  Oswald,
  Nunito_Sans,
  Poppins,
  Roboto,
} from 'next/font/google';
import "/css/style.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Social Dance TV",
  description: "Social Dance TV Network",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

const mono = IBM_Plex_Mono({
  variable: '--font-family-mono',
  subsets: ['latin'],
  weight: ['500', '700'],
  display: 'swap',
  adjustFontFallback: false,
});

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  adjustFontFallback: false,
});

const nunito = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
  adjustFontFallback: false,
});

const sans = Inter({
  variable: '--font-family-sans',
  subsets: ['latin'],
  weight: ['500', '700', '800'],
  display: 'swap',
  adjustFontFallback: false,
});

const serif = PT_Serif({
  variable: '--font-family-serif',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  adjustFontFallback: false,
});

const poppins = Poppins({
  variable: '--font-poppins',
  style: ['normal'],
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  adjustFontFallback: false,
});

const roboto = Roboto({
  variable: '--font-roboto',
  style: ['normal'],
  subsets: ['latin'],
  weight: ['400', '900'],
  display: 'swap',
  adjustFontFallback: false,
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        ${mono.variable} 
        ${oswald.variable} 
        ${nunito.variable} 
        ${sans.variable}
        ${serif.variable}
        ${poppins.variable}
        ${roboto.variable}
      `}
    >
      <body className="lg:bg-slate-200 font-poppins">
        <Header />
        {children}
      </body>
    </html>
  );
}
