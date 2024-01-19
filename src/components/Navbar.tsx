const Navbar = () => {
    return (
        <div
            className="bg-white  flex justify-between items-center rounded-2xl overflow-auto w-full h-full   shadow-gray-500 border-2 z-[99]  ">
            <div
                className="rounded-lg  flex items-center justify-center gap-2  w-[185px] h-[45px] border-2 shadow-lg  ml-10   ">
                <p className="text-gray-500 font-semibold text-sm mt-1 ">ثبت نام</p>
                <span className="text-gray-500 font-bold ">|</span>
                <p className="text-gray-500 font-semibold text-sm"> ورود</p>
                <img src="/src/assets/Vector.png" className="w-4 h-6 ml-4 mt-1" alt="logout_button"/>
            </div>
            <div className=" flex items-center justify-center  h-20 gap-24 w-[500px] mr-20 ">
                <p className="text-lg text-[#00004E] font-semibold ">سقارش سایت</p>
                <p className="text-lg text-[#00004E] font-semibold "> درباره ما</p>
                <p className="text-lg text-[#00004E] font-semibold ">پروژه های ما</p>
            </div>


        </div>
    )
}

export default Navbar;