import { Link } from "react-router-dom";

const ServiceCard = ({ id, title, desc, icon: Icon }) => {
  return (
    <Link to={`/services/${id}`}>
      <div
        className="
        bg-zinc-900
        rounded-3xl
        p-8
        h-full
        border border-[#D4AF37]/20
        hover:border-[#D4AF37]
        hover:-translate-y-2
        transition-all
        duration-300
        text-center
        "
      >
        {/* Icon */}
        <div
          className="
          w-16 h-16
          mx-auto mb-6
          rounded-full
          bg-[#D4AF37]/10
          flex items-center justify-center
          "
        >
          <Icon size={30} className="text-[#D4AF37]" />
          {/* <Sparkles
            size={30}
            className="text-[#D4AF37]"
          /> */}
        </div>

        <h3 className="text-2xl font-semibold text-[#D4AF37] mb-4">{title}</h3>

        <p className="text-gray-300 leading-relaxed">{desc}</p>

        <div className="mt-6">
          <span className="text-[#D4AF37] font-medium">Read More →</span>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
