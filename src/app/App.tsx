import "./App.css";
import HomeBanner from "./components/Banner/Banner";
import Navbar from "./components/Header/Menu";
import BannerPhoto from "../../public/img/banner_image.png";

function App() {
  return (
    <>
      <div>
        <Navbar />

        <div className="mt-[-100px]">
          <HomeBanner photo={BannerPhoto} />
        </div>
      </div>
    </>
  );
}

export default App;
