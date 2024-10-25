import home from "../assets/home.jpeg";
import dots from "../assets/home-dot.png";
import banner from "../assets/banner.png";
import Card from "../cards/Card";
import iphone from '../assets/images__2_-removebg-preview.png';
import tablet from '../assets/tablet.png';
import laptop from '../assets/laptop.png';
import speaker from '../assets/speaker.png';
import headphone from '../assets/headphone.png';
import camera from '../assets/camera.png';
import hb from '../assets/home-banner.png';
import lb2 from '../assets/home-lb.png';
import lb from '../assets/home-lb2.png';
import tab from '../assets/png-transparent-smartphone-feature-phone-tablet-computer-telephone-mobile-phone-and-tablet-angle-gadget-electronics-thumbnail-removebg-preview.png';
import Footer from '../footer/Footer';
const Home = () => {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-[60%] h-full">
          <img
            className="w-full h-[300px] md:h-[600px] object-cover object-center rounded-none md:rounded-r-[100px]"
            src={home}
            alt=""
          />
        </div>
        <div className="w-full md:w-[40%] h-full flex flex-col px-6 md:px-10 justify-center mt-6 md:mt-0">
          <p className="text-[#EC3D2F] text-xl md:text-2xl">In the spotlight</p>
          <h1 className="w-full md:w-[60%] my-4 text-3xl md:text-4xl font-bold">
            Your sound best for your life
          </h1>
          <p className="w-full md:w-[70%] text-[#696969] text-base md:text-base">
            These have large ear cups that encompass the ears, providing good
            sound isolation and often better sound quality.
          </p>
          <div className="mt-8 md:mt-[65px]">
            <button className="bg-[#EC3D2F] text-white px-4 py-2 text-[15px] md:text-[17px] font-bold rounded-lg">
              Shop now <i className="ri-arrow-right-line font-normal"></i>
            </button>
          </div>
        </div>
      </div>
      
      <div className="w-full h-[50px] flex items-center justify-center overflow-hidden my-4 py-2 border-b-[1px] border-[#69696969]">
        <img className="h-full object-cover " src={dots} alt="" />
      </div>

      <div className="w-full flex-col items-center justify-center hidden md:flex">
        <h1 className="text-black font-bold text-[30px] my-8">Feature’s</h1>
        <div className="w-full items-center justify-center bg-[#B7CEE0]">
          <img src={banner} alt="Banner" />
        </div>
      </div>


      <div className="w-full flex flex-col items-center justify-center my-8 px-4">
        <h1 className="text-[#EC3D2F] font-bold text-3xl md:text-[30px] mt-4 mb-3 text-center">
          Category
        </h1>
        <h2 className="text-black font-bold text-2xl md:text-[28px] text-center">
          Can we help you pick a headphone?
        </h2>

        <div className="w-full flex flex-wrap items-center justify-center gap-6 mt-8">
          <Card img={iphone} name="Iphone" />
          <Card img={speaker} name="Speaker" />
          <Card img={tablet} name="Tablet" />
          <Card img={laptop} name="Laptop" />
          <Card img={headphone} name="Headphone" />
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-center h-screen my-[2%] p-4 px-12 gap-4">
          <div className="w-full md:w-[50%] gap-2 flex md:flex-row p-4 md:p-0 items-center  justify-center bg-white shadow-lg rounded-lg">
              <img className="size-[50%] md:size-[55%] object-contain" src={camera} alt="" />
          <div className="w-full md:w-[45%]">
          <h1 className="w-full my-4 text-3xl md:text-4xl font-bold">
          25% off
          </h1>
          <p className="w-full text-[#000] text-[18px] md:text-[30px]">
          Catch hotest <span className="font-bold">Deals</span> in 
          Cameras category
          </p>
          <div className="mt-8 md:mt-[45px]">
            <button className="bg-[#EC3D2F] text-white px-4 py-2 text-[15px] md:text-[17px] font-bold rounded-lg">
              Shop now <i className="ri-arrow-right-line font-normal"></i>
            </button>
          </div>
         </div>
          </div>
          <div className="w-full md:w-[50%] gap-2 flex md:flex-row p-4 md:p-0 items-center justify-center bg-white shadow-lg rounded-lg">
              <img className="size-[50%] md:w-[55%] md:h-[450px] object-contain" src={tab} alt="" />
          <div className="w-full md:w-[45%]">
          <h1 className="w-full my-4 text-3xl md:text-4xl font-bold">
          25% off
          </h1>
          <p className="w-full md:w-[100%] text-[#000] text-[18px] md:text-[30px]">
          Tablets smartphone <span className="font-bold">and more</span>
          </p>
          <div className="mt-8 md:mt-[45px]">
            <button className="text-[#EC3D2F] bg-white border border-[#ec3d2f] px-4 py-2 text-[15px] md:text-[27px] font-bold rounded-lg">
              $799
            </button>
          </div>
         </div>
          </div>
          

      </div>

      <div className="hidden md:flex items-center justify-center bg-[#B7CEE0]">
        <img src={hb} alt="" />
      </div>

      <div className="w-full flex justify-between flex-col md:flex-row my-[5%] py-4 gap-4 bg-[#fff]">
          <img src={lb} alt="" />
          <img className="hidden md:flex" src={lb2} alt="" />
      </div>

      <Footer/>

    </>
  );
};

export default Home;
