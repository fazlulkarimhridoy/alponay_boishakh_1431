import Dhaka from "../../assets/Dhaka.png"
import Netrokona from "../../assets/Netrokona.png"
import Khulna from "../../assets/Khulna.png"
import BgImage from "../../assets/BgImage2.png"

const Places = () => {

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
        <div style={bgImage} className="lg:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-2 lg:gap-20 px-2 lg:px-10 lg:mx-[86px]">
                {/* dhaka */}
                <div className="flex flex-col justify-center w-full lg:w-1/3 my-8 lg:my-12 text-center rounded-md  bg-[#F26726]">
                    <img
                        className="w-[120px] h-[50px] self-center -mt-6 bg-center bg-cover"
                        src={Dhaka}
                    />
                    <div className=" my-6">
                        <p className="text-xl text-white font-semibold">মানিক মিয়া এভিনিউ</p>
                    </div>
                </div>

                {/* khulna */}
                <div className="flex flex-col justify-center w-full lg:w-1/3 my-5 lg:my-12 text-center rounded-md  bg-[#00ADEF]">
                    <img
                        className="w-[120px] h-[50px] self-center -mt-6 bg-center bg-cover"
                        src={Khulna}
                    />
                    <div className=" my-6">
                        <p className="text-xl text-white font-semibold">শিববাড়ী মোড়</p>
                    </div>
                </div>

                {/* netrokona */}
                <div className="flex flex-col justify-center w-full lg:w-1/3 my-5 lg:my-12 text-center rounded-md  bg-[#F26726]">
                    <img
                        className="w-[150px] h-[50px] self-center -mt-6 bg-center bg-cover"
                        src={Netrokona}
                    />
                    <div className=" my-6">
                        <p className="text-xl text-white font-semibold">মিঠামইন</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Places;