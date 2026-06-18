export const metadata = {
  title:"Best Carpet Shop in Chandigarh, Mohali, Zirakpur, Panchkula & Patiala | Alam Handloom Carpets",
  description:
    "Buy Premium Handknotted Carpet, Kashmiri Silk Carpet, Hand Tufted Carpet, Turkish Carpet, Iranian Carpet, Fur Carpet and Modern Carpets in Chandigarh, Mohali, Zirakpur, Panchkula & Patiala.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO SECTION */}
     {/* HERO SECTION */}
<section className="relative bg-[url('/images/Hero-carpet.jpeg')] bg-cover bg-center bg-no-repeat text-white py-20 px-6">

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative max-w-6xl mx-auto text-center">

    <h1 className="text-5xl font-bold mb-6">
      Alam Handloom Carpets
    </h1>

    <p className="text-xl max-w-3xl mx-auto leading-8">
      Premium Handknotted Carpet, Kashmiri Silk Carpet,
      Hand Tufted Carpet, Iranian Carpet, Turkish Carpet, Fur Carpet, and Modern Carpets in Chandigarh.
    </p>

   {/* CTA BUTTONS */}
    <div className="mt-8 flex justify-center gap-4 flex-wrap">

      <a
        href="tel:+917880227233"
        className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold"
      >
        Call +91 7880227233
      </a>

      <a
        href="https://wa.me/7880227233"
        className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold"
      >
        WhatsApp
      </a>

    </div>

  </div>

</section>


      {/* ABOUT SECTION */}
      <section className="py-20 px-6 bg-gray-100">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <img
            src="images/Home.jpeg"
            alt="Luxury Carpet"
            className="rounded-3xl shadow-xl"
          />

          <div>

            <h2 className="text-4xl font-bold mb-6">
              Trusted Carpet Shop in Chandigarh
            </h2>

            <p className="text-lg leading-8 text-gray-700">
              Alam Handloom Carpets is a trusted carpet store in Chandigarh 
              offering premium Handknotted Carpet, Kashmiri Silk Carpet, 
              Persian Carpet, Iranian Carpet, Hand Tufted Carpet, and Modern
              Carpet. We proudly serve customers across Chandigarh, Mohali, Panchkula,
              Zirakpur and Patiala with quality craftsmanship, luxury designs, and home visit service.
            </p>

          </div>

        </div>

      </section>


      {/* COLLECTIONS */}
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

    <h2 className="text-4xl font-bold mb-4">
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


      {/* SERVICE AREA */}
      <section className="bg-gray-100 py-20 px-6">

        <div className="max-w-5xl mx-auto text-center"

          <h2 className="text-3xl font-bold mb-6">
            Serving Nearby Areas
          </h2>

          <p className="text-lg leading-8 text-gray-700">
            We offers Home Visit Service to customers across Chandigarh, Mohali,
            Panchkula, Zirakpur and Patiala and Nearby areas with premium carpet collections.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-2">
            PAN India Free Delivery
          </h2>

        </div>

      </section>
      
      {/* CONTACT */}
     {/* CONTACT */}
<section className="bg-black text-white py-20 px-6">

  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-4xl font-bold mb-6">
      Visit Alam Handloom Carpets
    </h2>

    <p className="text-lg leading-8 mb-8 text-gray-300">
      Near Jama Masjid, Burail, Sector 45C, Sector 45, Chandigarh, Punjab, 160047
    </p>

    <div className="flex justify-center gap-5 flex-wrap mb-10">

      <a
        href="tel:+917880227233"
        className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold"
      >
        Call +91 7880227233
      </a>

      <a
        href="https://www.instagram.com/alam.handloom.carpets?igsh=MXZ2dDhnZ3FzZXI5aQ=="
        target="_blank"
        rel="noopener noreferrer"
        className="border border-white px-6 py-3 rounded-xl"
      >
        Instagram
      </a>

    </div>, {/* GOOGLE MAP */}
    <div className="rounded-2xl overflow-hidden shadow-xl">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.4835542180886!2d76.75559807537185!3d30.704803674597787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedc0107935e7%3A0xc4142b8de71cd5e9!2sAlam%20Handloom%20Carpets!5e0!3m2!1sen!2sin!4v1779379520194!5m2!1sen!2sin"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

  </div>

</section>

    </main>
  );
} 
