

import ServiceCard from "./ServiceCard";
import { services } from "../data/services";

const ServicesPreview = () => {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#D4AF37]">
            Our Services
          </h2>

          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>

          <p className="mt-5 text-gray-300 max-w-2xl mx-auto">
            Professional bridal makeup, party makeup, hairstyling
            and beauty services designed to make you look your best.
          </p>
        </div>

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-6
          "
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesPreview;