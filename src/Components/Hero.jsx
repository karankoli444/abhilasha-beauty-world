import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import herobgImg from "../assets/Herobackground.jpg";
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};
// https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1600&q=80
const Hero = () => {
  return (
    <section className="  relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 8,
          ease: "easeOut",
        }}
        className="absolute inset-0 bg-cover bg-[center_25%]"
        style={{
          backgroundImage: `url(${herobgImg})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Decorative Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 container-custom text-center text-white pt-16 md:pt-24 px-6"
      >
        {/* Logo */}
        <motion.img
          variants={item}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          src={logo}
          alt="Abhilasha Beauty World"
          className="mx-auto w-28 sm:w-36 md:w-56 mb-4 md:mb-6  drop-shadow-2xl"
        />

        {/* Heading */}
        <motion.h1
          variants={item}
          className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          Abhilasha's
          <motion.span
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="block text-[#D4AF37]"
          >
            Beauty World
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="mt-4 md:mt-6 text-base sm:text-lg md:text-2xl text-pink-100 max-w-3xl mx-auto"
        >
          Premium Hair • Skin • Makeup • Nail Art Studio
        </motion.p>

        {/* Description */}
        <motion.p
          variants={item}
          className="mt-4 text-gray-300 max-w-2xl mx-auto leading-8"
        >
          Discover your beauty with expert care, luxury treatments and
          personalized styling services. We help you look beautiful and feel
          confident every day.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/917499709800?text=Hello%20Abhilasha's%20Beauty%20World,%20I%20am%20interested%20in%20your%20beauty%20services.%20I%20would%20like%20to%20book%20an%20appointment.%20Please%20share%20available%20slots."
            target="_blank"
            rel="noopener noreferrer"
            className=" w-full sm:w-auto bg-[#D4AF37] text-black hover:bg-[#E6C76A] px-8 py-4 rounded-full font-medium"
          >
            Book Appointment
          </motion.a>

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <Link
              to="/services"
              className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-medium inline-block"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={item}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              number: "500+",
              label: "Happy Clients",
            },
            {
              number: "4+",
              label: "Beauty Categories",
            },
            {
              number: "100%",
              label: "Satisfaction",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-4xl font-bold text-[#D4AF37]">
                {stat.number}
              </h3>

              <p className="text-gray-300 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
