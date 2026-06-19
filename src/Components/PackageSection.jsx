import { useState } from "react";
import { motion } from "framer-motion";
import { packageCategories } from "../data/packagesData";

const PackageSection = () => {
  const [tab, setTab] = useState("hd");
  const [selected, setSelected] = useState(packageCategories.hd[0]);
  const [activeImage, setActiveImage] = useState(0);

  const currentPackages = packageCategories[tab];

  return (
    <section id="packages" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-center text-4xl font-bold text-[#D4AF37] mb-10">
          Bridal Packages
        </h2>

        {/* Tabs */}

        <div className="flex justify-center flex-wrap gap-4 mb-10">
          <button
            onClick={() => {
              setTab("hd");
              setSelected(packageCategories.hd[0]);
              setActiveImage(0);
            }}
            className={` min-w-[120px] px-6 py-3 rounded-full ${
              tab === "hd"
                ? "bg-[#D4AF37] text-black"
                : "bg-zinc-800 text-white"
            }`}
          >
            HD Makeup
          </button>

          <button
            onClick={() => {
              setTab("airbrush");
              setSelected(packageCategories.airbrush[0]);
              setActiveImage(0);
            }}
            className={`px-6 py-3 rounded-full ${
              tab === "airbrush"
                ? "bg-[#D4AF37] text-black"
                : "bg-zinc-800 text-white"
            }`}
          >
            Airbrush Makeup
          </button>

            <button
            onClick={() => {
              setTab("engagement");
              setSelected(packageCategories.engagement[0]);
              setActiveImage(0);
            }}
            className={`px-6 py-3 rounded-full ${
              tab === "engagement"
                ? "bg-[#D4AF37] text-black"
                : "bg-zinc-800 text-white"
            }`}
          >
            Engagement Makeup
          </button>
{/* baby shower */}
            <button
            onClick={() => {
              setTab("babyShower");
              setSelected(packageCategories.babyShower[0]);
              setActiveImage(0);
            }}
            className={`px-6 py-3 rounded-full ${
              tab === "babyShower"
                ? "bg-[#D4AF37] text-black"
                : "bg-zinc-800 text-white"
            }`}
          >
            Baby Shower Makeup
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Cards */}

          <div className="space-y-5  order-2 lg:order-1">
            {currentPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                whileHover={{ y: -5 }}
                onClick={() => {
                  setSelected(pkg);
                  setActiveImage(0);
                }}
                className={`cursor-pointer p-4 rounded-2xl border transition-all duration-500
                ${
                  selected.id === pkg.id
                    ? "border-[#D4AF37]  bg-zinc-900"
                    : "border-zinc-700"
                }`}
              >
                {pkg.popular && (
                  <span className="bg-[#D4AF37] text-black px-3 py-1 rounded-full text-xs">
                    Most Popular
                  </span>
                )}

                <h3 className="text-white text-lg md:text-xl mt-2 font-semibold">
                  {pkg.title}
                </h3>

                <p className="text-[#D4AF37] text-2xl font-bold mt-2">
                  {pkg.price}
                </p>

                <ul className="mt-3 space-y-2">
                  {(selected.id === pkg.id
                    ? pkg.services
                    : pkg.services.slice(0, 3)
                  ).map((service, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <span className="text-[#D4AF37] mt-1">✓</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>

                {selected.id !== pkg.id && pkg.services?.length > 3 && (
                  <p className="mt-3 text-[#D4AF37] font-medium text-sm">
                    + {pkg.services.length - 3} More Benefits
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Gallery */}

          <div className="lg:sticky lg:top-24 order-1 lg:order-2">
            {selected.images.length > 0 && (
              <>
                <motion.img
                  key={activeImage}
                  src={selected.images[activeImage]}
                  alt=""
                  loading="lazy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-full aspect-[3/4]   object-cover object-top rounded-4xl"
                />

                <div className="flex gap-3 mt-4 overflow-x-auto">
                  {selected.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      loading="lazy"
                      alt={`Service at Abhilasha Beauty World${selected.title} `}
                      onClick={() => setActiveImage(index)}
                      className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2
                      ${
                        activeImage === index
                          ? "border-[#D4AF37]"
                          : "border-transparent"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            <a
              href={`https://wa.me/917499709800?text=${encodeURIComponent(
                `Hi, I am interested in the ${selected.title} package priced at ${selected.price}.`,
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-6 bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-semibold"
            >
              Book This Package
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageSection;
