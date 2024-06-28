import Header from "../components/Header";
import Backward from "../components/Backward";

function Brands() {
  return (
    <>
      <Header />

      <div className="md:flex justify-around md:gap-24 items-center p-8 lg:p-0">
        <div className="pb-6 md:pb-0 md:text-xl md:mx-16 my-10 md:text-justify">
          <h1 className="font-semibold md:text-2xl py-4">
            We put our love for design first
          </h1>
          <p>
            A vast selection of Italian and international brands chosen with
            care and attention to combine aesthetics and functionality, quality
            of materials and design.
          </p>
        </div>

        <div className="md:gridCont grid gap-3">
          <img src="/BrandGrid1.png" alt="Brand" className="lg:firstImg" />
          <img src="/BrandGrid2.png" alt="Brand" className="secondImg" />
          <img src="/BrandGrid3.png" alt="Brand" className="thirdImg" />
          <img src="/BrandGrid4.png" alt="Brand" className="lg:fourthImg" />
          <img src="/BrandGrid5.png" alt="Brand" className="fifthImg" />
          <img src="/BrandGrid6.png" alt="Brand" className="sixthImg" />
          <img src="/Banner4.jpg" alt="Brand" className="sixthImg" />
        </div>
      </div>
      <Backward />
    </>
  );
}

export default Brands;
