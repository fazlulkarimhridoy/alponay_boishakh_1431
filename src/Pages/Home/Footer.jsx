import BanglaLink from "../../assets/BanglaLink.png"
import Berger from "../../assets/Berger.png"


const Footer = () => {
    return (
        <div className="bg-[#662E91] py-10">
            <h2 className="text-3xl font-normal text-center text-white">Sponsored by</h2>
            <div className="flex flex-row items-center justify-center gap-10">
                <img className="w-24 md:w-32 lg:w-40" src={BanglaLink} alt="logo" />
                <img className="w-24 md:w-32 lg:w-40 mt-5" src={Berger} alt="logo" />
            </div>
        </div>
    );
};

export default Footer;