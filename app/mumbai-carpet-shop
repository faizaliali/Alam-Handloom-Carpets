import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "Best Carpet Shop in Mumbai, Bandra & Thane | Handknotted, Persian & Kashmiri Silk Carpets | Alam Handloom Carpets",
  description:
    "Premium carpet shop in Mumbai, Bandra & Thane offering Handmade carpets, Handknotted carpet, Hand Tufted carpet, Kashmiri silk carpet, Persian carpet, Rugs and home visit service across Mumbai, Thane, Mira Road, Bandra, Kurla and nearby areas.",
};

export default function MumbaiPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Alam Handloom Carpets",
    image: "https://www.alamhandloomcarpets.in/images/mumbai-hero.jpeg",
    url: "https://www.alamhandloomcarpets.in/mumbai-carpet-shop",
    telephone: "+91 7880227233",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Thane, Mumbai",
      addressCountry: "IN",
    },
    areaServed: [
      "Mumbai",
      "Thane",
      "Bandra",
      "Kurla",
      "Mira Road",
      "Andheri",
      "Powai",
      "Navi Mumbai"
    ],
  };

  return (
    <main className="bg-white text-gray-900">

      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <Image
          src="/images/mumbai-hero.jpeg"
          alt="Luxury Carpet Shop Mumbai"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold">
            Alam Handloom Carpets - 
            Best Carpet Shop in Mumbai , Bandra & Thane
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Handknotted Carpet | Kashmiri Silk | Persian Carpets | Rugs
            <br />
            <span className="text-yellow-300 font-semibold">
              Home Visit Available in Mumbai, Bandra, Thane & Nearby Areas
            </span>
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a 
            href="tel:+917880227233"
            className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold">
              Call Now
            </a>

            <a 
             href="https://wa.me/7880227233"
             className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-10 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-6">
          <div>
            <h3 className="text-2xl font-bold">100+</h3>
            <p className="text-gray-600">Carpet Designs</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">5★</h3>
            <p className="text-gray-600">Customer Rating</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">10K+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Home Visit</h3>
            <p className="text-gray-600">Available</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/images/luxury-hero.jpeg"
          alt="Carpets Mumbai"
          width={600}
          height={500}
          className="rounded-3xl shadow-xl"
        />

        <div>
          <h2 className="text-4xl font-bold mb-6">
            Premium Carpet Collection for Mumbai Homes
          </h2>

          <p className="text-gray-700 leading-8">
              Alam Handloom Carpets is a trusted carpet store in Mumbai 
              offering premium Handknotted Carpet, Kashmiri Silk Carpet, 
              Persian Carpet, Iranian Carpet, Hand Tufted Carpet, and Modern
              Carpet. We proudly serve customers across Bandra, Thane, Navi Mumbai,
              Mira Road with quality craftsmanship, luxury designs, and home visit service.
          </p>
        </div>
      </section>

      {/* HOME VISIT + SERVICE AREAS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Home Visit Carpet Service in Mumbai & Nearby Areas
          </h2>

          <p className="text-gray-700 max-w-3xl mx-auto leading-8">
            We bring premium carpet directly to your home for selection.
            Available across Mumbai, Bandra, Thane and surrounding regions.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold text-xl">Mumbai Areas</h3>
              <p className="text-gray-600 mt-2">
                Bandra, Andheri, Powai, Kurla, Dadar, Borivali
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold text-xl">Thane Region</h3>
              <p className="text-gray-600 mt-2">
                Thane, Mulund, Dombivli, Kalyan
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold text-xl">Nearby Areas</h3>
              <p className="text-gray-600 mt-2">
                Mira Road, Bhayandar, Navi Mumbai, Vashi
              </p>
            </div>

          </div>

        </div>
      </section>

     {/* COLLECTIONS */}
<section className="py-20 px-6 bg-white">

  <div className="max-w-7xl mx-auto">

    <h2 className="text-4xl font-bold text-center mb-14">
      Our Carpet Collections
    </h2>

    <div className="grid md:grid-cols-3 gap-10">


      {/* Handknotted Carpet */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

        <img
          src="images/HandknottedCarpet.jpeg"
          alt="Handknotted Carpet"
          className="w-full h-72 object-cover"
        />

        <div className="p-6">

          <h3 className="text-2xl font-bold mb-3">
            Handknotted Carpet
          </h3>

          <p className="text-gray-600 leading-7">
            Handcrafted by skilled artisans using traditional weaving techniques and premium materials like wool and silk.
            Each carpet is unique, offering timeless elegance, intricate designs, and long-lasting durability for any space.
          </p>

        </div>

      </div>


      {/* Handtufted Carpet */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

        <img
          src="images/HandtuftedCarpet.jpeg"
          alt="Hand Tufted Carpet"
          className="w-full h-72 object-cover"
        />

        <div className="p-6">

          <h3 className="text-2xl font-bold mb-3">
            Hand Tufted Carpet
          </h3>

          <p className="text-gray-600 leading-7">
            Custom Carpet are crafted with precision to match your preferred size, color, pattern, and design.
            These carpets combine modern style, comfort, and durability, making them perfect for homes, offices, and luxury interiors.
          </p>

        </div>

      </div>


      {/* Irani Carpet */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

        <img
          src="images/IraniCarpet.jpeg"
          alt="Irani Carpet"
          className="w-full h-72 object-cover"
        />

        <div className="p-6">

          <h3 className="text-2xl font-bold mb-3">
            Iranian Carpet
          </h3>

          <p className="text-gray-600 leading-7">
            Iranian Carpet are known for their rich heritage, intricate patterns, and fine craftsmanship handcrafted by skilled artisans.
Made with premium wool and silk, these carpets bring timeless elegance, luxury, and durability to any interior space.
          </p>

        </div>

      </div>


      {/* Modern Carpet */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

        <img
          src="images/ModernCarpet.jpeg"
          alt="Modern Carpet"
          className="w-full h-72 object-cover"
        />

        <div className="p-6">

          <h3 className="text-2xl font-bold mb-3">
            Modern Carpet
          </h3>

          <p className="text-gray-600 leading-7">
            Modern Carpet feature stylish patterns, elegant textures, and contemporary designs that enhance any modern interior.
            Crafted for comfort and durability, these carpets add warmth, sophistication, and a luxurious touch to homes and offices.
          </p>

        </div>

      </div>


      {/* Kashmiri Silk Carpet */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

        <img
          src="images/KashmiriSilkCarpet.jpeg"
          alt="Kashmiri Silk Carpet"
          className="w-full h-72 object-cover"
        />

        <div className="p-6">

          <h3 className="text-2xl font-bold mb-3">
            Kashmiri Silk Carpet
          </h3>

          <p className="text-gray-600 leading-7">
            Kashmiri Silk Carpet are handcrafted with fine silk and detailed artistry, showcasing the rich heritage of Kashmir.
            Known for their luxurious shine, intricate patterns, and soft texture, these carpets add elegance and timeless beauty to any space.
          </p>

        </div>

      </div>


      {/* Fur Carpet */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

        <img
          src="images/FurCarpet.jpeg"
          alt="Fur Carpet"
          className="w-full h-72 object-cover"
        />

        <div className="p-6">

          <h3 className="text-2xl font-bold mb-3">
            Fur Carpet
          </h3>

          <p className="text-gray-600 leading-7">
            Fur Carpet offer a plush texture and luxurious feel, adding warmth and comfort to any room.
            Designed with soft, premium-quality materials, these carpets create a cozy and stylish look for modern interiors.
          </p>

        </div>

      </div>


      {/* Turkey Carpet */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

        <img
          src="images/TurkeyCarpet.jpeg"
          alt="Turkey Carpet"
          className="w-full h-72 object-cover"
        />

        <div className="p-6">

          <h3 className="text-2xl font-bold mb-3">
            Turkey Carpet
          </h3>

          <p className="text-gray-600 leading-7">
            Turkish Carpet are celebrated for their rich cultural heritage, intricate motifs, and exceptional craftsmanship.
            Made with premium materials and timeless designs, these carpets add elegance, warmth, and luxury to any interior space.
          </p>

        </div>

      </div>


      {/* Darrie Carpet */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

        <img
          src="images/WallToWallCarpet.jpeg"
          alt="Wall To Wall Carpet"
          className="w-full h-72 object-cover"
        />

        <div className="p-6">

          <h3 className="text-2xl font-bold mb-3">
            Wall To Wall Carpet
          </h3>

          <p className="text-gray-600 leading-7">
            Wall to Wall Carpet provide seamless flooring coverage with comfort, style, and excellent durability.
            Ideal for homes, offices, hotels, and commercial spaces, these carpets add warmth, elegance, and a luxurious finish to interiors.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

{/* HANDKNOTTED CARPET VIDEO */}
<section className="py-20 px-6 bg-gray-100">

  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-4xl font-bold mb-6">
      Handknotted Carpet Making Process
    </h2>

    <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto leading-8">
      Explore the traditional craftsmanship behind our premium handknotted carpets.
      Each carpet is carefully crafted by skilled artisans with precision and dedication.
    </p>

    <video
      className="w-full max-w-4xl h-100 object-cover rounded-3xl shadow-xl mx-auto"
      controls
      autoPlay
      muted
      loop
    >
      <source
        src="/videos/carpetVideo.mp4"
        type="video/mp4"
      />
    </video>

  </div>

</section>

      {/* CTA */}
      <section className="bg-black text-white py-16 text-center">
        <h2 className="text-3xl font-bold">
          Looking for Premium Carpets in Mumbai?
        </h2>

        <p className="mt-3 text-gray-300">
          Call now or WhatsApp for home visit & best deals
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a 
         href="tel:+917880227233"
          className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold">
            Call Now
          </a>

          <a 
          href="https://wa.me/7880227233"
          className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold">
            WhatsApp
          </a>
        </div>
      </section>

    </main>
  );
}
