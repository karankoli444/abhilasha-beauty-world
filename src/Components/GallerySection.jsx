import { motion } from "framer-motion";
import bride1 from '../assets/gallery/bride1.jpeg'
import haldi1 from '../assets/gallery/haldi1.jpeg'
import hairstyle1 from '../assets/gallery/hairstyle1.jpeg'
import engagement1 from '../assets/gallery/engagement1.jpeg'
import bride2 from '../assets/gallery/bride2.jpeg'
import haldi2 from '../assets/gallery/haldi2.jpeg'
import hairstyle2 from '../assets/gallery/hairstyle2.jpeg'
import bride3 from '../assets/gallery/bride3.jpg'
const galleryImages = [
  {
    id: 1,
    image:bride1,
    title: "Bridal Makeup",
  },
  {
    id: 2,
    image:
      haldi1,
    title: "Haldi Makeup",
  },
  {
    id: 3,
    image:
      hairstyle1,
    title: "Professional Styling",
  },
  {
    id: 4,
    image:engagement1,
    title: "Engagement bride",
  },
  {
    id: 5,
    image:
      bride2,
    title: "Bridal Look",
  },
  {
    id: 6,
    image:
        haldi2,
    title: "Haldi Look",
  },
   {
    id: 7,
    image:
        hairstyle2,
    title: "Hairstyle Look",
  },
   {
    id: 8,
    image:
        bride3,
    title: "Vaidik Bride",
  },
];

const GallerySection = () => {
  return (
    <section
      id="gallery"
      className="py-20  bg-zinc-950 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#D4AF37]">
            Our Gallery
          </h2>

          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>

          <p className="mt-5 text-gray-300 max-w-2xl mx-auto">
            Explore some of our finest bridal makeup, party makeup,
            hair styling, and beauty transformation work.
          </p>
        </motion.div>

      {/* Premium Gallery Grid */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {galleryImages.map((item, index) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-3xl border border-[#D4AF37]/20 bg-black"
    >
      <div className="overflow-hidden">
        <img
          src={item.image}
          loading="lazy"
          alt={` ${item.title}by Abhilasha Beauty World`}
          className="w-full h-[450px] object-cover transition-all duration-700 group-hover:scale-110"
        />
      </div>

      {/* Overlay */}

      <div
        className="
        absolute inset-0
        bg-gradient-to-t
        from-black/90
        via-black/20
        to-transparent
        opacity-80
      "
      />

      {/* Content */}

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-white text-2xl font-semibold">
          {item.title}
        </h3>

        <div className="w-12 h-[2px] bg-[#D4AF37] mt-2"></div>
      </div>
    </motion.div>
  ))}
</div>
        
  
      </div>
    </section>
  );
};

export default GallerySection;