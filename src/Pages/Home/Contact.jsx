import BgImage from "../../assets/BgImage3.png"
import ManImage from "../../assets/Man.png"
import Frame1 from "../../assets/Frame1.png"
import Frame2 from "../../assets/Frame2.png"
import Frame3 from "../../assets/Frame3.png"

const Contact = () => {

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
        <div style={bgImage} className="pt-20 pb-10">
            {/* rules */}
            <div className="flex items-start justify-between border-2 bg-[#FFECEC] border-[#EEBF31] px-32 pt-8 pb-3 mx-40">
                <div>
                    <p className="text-[40px] font-normal mt-16">আচরণ নির্দেশিকা <span className="text-30 font-normal">(করনীয় ও বর্জনীয়)</span></p>
                    <h3 className="text-lg font-normal mt-10">১।একে অপরের প্রতি যথাযত সম্মান প্রদর্শন করুন ।</h3>
                    <h3 className="text-lg font-normal mt-3">২।কথাবার্তা ও চালচলনে হঠকারিতা, অসংযম ও ভাঁড়ামি বর্জনীয় ।</h3>
                    <h3 className="text-lg font-normal mt-10">৩।বিদ্বেষ / বৈষম্যমূলক মন্তব্য বা আচরণ থেকে বিরত থাকুন ।</h3>
                </div>
                <img src={ManImage} />
            </div>
            {/* contact box */}
            <div className="relative flex items-center justify-center mt-10">
                <form>
                    <p className="text-[#F8E44E] text-3xl font-normal">আমাদের সাথে যোগাযোগ করুন</p>
                    <div className="flex items-center justify-center gap-3 mt-5">
                        <div>
                            <label className="text-[#F8E44E] text-sm font-normal" htmlFor="name">আপনার নাম</label> <br />
                            <input name="name" className="border-2 border-[#EEBF31] p-1.5 rounded-lg" type="text" />
                        </div>
                        <div>
                            <label className="text-[#F8E44E] text-sm font-normal" htmlFor="email">আপনার ইমেইল</label> <br />
                            <input name="name" className="border-2 border-[#EEBF31] p-1.5 rounded-lg" type="email" />
                        </div>
                    </div>
                    <div className="mt-3">
                        <label className="text-[#F8E44E] text-sm font-normal" htmlFor="text">কি বিষয়ে জানতে চাইছেন?</label> <br />
                        <input name="name" className="w-full border-2 border-[#EEBF31] p-1.5 rounded-lg" type="text" />
                    </div>
                    <div className="mt-3">
                        <label className="text-[#F8E44E] text-sm font-normal" htmlFor="description">এখানে বিস্তারিত লিখুন</label> <br />
                        <textarea name="description" className="w-full border-2 border-[#EEBF31] p-1.5 rounded-lg" type="text" />
                    </div>
                    <div className="flex items-center justify-center mt-5">
                        <button className="text-[#F8E44E] bg-[#662E91] font-bold text-xl px-8 rounded-lg py-2">পাঠিয়ে দিন</button>
                    </div>
                </form>
                <img className="absolute left-40 -bottom-10 w-[150px] h-[250px]" src={Frame1} alt="framer1" />
                <img className="absolute right-10 bottom-0 w-[150px]" src={Frame2} alt="framer2" />
                <img className="absolute right-10 top-20 w-[80px]" src={Frame3} alt="framer3" />
            </div>
        </div>
    );
};

export default Contact;