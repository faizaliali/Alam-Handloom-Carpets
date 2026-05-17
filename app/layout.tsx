import "./globals.css";

export const metadata = {
  title: "Alam Handloom Carpets | Carpet Shop in Chandigarh",
  description:
    "Premium Handknotted Carpet, Kashmiri Silk Carpet, Hand Tufted Carpet, Iranian Carpet, Turkish Carpet and Modern Carpets in Chandigarh, Mohali, Panchkula and Zirakpur.",

  keywords: [
    "Carpet Shop Chandigarh",
    "Handmade Carpet Chandigarh",
    "Kashmiri Silk Carpet",
    "Handknotted Carpet",
    "Turkish Carpet",
    "Irani Carpet",
    "Silk Carpet",
    "Hand Tufted Carpet",
    "Fur Carpet",
    "Silk Carpet",
    "Carpet Shop Mohali",
    "Carpet Shop Panchkula",
    "Carpet Shop Zirakpur",
    "Carpet Shop Patiala"
  ],

  authors: [{ name: "Alam Handloom Carpets" }],

  openGraph: {
    title: "Alam Handloom Carpets",
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
