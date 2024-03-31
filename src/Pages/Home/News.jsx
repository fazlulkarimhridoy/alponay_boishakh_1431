import NewBg from "../../assets/NewsPaperBg.png"
import AlponaLine from "../../assets/AlponaLine3.png"
import Pata1 from "../../assets/Pata1.png"
import Pata2 from "../../assets/Pata2.png"
import NewsLogo from "../../assets/NewsLogo.png"
import News1 from "../../assets/News1.png"
import News2 from "../../assets/News2.png"
import News3 from "../../assets/News3.png"
import News4 from "../../assets/News4.png"
import News5 from "../../assets/News5.png"


const News = () => {

    const bgImage = {
        backgroundImage: `url(${NewBg})`,
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
            {/* lines */}
            <div className="flex overflow-hidden">
                <img src={AlponaLine} alt="alpona-line" />
                <img src={AlponaLine} alt="alpona-line" />
            </div>

            <div>
                {/* top */}
                <div className="w-[1600px] my-10 border-y-2 border-[#453727]">
                    <div className="flex items-center justify-center gap-20">
                        <img src={Pata1} alt="pata-1" />
                        <img src={NewsLogo} alt="news-logo" />
                        <img src={Pata2} alt="pata-2" />
                    </div>
                </div>
                {/* heading */}
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-[#453727]">বসন্তকাল</h2>
                    <p className="text-xl font-bold text-[#453727]">আজ ২৯ চৈত্র, শুক্রবার, ১৪৩০ বঙ্গাব্দ </p>
                </div>

                {/* news */}
                <div className="mt-20">
                    {/* first row */}
                    <div className="flex items-center justify-between border-b-2 border-[#453727]">
                        <div className="border-r-2 border-[#453727] pb-10">
                            <img className="w-full pr-10" src={News1} />
                            <p className="-mt-20 font-bold text-[#FFDFB5] text-[45px]">পহেলা বৈশাখের আগের রাতে ঢাকার  রাস্তায় আলপনা</p>
                        </div>
                        <div className="pl-10 pb-[25px]">
                            <img className="w-full" src={News2} />
                            <h2 className="font-bold text-xl">আলপনায় রাঙানো বৈশাখ</h2>
                            <p className="text-lg font-normal">বৈশাখ মানেই রঙের ছড়াছড়ি। বাঙালি সংস্কৃতির অন্যতম এ <br />
                                দিনটিতে রঙিন সাজে  সাজতে কে না চায়? তাই বাংলা বর্ষের <br />
                                প্রথম দিনটিতে নিজেকে আলপনার রঙে  রাঙানোর পাশাপাশি <br />
                                বর্ণিল রঙের ছোঁয়ায় রাঙিয়ে নিতে চাই নিজ গৃহকোণটিও। <br />
                                লোকজ শিল্পের ছোঁয়ায় বর্ষবরণ যেন হয়ে ওঠে আরও প্রাণবন্ত
                            </p>
                        </div>
                    </div>

                    {/* 2nd row */}
                    <div className="flex items-start justify-center">
                        <div className="pt-10 pr-10 border-r-2 border-[#453727]">
                            <img className="w-full h-full" src={News3} />
                            <h2 className="font-bold text-xl">পঞ্চাশের দশকের পয়লা বৈশাখ</h2>
                            <p className="text-lg font-normal">পয়লা বৈশাখ এলে ছোটবেলায় সেই ১৯৫৮ সালে বাবার <br />
                                হাত ধরে সন্ধ্যাবেলা দোকানে  দোকানে হালখাতা করার <br />
                                স্মৃতি মনে পড়ে যায়। এক দোকান থেকে আরেক <br />
                                দোকান—সব  দোকান থেকেই দেওয়া হতো বাংলা <br />
                                ক্যালেন্ডার ও একটি বড় সাইজের মিষ্টির  প্যাকেট। ব্যাগ <br />
                                ভর্তি হয়ে যেত ক্যালেন্ডার আর মিষ্টির প্যাকেটে। ভারি <br />
                                আনন্দ  হতো। কোনো কোনো দোকানদার আবার <br />
                                শরবত খাওয়াতেন।
                            </p>
                        </div>
                        <div className="pt-10 pl-10 pr-12 border-r-2 border-[#453727]">
                            <img className="w-full h-full" src={News4} />
                            <h2 className="font-bold text-xl">উৎসব-পার্বণে আলপনা</h2>
                            <p className="text-lg font-normal">মূলত আলপনা এক ধরনের লোকশিল্প। বাংলা সংস্কৃতি <br />
                                প্রকাশের জন্য আলপনাকে  আশ্রয় করা হয়। আলপনা <br />
                                শব্দটির উৎপত্তি সংস্কৃত শব্দ আলিমপদ থেকে। এর <br />
                                অর্থ প্রলেপ দেওয়া। ভারতবর্ষে আলপনার দেওয়ার <br />
                                প্রথা রয়েছে বহু আগে  থেকেই। আলপনার প্রচলন দু- <br />
                                তিন হাজার বছর আগের। অন্যান্য শিল্পের তুলনায় এটি <br />
                                বেশ ক্ষণস্থায়ী। পূর্বে চালের গুঁড়ো দিয়ে আলপনা করা <br />
                                হতো, কারণ মনে করা  হয় সাদা শুভ্রতা ও পবিত্রতার প্রতীক।
                            </p>
                        </div>
                        <div className="pt-10 px-10 ">
                            <img className="w-full h-full" src={News5} />
                            <h2 className="font-bold text-xl">আলপনায় বৈশাখ দেখা</h2>
                            <p className="text-lg font-normal">আর বিগত বছরগুলোতে বৈশাখ এলেই যেন আলপনা <br />
                                আঁকানোর বিশেষ প্রবণতা দেখা যাচ্ছে  তরুণ-তরুণীদের <br />
                                মধ্যে। ছেলেমেয়েরা শাড়ি-পাঞ্জাবি যাই পরুক না কেন <br />
                                বৈশাখী  আমেজে গা ভাসাতে আলপনা আঁকানো চাই-ই <br />
                                চাই।  কোথায় আঁকবেন পহেলা বৈশাখে বর্ষবরণ <br />
                                অনুষ্ঠানের জন্য রমনার বটমূলের  সুখ্যাতি অনেক আগ <br />
                                থেকেই। তাই বাংলা নববর্ষের প্রথম দিনটিতে সবাই <br />
                                ছোটেন  রমনার বটমূলের উদ্দেশে।
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* lines */}
            <div className="flex rotate-180 overflow-hidden mt-5">
                <img src={AlponaLine} alt="alpona-line" />
                <img src={AlponaLine} alt="alpona-line" />
            </div>
        </div>
    );
};

export default News;