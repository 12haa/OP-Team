

    const Works = () => {
    return (
        <section className="flex items-center justify-center w-[100%] mt-40 " dir="rtl">
            <div className="flex  items-start  w-[70%] justify-center gap-4 mt-10 ">
               <div className="flex flex-col gap-1 p-2">

                <div>
                    <div className="bg-[#e7eefd] w-[30%]  rounded-xl p-1.5 py-2.5 px-5">
                        <h2 className="font-semibold text-[#00164e]   ">
                            درمورد تیم </h2>
                    </div>
                </div>
                <div className="flex w-[80%]  flex-col gap-5 p-2">

                    <p className=" text-[24px] leading-10 text-[#00004e]  ">برخی از پروژه های انجام شده توسط ما ...</p>
                    <p className="text-[#7986a4] leading-7">برخی از سایت هایی که توسط ما به نحو احسنت ساخته شده.</p>
                </div>
               </div>

                <div><img src="/assets/Group%2025.svg" alt="group"/></div>
            </div>
        </section>
    )
    }

    export default Works;