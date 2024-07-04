import Header from "../components/Header";
import Backward from "../components/Backward";
import Frame17 from "../../public/Frame17.png";
import Frame18 from "../../public/Frame18.png";
import Frame from "../../public/Frame.png";
import frame2 from "../../public/frame2.png";
import Grid1 from "../../public/Grid1.png";
import Grid2 from "../../public/Grid2.png";
import Grid3 from "../../public/Grid3.png";
import Grid4 from "../../public/Grid4.png";
import Brand4 from "../../public/Brand4.png";

function ShowRoom() {
  return (
    <div>
      <Header />
      <div className="flex items-center lg:flex-row md:flex-row flex-col">
        <div className="px-4 mx-9">
          <h1 className="font-bold text-xl py-4 px-4 mx-5 lg:text-4xl">
            Come and visit us in the showroom in Shibuya
          </h1>
          <p className="py-4 px-4 mx-5 text-lg lg:text-1xl lg:text-right text-justify">
            {" "}
            At HomeTaniq, tradition and innovation blend perfectly. The showroom
            hosts a careful selection of the best Made in Italy and
            international brands, from classics to the latest design trends.
            Furnishings, bathroom furnishings, floors, coverings and design
            accessories to give a whole new identity to your home.
          </p>
          <button className="buttonWhite uppercase hover:text-black bg-black hover:border hover:border-stone-500 outline-none flex text-white lg:py-4 lg:px-5 py-2 px-2 mx-auto lg:mx-0 rounded-full m-9">
            BOOK AN APPOINTMENT
          </button>
        </div>
        {/* <img src="/Frame17.png" alt="frame" className="lg:w-1/2" /> */}
        <img src={Frame17} alt="frame" className="lg:w-1/2" />
      </div>
      <img
        src="/Brand3.png"
        alt="frame"
        className="lg:w-1/4 lg:mx-12 mt-8 lg:mt-0 px-4"
      />

      <div>
        <div className="flex lg:flex-row md:flex-row flex-col bg-[#e5e0d8] items-center lg:justify-around py-10">
          <div className="mx-10 space-y-5">
            <h1 className="font-bold text-2xl lg:text-3xl">
              Let your self be inspired <br /> by our environment
            </h1>
            <p className="text-lg lg:text-1xl">
              In the showroom our interior designers have recreated <br />
              proposals for every room in your home, let yourself <br /> be
              inspired.
            </p>
            <button className="uppercase lg:text-sm hover:text-white border border-stone-950 bg-white outline-none buttonBlack lg:py-4 lg:px-5 py-2 px-2 rounded-full my-4">
              BOOK AN APPOINTMENT
            </button>
          </div>
          {/* <img
            src="/frame2.png"
            alt="frame"
            className="lg:w-2/5 mt-6 lg:mt-0"
          /> */}
          <img src={frame2} alt="frame" className="lg:w-2/5 mt-6 lg:mt-0" />
        </div>
      </div>

      <div>
        <div>
          <span className="flex items-center space-x-3 py-3 px-6 lg:px-16">
            <h1 className="font-bold text-[8rem] text-[#e5e0d8]">01</h1>
            <h1 className="font-bold lg:text-3xl text-[1.8rem]">
              Explore the Elegance in the <br /> Heart of Florence
            </h1>
          </span>

          <div className="lg:flex justify-around m-4 items-center">
            <img src="/Grid.png" alt="frame" className="lg:w-2/4" />

            <div className="space-y-5">
              <h1 className="font-bold lg:text-2xl text-xl">
                Times and appointments
              </h1>
              <p>
                Via Maragliano 155, 50144 Florence entrance
                <br />
                Drive Maragliano Free parking reserved for customers
              </p>

              <h1 className="font-bold lg:text-xl text-lg">
                WE ARE WAITING FOR YOU IN THE SHOWROOM!
              </h1>
              <p>
                Book an appointment form Tuesday to Friday: 10:00 - 13:30 <br />{" "}
                or call us on T. +39 055 331700
              </p>
              <button className="buttonWhite uppercase hover:text-black bg-black hover:border hover:border-stone-500 outline-none text-white lg:py-4 lg:px-5 py-2 px-2 rounded-full">
                BOOK AN APPOINTMENT
              </button>
            </div>
          </div>

          <div>
            <span className="flex items-center space-x-3 py-3 px-6 lg:px-16">
              <h1 className="font-bold text-[8rem] text-[#e5e0d8]">02</h1>
              <h1 className="font-bold lg:text-3xl text-2xl">
                Touch the Excellence of Design <br /> with your own hands
              </h1>
            </span>

            <div className="lg:flex items-center mx-20 gap-3 justify-around">
              <div className="flex flex-wrap gap-4">
                {/* <img
                  src="/Grid1.png"
                  alt="frame"
                  className="lg:w-2/5 w-[45%]"
                /> */}
                <img src={Grid1} alt="frame" className="lg:w-2/5 w-[45%]" />
                {/* <img
                  src="/Grid2.png"
                  alt="frame"
                  className="lg:w-2/5 w-[45%]"
                /> */}
                <img src={Grid2} alt="frame" className="lg:w-2/5 w-[45%]" />
                <img src={Grid3} alt="frame" className="lg:w-2/5 w-[45%]" />
                <img src={Grid4} alt="frame" className="lg:w-2/5 w-[45%]" />
              </div>

              <div className="space-y-9">
                <img
                  src={Brand4}
                  alt="frame"
                  className="lg:w-2/2 mt-5 lg:mt-0"
                />
                <p className="text-lg text-justify lg:text-right">
                  Our showroom, with its over 1000 m2 of pure inspiration,
                  offers a space where elegance and style are the protagonists.
                  Here, you can immerse yourself in a vast assortment of
                  furnishings and finishes, designer accessories and products
                  from the most exclusive and trendy brands, constantly updated
                  to satisfy your desires
                </p>
              </div>
            </div>
          </div>

          <div>
            <span className="flex items-center space-x-3 py-3 px-6 lg:px-16">
              <h1 className="font-bold text-[8rem] text-[#e5e0d8]">03</h1>
              <h1 className="font-bold text-3xl">Personalized service</h1>
            </span>

            <div className="lg:flex items-center mx-20 gap-8 justify-around">
              <img src={Frame} alt="frame" className="lg:w-2/4" />

              <div className="space-y-9 lg:mx-14">
                <p className="text-lg text-justify lg:text-right py-5 lg:py-0">
                  Our commitment goes beyond the simple display of products. We
                  are here for you, ready to offer personalized service and
                  guidance. Our highly qualified sales people and specialized
                  architects will be by your side, assisting you in making the
                  perfect choice for your project.{" "}
                </p>
                <button className="buttonWhite uppercase hover:text-black bg-black hover:border hover:border-stone-500 outline-none text-white lg:py-4 lg:px-5 py-2 px-1 rounded-full text-sm md:text-lg">
                  DISCOVER THE DESIGN PROCESS
                </button>
              </div>
            </div>
          </div>

          <div className="lg:flex bg-[#426034] my-24 items-center justify-between">
            <div className="text-white text-center">
              <h1 className="lg:text-4xl text-2xl font-bold py-4 m-4">
                HomeTaniq events
              </h1>
              <p className="lg:py-5 lg:text-lg md:mx-16 mx-4">
                Stay updated on the events we organize in our showroom. We like
                to involve our private and professional clients by always
                offering new formats within our large spaces. Unique experiences
                to create networking and bring together various protagonists
                from the world of art and design.
              </p>
              <button className="button border border-white hover:text-green-700 outline-none mt-4 mx-auto flex items-center text-white lg:p-4 p-2 rounded-full my-5">
                READ ALL ARTICLES &rarr;
              </button>
            </div>

            <img src={Frame18} alt="frame" className="lg:w-2/5" />
          </div>
        </div>
      </div>
      <Backward />
    </div>
  );
}

export default ShowRoom;
