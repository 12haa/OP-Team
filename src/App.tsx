import Hero from "./components/Hero.tsx";
import AboutUs from "./components/AboutUs.tsx";
import Members from "./components/Members.tsx";
import Works from "./components/Works.tsx";


const App = () => {
    return (
        <div className="border-4 flex flex-col h-screen w-full ">
            <Hero/>
            <AboutUs/>
            <Members/>
            <Works/>
        </div>
    )
}

export default App;