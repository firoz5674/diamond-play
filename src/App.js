import Home from "./pages/Home";
import Footer from "./shared/layout/Footer";
import Header from "./shared/layout/Header";
import whatsappImg from "./assets/images/whatsapp.png";
import Contact from "./pages/Contact";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/contact" exact element={<Contact />}></Route>
        <Route path="/privacy-policy" exact element={<PrivacyPolicy />}></Route>
      </Routes>
      <Footer />
      <div className="fixed-whatsapp">
        <div className="d-flex align-items-center">
          <img src={whatsappImg} alt="" />
          <Link to="/" className="mb-0">Click here to get ID</Link>
        </div>
      </div>
    </div>
  );
}

export default App;
