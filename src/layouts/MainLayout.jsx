// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";


// const MainLayout = ({ children }) => {
//  return (
//   <>
//    <Navbar />

//    {children}

//    <Footer />

//    <WhatsAppButton />
//   </>
//  );
// };

// export default MainLayout;
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import WhatsAppButton from "../Components/WhatsAppButton";
import ScrollToTopButton from "../Components/ScrollToTopButton";
const MainLayout = ({ children }) => {
  const location = useLocation();

  const hideFooter =
    location.pathname.startsWith("/services/");

  return (
    <>
      <Navbar />

      {children}
   <WhatsAppButton/>
   <ScrollToTopButton />
      {!hideFooter && <Footer />}
    </>
  );
};

export default MainLayout;