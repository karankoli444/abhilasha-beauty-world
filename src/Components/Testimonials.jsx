import { FaStar, FaQuoteLeft } from "react-icons/fa";
import dipaliMore from '../assets/reviews/Dipalimore.jpg'
import Mrunalshinde from '../assets/reviews/mrunalshinde.jpg'
import PriyankaJadhav from '../assets/reviews/PriyankaJadhav.jpg'
const Testimonials = () => {
  const reviews = [
    {
      name: "Dipali More",
      review:
        "My wedding is beautiful but it's more amazing and wonderful because of Abhilasha's Beauty World. So I highly recommend to my friends and family and a Big Thank you to Abhilasha Di 😊😊",
      image:
     dipaliMore,
    },
    {
      name: "Mrunali Shinde",
      review:
        "Highly recommend Abhilasha! She did an amazing job with my engagement makeup. Professional, talented, and made me feel like a queen on my special day🥰🥰",
      image:
        Mrunalshinde,
    },
    {
      name: "Priyanka Jadhav",
      review:
        "“Absolutely loved the vibe and service 💖 Clean, professional, and amazing results. Totally recommend!”",
      image:
        PriyankaJadhav,
    },
  ];

  return (
    <section className="py-24   bg-black  from-pink-50 to-white">
      <div className="container-custom">
        <h2
          className="
          text-center
          text-4xl
          text-[#D4AF37]
          md:text-5xl
          font-heading
          mb-4
          "
        >
          Happy Clients
        </h2>

        <p className="text-center text-gray-300 mb-14">
          What our clients say about us
        </p>

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
        >
          {reviews.map((item, index) => (
            <div
              key={index}
              className="
              border border-[#D4AF37]/20
              bg-black
              p-8
              rounded-3xl
              hover:-translate-y-2
              transition-all
              duration-300
              relative
              "
            >
              {/* Quote Icon */}
              <FaQuoteLeft
                className="
                text-[#dcbc53]
                text-4xl
                absolute
                top-6
                right-6
                "
              />

              {/* Profile */}
              <div className="flex flex-col items-center text-center">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="
                  w-20
                  h-20
                  rounded-full
                  object-cover
                  border-4
                  border-pink-100
                  shadow-md
                  "
                />

                <h3 className="mt-4 text-xl text-white font-semibold">{item.name}</h3>

                {/* Stars */}
                <div className="flex gap-1 mt-2 text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                {/* Review */}
                <p className="mt-4 text-gray-300 leading-7">"{item.review}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
