import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import Homepage from "components/Homepage/Homepage";
import AboutUs from "components/AboutUs/AboutUs";
import Offer from "components/Offer/Offer";

const App = () => {
  return (
    <>
      <Navbar />
      <Homepage />
      <AboutUs />
      <Offer />
      <Footer />
    </>
  );
};

export default App;
