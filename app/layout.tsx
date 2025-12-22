import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Storyline Pictures | Professional Photography & Cinematography",
    template: "%s | Storyline Pictures",
  },
  description:
    "From Concept to Completion. Professional photography and cinematography services in Uganda since 2014. Event coverage, documentaries, product photography, and more.",
  keywords: [
    "photography",
    "cinematography",
    "Uganda",
    "event coverage",
    "documentaries",
    "product photography",
    "video production",
  ],
  authors: [{ name: "Storyline Pictures Limited" }],
  creator: "Storyline Pictures Limited",
  publisher: "Storyline Pictures Limited",
  metadataBase: new URL("https://storylinepictures.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://storylinepictures.com",
    siteName: "Storyline Pictures",
    title: "Storyline Pictures | Professional Photography & Cinematography",
    description:
      "From Concept to Completion. Professional photography and cinematography services in Uganda since 2014.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Storyline Pictures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Storyline Pictures | Professional Photography & Cinematography",
    description:
      "From Concept to Completion. Professional photography and cinematography services in Uganda since 2014.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Storyline Pictures Limited",
    url: "https://storylinepictures.com",
    logo: "https://storylinepictures.com/logo.png",
    description:
      "Professional photography and cinematography services in Uganda since 2014. From Concept to Completion.",
    foundingDate: "2014",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kampala",
      addressCountry: "UG",
    },
    sameAs: [
      "https://facebook.com/storylinepictures",
      "https://instagram.com/storylinepictures",
      "https://twitter.com/storylinepictures",
      "https://linkedin.com/company/storylinepictures",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://storylinepictures.com/#organization",
    name: "Storyline Pictures Limited",
    image: "https://storylinepictures.com/logo.png",
    url: "https://storylinepictures.com",
    telephone: "+256-XXX-XXX-XXX",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kampala",
      addressCountry: "UG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "0.3476",
      longitude: "32.5825",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

