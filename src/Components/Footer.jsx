import {
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white">

      {/* Main Footer */}
      <div className="container-custom py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Business Info */}
          <div>
            <h2 className="text-2xl font-heading text-[#D4AF37] mb-4">
              Abhilasha's Beauty World
            </h2>

            <p className="text-gray-300 leading-7">
              Premium Hair, Skin, Makeup & Nail Studio
              dedicated to enhancing beauty and
              boosting confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl text-[#D4AF37] font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  to="/"
                  className="hover:text-[#D4AF37]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="hover:text-[#D4AF37]"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-[#D4AF37]"
                >
                  About
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl text-[#D4AF37] font-semibold mb-4">
              Contact
            </h3>

            <div className="space-y-4">

              <a
                href="https://wa.me/917499709800"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-green-400"
              >
                <FaWhatsapp />
                <span>+91 74997 09800</span>
              </a>

              <a
                href="https://www.instagram.com/abhilashas_beauty_world"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-pink-400"
              >
                <FaInstagram />
                <span>Instagram</span>
              </a>

            </div>

          </div>

          {/* Address */}
          <div>

            <h3 className="text-xl text-[#D4AF37] font-semibold mb-4">
              Studio Address
            </h3>

            <div className="flex gap-3">

              <FaMapMarkerAlt
                className="text-[#D4AF37] mt-1"
              />

              <p className="text-gray-300 leading-7">
                Plot No. 24,
                Bharat Nagar,
                Near Wings Cafeteria,
                Shahada,
                District Nandurbar,
                Maharashtra
              </p>

            </div>

          </div>

          {/* Working Hours */}
<div>
  <h3 className="text-xl text-[#D4AF37] font-semibold mb-4">
    Working Hours
  </h3>

  <div className="flex gap-3">
    <FaClock className="text-[#D4AF37] mt-1" />

    <div className="text-gray-300 leading-7">
      <p>Monday - Sunday</p>
      <p>11:00 AM - 10:00 PM</p>
    </div>
  </div>
</div>

        </div>

      </div>

      {/* Google Map */}

      <div className="px-4 pb-10">

        <div className="container-custom">

          <h3
            className="
            text-center
            text-3xl
            font-heading
            mb-6
            text-[#D4AF37]
            "
          >
            Visit Our Studio
          </h3>

        <iframe
  title="Abhilasha Beauty World Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.068694401206!2d74.4779786!3d21.5441691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdf6d15cd44696b%3A0x980d71e3725661dc!2sAbhilasha%27s%20Beauty%20World!5e0!3m2!1sen!2sin!4v1781781390629!5m2!1sen!2sin"
  className="w-full h-[350px] md:h-[450px] rounded-3xl border-0 shadow-lg"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
<a
  href="https://maps.google.com/?q=Abhilasha's Beauty World Shahada"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-full bg-[#D4AF37] text-black font-semibold hover:scale-105 transition"
>
  Get Directions
</a>
        </div>

      </div>

      {/* Bottom Bar */}

      <div className="border-t border-gray-800">

        <div
          className="
          container-custom
          py-6
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-3
          "
        >

         <p className="text-gray-300 text-sm">
  © {new Date().getFullYear()} Abhilasha's Beauty World.
  All Rights Reserved.
</p>

          <div className="flex gap-5 text-xl">

            <a
              href="https://wa.me/917499709800"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.instagram.com/abhilashas_beauty_world"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
            >
              <FaInstagram />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;