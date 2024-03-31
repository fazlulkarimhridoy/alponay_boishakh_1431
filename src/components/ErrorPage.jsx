import { Link } from "react-router-dom";
import NavLogo from "./NavLogo"
import ErrorBg from "../assets/BgImage1.png"
import ErrorLine from "../assets/ErrorLine.png"
import ErrorLine2 from "../assets/ErrorLine2.png"
import BodyLogo from "../assets/BodyLogo.png"
import AlponaLine2 from "../assets/AlponaLine2.png"
import AlponaLine from "../assets/AlponaLine.png"
import Triangle from "../assets/Triangle.png"
import Exclamatory from "../assets/Exckamatory.png"


const ErrorPage = () => {

    const bgImage = {
        backgroundImage: `url(${ErrorBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        top: 0,
        left: 0,
        zIndex: -1000,
    }

    return (
        <div style={bgImage}>
            <div className="pt-5">
                <NavLogo />
            </div>
            <div className="flex overflow-hidden mt-5">
                <img src={ErrorLine} alt="alpona-line" />
                <img src={ErrorLine2} alt="alpona-line" />
            </div>
            <div className="flex items-center justify-center mt-5">
                <img className="w-[250px]" src={BodyLogo} alt="body-logo" />
            </div>
            <div className="flex flex-col items-center justify-center w-[800px] h-[550px] mx-auto bg-[#5A308C] rounded-xl my-10">
                <div>
                    <img className="relative" src={Triangle} />
                    <img className="absolute -mt-36 ml-28" src={Exclamatory} />
                </div>
                <p className="mt-5 text-xl text-white">আমরা আন্তরিকভাবে দুঃখিত</p>
                <p className="mt-2 text-xl text-white">পেইজটি খুঁজে পাওয়া যায়নি</p>
            </div>
            <div className="flex items-center justify-center my-5">
                <Link to="/">
                    <button className="text-white text-sm bg-[#5A308C] px-8 py-3 rounded-lg">হোমপেজ</button>
                </Link>
            </div>
            <div className="flex overflow-hidden">
                <img src={AlponaLine} alt="alpona-line" />
                <img className="w-full" src={AlponaLine2} alt="alpona-line" />
            </div>
        </div>
    );
};

export default ErrorPage;