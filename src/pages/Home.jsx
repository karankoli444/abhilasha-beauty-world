import Hero from "../Components/Hero";
import ServicesPreview from "../Components/ServicesPreview";
import AboutSection from "../Components/AboutSection";
import Testimonials from "../Components/Testimonials";
import GallerySection from "../Components/GallerySection";
import PackageSection from "../Components/PackageSection";

const Home = () => {
 return (
  <>
   <Hero />
   <ServicesPreview />
   <AboutSection />
   <PackageSection />
   <GallerySection/>
   <Testimonials />
  </>
 );
};

export default Home;