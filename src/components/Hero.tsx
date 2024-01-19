import Navbar from "./Navbar.tsx";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full bg-[#EFEFF7] items-center mx-auto  justify-center border-4 flex p-6 flex-col ">
      <div className=" justify-center w-[98%]  h-[86px] flex items-center ml-20">
        <Navbar />
        <img
          src="/src/assets/OPTeamLogo.png "
          className="h-[100px] w-[200px] object-contain   z-0 relative
                       right-10"
          alt="logo"
        />
      </div>
      <motion.div
        key="hero"
        initial={{ y: 2, opacity: 0.5 }}
        whileHover={{ y: 30, opacity: 1 }}
        whileTap={{ y: 10, opacity: 0.5 }}
        transition={{ type: "spring", duration: 1, damping: 10 }}
        className="bg-[#198BE852] flex items-center  justify-between gap-4 min-w-[340px] p-[12.5px] rounded-b-3xl absolute top-[80px] cursor-pointer   "
      >
        <p className="text-[#00004E] font-semibold  ">09925616704</p>
        <p className="text-[#00004E] text-md font-semibold  "> تماس با ما</p>
      </motion.div>
      {/*Mid-Hero Section*/}
      <div className="border-4 w-full mt-10 flex items-center justify-between gap-4 h-[600px]">
        <div className="w-[70%] flex h-full items-center justify-between">
          <span className="absolute left-[380px] bottom-[215px] z-1">
            <img
              alt="backring"
              src="/src/assets/Ellipse_1.svg"
              className="w-120  object-cover"
            />
          </span>
          <img
            src="/src/assets/Hero.png"
            alt="heroImage"
            className="object-contain h-full w-full z-20 relative"
          />
          <div className="flex flex-col border-4 w-[60%]  items-center  h-ful  justify-center flex-1">
            <div className="w-full rounded-xl">
              <h2 className="font-semibold text-[#00164E]">
                به ما اعتماد کنید.
              </h2>
            </div>
            <p></p>
          </div>
        </div>
      </div>
      {/*    End Mid-Hero Section*/}
    </div>
  );
};

export default Hero;
