import AlponaLine from "../../assets/AlponaLine.png"
import AlponaLine2 from "../../assets/AlponaLine2.png"
import Demo from "../../assets/demo.png"
import AlponaPage from "../../assets/AlponaPage.png"
import Pakhi from "../../assets/pakhi.png"
import Pata from "../../assets/Pata.png"
import Ektara from "../../assets/ektara.png"
import BgImage from "../../assets/BgImage1.png"
import { Link } from "react-router-dom"

const DrawDemo = () => {

    const bgImage = {
        backgroundImage: `url(${BgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        top: 0,
        left: 0,
        zIndex: -1000,
    }

    return (
        <div style={bgImage} className="flex flex-col items-center justify-between">
            <div className="flex overflow-hidden">
                <img src={AlponaLine} alt="alpona-line" />
                <img src={AlponaLine2} alt="alpona-line" />
            </div>
            <div className="flex flex-col items-center mt-5 lg:mx-0 px-2">
                <div className="flex items-center justify-around">
                    <img className="w-[60px] h-[70px] lg:w-[180px] lg:h-[220px]" src={Pakhi} alt="pakhi" />
                    <img className="w-[240px] h-[100px] lg:w-[800px] lg:h-[250px]" src={Demo} alt="demo" />
                </div>

                <div className="relative flex items-center pb-10">
                    <img className="hidden xl:flex absolute -left-52 bottom-5" src={Pata} alt="pata" />
                    <img className="lg:w-[1450px] lg:h-[750px] mt-5" src={AlponaPage} alt="demo" />
                    <img className="hidden xl:flex absolute -right-52" src={Ektara} alt="ektara" />
                    <div className="absolute left-52 bottom-20 flex flex-col items-center justify-center">
                        <Link to="/alpona">
                            <button
                                className="bg-[#EEBF31] text-blue-900 text-xs lg:text-3xl font-bold my-5 px-5 py-2 lg:px-8 lg:py-3 rounded-xl lg:rounded-2xl">এসো
                                আল্পনা করি
                            </button>
                        </Link>
                        <p className="text-[10px] text-white lg:text-lg font-bold">
                            তোমার ইচ্ছে মতো আল্পনা এঁকে তা রঙ করে পাঠিয়ে দাও আমাদেরকে|  সেরা আল্পনা গুলো বাছাই করে প্রদর্শন করা হবে |
                        </p>
                    </div>
                </div>

            </div>
            <div className="flex rotate-180 overflow-hidden mt-5">
                <img src={AlponaLine} alt="alpona-line" />
                <img src={AlponaLine2} alt="alpona-line" />
            </div>
        </div>
    );
};

export default DrawDemo;