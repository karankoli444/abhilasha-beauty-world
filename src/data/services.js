import {
  Crown,
  Sparkles,
  Scissors,
  Hand,
} from "lucide-react";
// bridal service
import bride from "../assets/bride.jpg";
import bridelook from '../assets/packages/hd-three-looks/Hd3bride2.jpg'
import haldibride from "../assets/haldibride.jpg";
import eventlook from "../assets/eventlook.jpg";
// ski care service
import facial from "../assets/skincare/facial.jpeg";
import dtan from "../assets/skincare/dtan.jpeg";
import eyebrow from "../assets/skincare/eyebrow.jpeg";
import legclean from "../assets/skincare/legclean.jpeg";
import washing from "../assets/skincare/washing.jpeg";
import waxing from "../assets/skincare/waxing.jpeg";
// hairstyle service
import hair1 from "../assets/hairstyling/hair1.jpeg";
import hair2 from "../assets/hairstyling/hair2.jpeg";
import hair3 from "../assets/hairstyling/hair3.jpeg";
import hair4 from "../assets/hairstyling/hair4.jpeg";
import hair5 from "../assets/hairstyling/hair5.jpeg";

// nail art service
import nail1 from "../assets/nails/nail1.jpeg";
import nail2 from "../assets/nails/nail2.jpeg";
import nail3 from "../assets/nails/nail3.jpeg";
import nail4 from "../assets/nails/nail4.jpeg";
import nail5 from "../assets/nails/nail5.jpeg";

export const services = [
  {
    id: "bridal-makeup",
    title: "Bridal Makeup",
    image: bride,
     icon: Crown,
    desc: "Elegant bridal makeup for weddings and receptions.",
    gallery: [bride, bridelook, haldibride],
  },

  {
    id: "salon-care",
    title: "Salon",
    image: facial,
    icon: Sparkles,
    desc: "Facials, cleanup, detan and skin treatments.",
    gallery: [facial, dtan, eyebrow, legclean, washing, waxing],
  },

  {
    id: "hair-styling",
    title: "Hair Styling",
    image: hair1,
    icon: Scissors,
    desc: "Hair spa, haircut, styling and smoothening.",
    gallery: [hair1, hair2, hair3, hair4, hair5],
  },

  {
    id: "nail-art",
    title: "Nail Art",
    image: nail1,
     icon: Hand,
    desc: "Creative nail extensions and nail art designs.",
    gallery: [nail1, nail2, nail3, nail4, nail5],
  },
];
