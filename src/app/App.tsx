import "./App.css";
import HomeBanner from "../components/Banner/Banner";
import Navbar from "../components/Header/Menu";
import BannerPhoto from "/img/banner_image.png";
import About from "../components/About/About";
import Work from "../components/Work/Work";
import Articles from "../components/Articles/Articles";
import Footer from "../components/Footer/Footer";
import ContactSection from "../components/Contact/Contact";
import WhatsAppButton from "../components/WppButton/WppButton";

function App() {
  return (
    <>
      <div>
        <Navbar />

        <div>
          <HomeBanner photo={BannerPhoto} />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Work />
        </div>
        <div>
          <Articles />
        </div>
        <div>
          <ContactSection />
        </div>
        <div>
          <Footer />
        </div>
        <div>
          <WhatsAppButton />
        </div>
      </div>
    </>
  );
}

export default App;
