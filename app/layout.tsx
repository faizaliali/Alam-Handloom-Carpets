import "./globals.css";

export const metadata = {
  title: "Alam Handloom Carpets | Carpet Shop in Chandigarh",
  description:
    "Premium Handknotted Carpet, Kashmiri Silk Carpet, Hand Tufted Carpet, Iranian Carpet, Turkish Carpet and Modern Carpets in Chandigarh, Mohali, Panchkula and Zirakpur.",

  keywords: [
  // Primary Local Keywords
  "Carpet Shop Chandigarh",
  "Carpet in Chandigarh",
  "Best Carpet Shop Chandigarh",
  "Carpet Store Chandigarh",
  "Handmade Carpet Chandigarh",
  "Luxury Carpet Chandigarh",
  "Handknotted Carpet Chandigarh",
  "Silk Carpet Chandigarh",

  // Product Keywords
  "Handknotted Carpet",
  "Kashmiri Silk Carpet",
  "Turkish Carpet India",
  "Iranian Carpet India",
  "Modern Carpet Design",
  "Hand Tufted Carpet",
  "Fur Carpet",

  // Location Targeting
  "Carpet Shop Mohali",
  "Carpet Shop Panchkula",
  "Carpet Shop Zirakpur",
  "Carpet Shop Patiala",

  // High-Intent Buyer Keywords (VERY IMPORTANT)
  "Buy Carpet Online Chandigarh",
  "Premium Handmade Carpets India",
  "Luxury Carpets for Home Interior",
  "Custom Carpet Design Chandigarh",
  "Wall to Wall Carpet Chandigarh"
],

  authors: [{ name: "Alam Handloom Carpets" }],

  openGraph: {
    title: "Alam Handloom Carpets | Carpet Shop Chandigarh",
    description:
      "Premium carpet collections in Chandigarh including Handknotted carpets, Kashmiri Silk carpets, Hand Tufted carpets, Iranian carpets, Fur carpets and Turkish carpets.",
    url: "https://alamhandloomcarpets.com",
    siteName: "Alam Handloom Carpets",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body>
        {children}
      </body>

    </html>
  );
}
