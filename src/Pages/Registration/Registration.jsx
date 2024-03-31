import NavLogo from "../../components/NavLogo"
import ErrorBg from "../../assets/BgImage1.png"
import ErrorLine from "../../assets/ErrorLine.png"
import ErrorLine2 from "../../assets/ErrorLine2.png"
import BodyLogo from "../../assets/BodyLogo.png"
import AlponaLine2 from "../../assets/AlponaLine2.png"
import AlponaLine from "../../assets/AlponaLine.png"


const Registration = () => {

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

            <div className="flex flex-col items-center justify-center w-[500px] mx-auto bg-[#5A308C] rounded-xl my-10">
                <form className="my-10 px-10">
                    <p className="text-white font-bold text-2xl">আপনার আল্পনাটি নিবন্ধন করুন</p>
                    <div className="mt-3">
                        <label className="text-[#F8E44E] text-lg font-normal pl-36" htmlFor="text">আপনার নাম</label> <br />
                        <input name="name" className="w-full border-2 border-[#EEBF31] p-1.5 rounded-lg" type="text" />
                    </div>
                    <div className="mt-3">
                        <label className="text-[#F8E44E] text-lg font-normal pl-[125px]" htmlFor="text">আপনার জন্ম সাল</label> <br />
                        <input name="name" className="w-full border-2 border-[#EEBF31] p-1.5 rounded-lg" type="text" />
                    </div>
                    <div className="mt-3">
                        <label className="text-[#F8E44E] text-lg font-normal pl-[120px]" htmlFor="text">আপনার মোবাইল নং</label> <br />
                        <input name="name" className="w-full border-2 border-[#EEBF31] p-1.5 rounded-lg" type="text" />
                    </div>
                    <div className="mt-3">
                        <label className="text-[#F8E44E] text-lg font-normal pl-[130px]" htmlFor="text">আপনার ইমেইল</label> <br />
                        <input name="name" className="w-full border-2 border-[#EEBF31] p-1.5 rounded-lg" type="text" />
                    </div>
                    <div className="flex items-center justify-center mt-5">
                        <button className="text-white bg-[#F77C3C] border-4 border-white font-bold text-xl px-8 rounded-lg py-2">পাঠিয়ে দিন</button>
                    </div>
                </form>
            </div>

            <div className="flex overflow-hidden">
                <img src={AlponaLine} alt="alpona-line" />
                <img className="w-full" src={AlponaLine2} alt="alpona-line" />
            </div>
        </div>
    );
};

export default Registration;