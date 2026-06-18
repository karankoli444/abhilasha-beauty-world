import { motion } from "framer-motion";
import profileimage from "../assets/abhisharma.jpeg";

const AboutSection = () => {
  return (
    <section className=" bg-zinc-950 py-24 overflow-hidden">
       

      <div className="container-custom">
         <h2 className="text-4xl text-center mb-20  md:text-5xl font-bold text-[#D4AF37]">
            About Us
          </h2>
        <div
          className="
          grid
          lg:grid-cols-2
          gap-10
          items-center
          "
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={profileimage}
              alt="Abhilasha Sharma"
              className="
              rounded-3xl
              shadow-xl
              hover:scale-105
              transition-all
              duration-500
              "
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p
              className="
              text-gray-300
              font-medium
              tracking-[4px]
              uppercase
              mb-2
              "
            >
              Meet The Founder
            </p>

            <h2
              className="
              font-heading
              text-4xl text-[#D4AF37]
              md:text-5xl
              font-bold
              mb-2
              "
            >
              Abhilasha Sharma
            </h2>

            <h3
              className="
              text-lg
              md:text-xl
              text-gray-400
              mb-6
              "
            >
              Founder of Abhilasha's Beauty World
            </h3>

            <div className="w-20 h-1 bg-[#D4AF37] rounded-full mb-6"></div>

            <h4
              className="
              font-heading
              text-3xl
              mb-4
             text-[#D4AF37] "
            >
              About Us
            </h4>

            <p className="text-gray-300 leading-8">
              Welcome to Abhilasha's Beauty World. We specialize in Hair, Skin,
              Makeup and Nail Art. Our goal is to enhance your beauty and
              confidence through professional care, personalized styling, and
              premium beauty services.
            </p>

            <p className="text-gray-400 leading-8 mt-4">
              With a passion for beauty and customer satisfaction, we strive to
              provide a relaxing and luxurious experience for every client who
              visits our studio.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
