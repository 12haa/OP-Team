

    const Members = () => {
    return (
        <section className="w-full h-full flex flex-col gap-10 justify-center items-center  bg-[#fff] mt-20">
            <div className="flex items-center justify-center w-full ">
                <div className="bg-[#0055ff] px-6  p-3 rounded-xl">
                <h2 className="text-white text-[28px]">اعضای تیم اوپی</h2>
                </div>
            </div>
            <div className="flex mt-10  w-[67%] items-center justify-between ">

                {[1,2,3,4,].map(()=> (
                    <div className="bg-cover bg-center w-[286px] h-[452px] rounded-xl"
                         style={{backgroundImage: "url('/assets/Card.svg')"}}>
                        <div className="flex flex-col   w-full h-full  p-4" dir="rtl">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col gap-1">
                                    <h1 className="text-white text-[25px]">رضا عسگری</h1>
                                    <p className="text-white">طراح و مدیر تیم</p>
                                    <div className="p-0.5 bg-white rounded-lg  w-[60%] mt-1"></div>
                                </div>
                                <div className="rounded-xl border-2 border-white p-10"></div>

                            </div>
                            <div className="flex  items-start mt-2" dir="rtl">
                                <p className="text-white text-[17px] leading-8">طراح UiUx هستم،22ساله از قم،
                                    دارای دوسال سابقه کاری فریلنسری،
                                    جویای پیشرفت هستم و با ایجاد این تیم قله های پیشرفت را فتح خواهم کرد.</p>
                            </div>
                            <div
                                className="h-[100px] rounded-xl  bg-[#0045ce] flex flex-col items-center  justify-evenly gap-6  mt-4  w-[13%]">
                                <img src="/assets/instagram.png" alt="instagram" className="w-full object-contain"/>
                                <img src="/assets/in.png" alt="instagram" className="object-cover"/>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
    }

    export default Members;