import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Contractors Choice Agency`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: ["dually truck insurance", "dually insurance", "dual rear wheel truck insurance", "F-350 insurance", "Ram 3500 insurance", "Silverado 3500 insurance"],
  authors: [{ name: "Contractors Choice Agency" }],
  creator: "Contractors Choice Agency",
  publisher: "Contractors Choice Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "Dually truck insurance for F-350, Ram 3500, and Silverado 3500 owners — commercial auto, physical damage, cargo, non-trucking liability, and GAP coverage for working truck owners. Licensed all 50 states.",
    images: [{ url: "/images/og-image.jpg", width: 1216, height: 640, alt: `${SITE.name} — dually truck insurance coverage` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "Dually truck insurance for F-350, Ram 3500, and Silverado 3500 owners — commercial auto, physical damage, cargo, non-trucking liability, and GAP coverage for working truck owners. Licensed all 50 states.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: "+18449675247",
    email: SITE.email,
    image: `${SITE.url}/images/og-image.jpg`,
    logo: `${SITE.url}/images/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: 33.2622, longitude: -111.7826 },
    employee: { "@type": "Person", name: "Josh Cotner", jobTitle: "Founder & Insurance Agent" },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: [
      "Commercial Auto Insurance for Dually Trucks",
      "Physical Damage Coverage for Dually Trucks",
      "Commercial Liability Insurance for Dually Truck Owners",
      "Non-Trucking Liability (Bobtail) Insurance",
      "Cargo Insurance for Dually Trucks and Trailers",
      "Commercial Umbrella Insurance for Dually Truck Owners",
      "Tools & Equipment Coverage for Dually Truck Owners",
      "GAP Coverage for Dually Trucks",
    ],
  };

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
