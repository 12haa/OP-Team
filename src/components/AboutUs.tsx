const AboutUs = () => {
    return (
        <section className="bg-[#f8faff]  flex items-center justify-center w-full pt-20 " dir="rtl ">
            <div className="flex  w-[80%]  gap-4 " dir="rtl">
                <div className="flex  w-[40%]  justify-center relative ">
                    <img src="/assets/Rectangle%2019.svg" className=" h-[300px] object-contain" alt="aboutUs"/>
                    <div className="absolute right-[-50px] top-4 ">
                        <img src="/assets/360_F_605111295_QyQY4Tk7bv8789bFA0TgGKeTM4zzowdo%201.png" alt="userImage"
                             className="h-[300px]  "/>
                    </div>
                </div>
                <div className="flex flex-col items-start  w-full justify-center gap-4 mt-10">
                    <div>
                        <div className="bg-[#e7eefd] w-[100%]  rounded-xl p-1 px-4">
                            <h2 className="font-semibold text-[#00164E]   ">
                                درمورد تیم </h2>
                        </div>
                    </div>
                    <div className="flex w-[40%] flex-col gap-5 p-2">

                    <p className=" text-[24px] leading-10 text-[#00004e]  ">تیم برنامه نویسی اوپی،تیم خود کفا در حوزه ساخت و طراحی وب</p>
                        <p className="text-[#7986a4] leading-7"> تیم اوپی تاسیس شده در 1402/10/1 ، این تیم تشکیل شده از چند فریلنسر  که تجربه کافی در حوزه برنامه نویسی  را دارا هستند. یک تیم خوش ذوق و خلاق در زمینه ساخت سایت های شخصی ،شرکتی، فروشگاهی و ... که شعارشان نوآوری و ایده های ناب هست و از مهم ترین حسن های این تیم نظم و مسعولیت پذیری است. حسن انتخاب شما سبب رضایت شما خواهد شد.شد.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutUs;