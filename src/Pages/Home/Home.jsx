import NavLogo from "../../components/NavLogo";
import CoverImage from "../../assets/cover-image.png"
import DrawDemo from "./DrawDemo";
import Places from "./Places";
import Contact from "./Contact";
import Footer from "./Footer";
import News from "./News";

const Home = () => {
    return (
        <div>
            <NavLogo />
            <div>
                <img
                    className="w-full h-full"
                    src={CoverImage}
                    alt="cover-img" />
            </div>
            <DrawDemo />
            <Places />
            <News />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;