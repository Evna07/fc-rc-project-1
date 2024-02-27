import Footer from "components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "components/Homepage/Homepage";
import Aboutus from "components/AboutUs/Aboutus";
import Offer from "components/Offer/Offer";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Homepage />
      <Aboutus />
      <Offer />
      <Footer />
    </div>
  );
}

export default App;
