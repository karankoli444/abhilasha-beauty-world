// import { FaWhatsapp } from "react-icons/fa";
// import { motion } from "framer-motion";
// const WhatsAppButton = () => {
//   return (
//     <>
//       <motion.a
//         href="https://wa.me/917499709800"
//         target="_blank"
//         rel="noopener noreferrer"
//         animate={{
//           y: [0, -12, 0],
//           scale: [1, 1.05, 1],
//         }}
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl"
//       >
//         <FaWhatsapp size={32} />
//       </motion.a>
//       ;
//     </>
//   );
// };

// export default WhatsAppButton;


import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "917499709800";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=Hello%20Abhilasha%20Beauty%20World,%20I%20would%20like%20to%20book%20an%20appointment.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative">
        <span className="absolute inset-0 rounded-full animate-ping bg-green-500 opacity-30"></span>

        <div className="relative flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-xl transition duration-300 hover:scale-105">
          <FaWhatsapp size={28} />

          <span className="hidden sm:block font-medium">
            Book Appointment
          </span>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;