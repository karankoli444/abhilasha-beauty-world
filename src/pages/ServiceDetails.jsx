import { Link, useParams } from "react-router-dom";
import { services } from "../data/services";
const ServiceDetails = () => {
  const { id } = useParams();

  const service = services.find(
    (item) => item.id === id
  );

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Service Not Found
        </h1>
      </div>
    );
  }

  return (
    <section className="py-20  bg-black min-h-screen">
      <div className="container-custom">

  {/* <div className="mb-6 text-sm text-gray-500">
  <Link
    to="/"
    className="hover:text-pink-600 transition"
  >
    Home
  </Link>

  <span className="mx-2">/</span>

  <Link
    to="/services"
    className="hover:text-pink-600 transition"
  >
    Services
  </Link>

  <span className="mx-2">/</span>

  <span className="text-gray-700">
    {service.title}
  </span>
</div> */}
<div className="mb-4">
  <Link
    to="/services"
    className="
    inline-flex
    items-center
    text-sm
    md:text-base
   text-[#D4AF37]
hover:text-[#E6C76A]
    font-medium
    transition
    "
  >
    ← Back to Services
  </Link>
</div>

        <h1 className="text-5xl font-heading text-center mb-6 text-[#D4AF37]">
          {service.title}
        </h1>

        <p className="text-center text-gray-300 mb-12">
          {service.desc}
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {service.gallery.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Service at Abhilasha Beauty World ${service.title}`}
              loading="lazy"
              className="
              w-full
              h-80
              object-cover
              rounded-xl
              shadow-md
              "
            />
          ))}
        </div>
        <div className="mt-20">
  <div
    className="
    bg-zinc-900
border border-[#D4AF37]/20
    rounded-2xl
    shadow-lg
    p-8
    md:p-12
    text-center
    "
  >
    <h2 className="text-2xl md:text-3xl font-heading mb-4 text-[#D4AF37]">
      Ready To Book This Service?
    </h2>

    <p className="text-gray-300 mb-8">
      Book your appointment with Abhilasha Beauty World
      and let our experts create your perfect look.
    </p>

    <a
      href={`https://wa.me/917499709800?text=Hi, I want to book ${service.title}`}
      target="_blank"
      rel="noreferrer"
      className="
      inline-block
      border border-[#D4AF37]/20
      px-8
      py-3
      bg-[#D4AF37]
text-black
hover:bg-[#E6C76A]
      rounded-full
      font-medium
      transition
      "
    >
      Book Appointment
    </a>
  </div>
</div>
      </div>
    </section>
  );
};

export default ServiceDetails;