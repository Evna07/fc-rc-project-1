import Footer from "components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "components/Homepage/Homepage";
import Aboutus from "components/AboutUs/Aboutus";

function App() {
  const persons = [
    {
      name: "Imię Nazwisko [ Dział 1]",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.",
      image:
        "https://img.freepik.com/darmowe-wektory/akwarela-slonecznik-kwiatowy-na-bialym-tle_191095-4050.jpg?w=826&t=st=1708985448~exp=1708986048~hmac=4adc738e6f2963f8583a2f6127555cf0d40fe08833c283fc95c38c6efc121324",
    },
    {
      name: "Imię Nazwisko [ Dział 2]",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.",
      image:
        "https://img.freepik.com/darmowe-wektory/polowa-akwareli-swiezego-arbuza-na-bialym-tle_191095-4000.jpg?w=826&t=st=1708985450~exp=1708986050~hmac=df6cc8a254b7378574d50ab049e642c8815cb0772bcf4de5d8132895fbfbd6b9",
    },
  ];
  return (
    <div className="container">
      <Navbar />
      <Homepage />
      <Aboutus id="aboutUs" persons={persons} />
      <Footer />
    </div>
  );
}

export default App;
