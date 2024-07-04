import Header from "./Header";
import HeroImage from "../../public/banner11.jpg";

function Hero() {
  return (
    <div
      className="back h-dvh"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <Header />
      <div className="text-white mt-52 flex flex-col lg:mt-52 items-baseline pt-28 mx-2 px-9 ">
        <h1 className="text-4xl font-bold md:text2xl">Elevate Everyday</h1>
        <p className="lg:text-[1.1rem] md:text-1xl text-sm py-2">
          At HOMETANIQ, Every Moment Matters!
        </p>
        <button className="bg-white outline-none buttonBrown hover:text-white text-black mt-3 md:text-lg p-3 px-4 rounded-full text-sm ">
          Explore Now &rarr;
        </button>
      </div>
    </div>
  );
}

export default Hero;
