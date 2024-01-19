import Navbar from "./Navbar.tsx";
import {motion} from "framer-motion";

const Hero = () => {
    return (
        <div className="w-full bg-[#EFEFF7] items-center mx-auto  justify-center border-4 flex p-6 flex-col ">
            <div className=" justify-center w-[98%]  h-[86px] flex items-center ">
                <Navbar/>
                <img src="/src/assets/OPTeamLogo.png "
                     className="h-[100px] w-[200px] object-contain   z-0 relative
                       right-10" alt="logo"/>
            </div>
            <motion.div key="hero"
                        initial={{y: 2, opacity: 0.5}}

                        whileHover={{y: 30, opacity: 1}}
                        whileTap={{y: 10, opacity: 0.5}}
                        transition={{type: "spring", duration: 1, damping: 10}}
                        className="bg-[#198BE852] flex items-center  justify-between gap-4 min-w-[340px] p-[12.5px] rounded-b-3xl absolute top-[80px] cursor-pointer   ">
                <p className="text-[#00004E] font-semibold  ">09925616704</p>
                <p className="text-[#00004E] text-md font-semibold  "> تماس با ما</p>
            </motion.div>


        </div>
    )
}

export default Hero;