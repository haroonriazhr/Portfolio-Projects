import { products, lastproduct } from "../assets/electronics";
import end from '../assets/prodbanner.png';
import watch from '../assets/2057b76af9ed627-removebg-preview.png';
import ear from '../assets/G03-200x200-removebg-preview.png';
import { Link } from "react-router-dom";
import Footer from '../footer/Footer';
const Electronics = () => {
  return (
    <>
      <h1 className="text-center text-[30px] font-bold pt-[80px]">Top rated products</h1>
      <div className="w-full pt-[30px] p-4 flex items-center justify-center">
        <div className="container grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4">
          {products.map((x, index) => (
            <Link to={`/electronics/${x.id}`} key={index} className="w-full max-w-xs h-[260px] p-2 rounded-lg shadow-xl bg-white">
              <div className="w-full h-[10%]">
                <div className="flex items-center justify-between text-[#696969] text-[14px]">
                  <h1>Top rated</h1>
                  <i className="ri-heart-line text-[18px]"></i>
                </div>
              </div>

              <div className="w-full h-[60%]">
                <img className="w-full h-full object-cover" src={x.image} alt={x.title.slice(0, 20)} />
              </div>

              <div className="w-full h-[30%]">
                <div className="pl-5 flex flex-col justify-center">
                  <h1 className="text-[15px] font-medium py-1">{x.title.slice(0, 20)}...</h1>
                  <p className="font-bold text-[18px] text-[#EC3D2F] pb-1">${x.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="hidden md:flex flex-col">
        <h1 className="px-12 text-[30px] font-bold pt-[20px]">Shop product by</h1>
        <div className="flex items-center justify-center bg-[]">
          <img src={end} alt="" />
        </div>
      </div>
      <h1 className="px-12 text-[30px] font-bold pt-[20px]">New arrival</h1>
      <div className="w-full  pt-[30px] p-4 flex items-center justify-center">
        <div className="container grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4">
          {lastproduct.map((x, index) => (
            <div key={index} className="w-full h-[260px] max-w-xs p-2 rounded-lg shadow-xl bg-white">
              <div className="w-full h-[60%]">
                <img className="w-full h-full object-cover object-top" src={x.image} alt={x.title.slice(0, 20)} />
              </div>
              <div className="w-full h-[30%]">
                <div className="flex flex-col justify-center">
                  <h1 className="text-[15px] font-medium py-1">{x.title.slice(0, 20)}...</h1>
                  <h1 className="text-[12px] text-[#ababab] py-[3px] font-medium">{x.description.slice(0, 30)}...</h1>
                  <p className="flex items-center justify-between font-bold text-[18px] text-[#EC3D2F] pb-1">${x.price} <Link to={`/electronics/${x.id}`} className="text-[12px] font-normal text-black p-[6px] rounded-lg bg-transparent border border-[red]">Add To Cart</Link></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full p-8 flex items-center md:justify-between gap-8 flex-col md:flex-row h-[100vh]">
        <div className="flex p-4 md:p-0 items-center justify-center md:w-[38%] rounded-lg w-full h-[30%] md:h-[60%] bg-[#B7CEE0]">
          <img className="w-[40%] md:w-[45%] h-full object-cover" src={ear} alt="" />
          <div className="w-[60%] md:w-[50%] h-[80%] flex flex-col justify-center gap-4">
            <h1 className="text-[40px] font-bold leading-[45px]">Awesome Airpods</h1>
            <p className="text-[#696969]">These have large ear cups that encompass the ears, providing good sound</p>
            <button className="w-fit bg-[#EC3D2F] text-white px-4 py-2 text-[15px] md:text-[17px] font-bold rounded-lg">Shop now <i className="ri-arrow-right-line font-normal"></i></button>
          </div>
        </div>
        <div className="flex flex-row-reverse p-4 md:p-0 items-center justify-evenly md:w-[58%] rounded-lg w-full h-[30%] md:h-[60%] bg-[#B7CEE0]">
          <img className="w-[40%] md:w-[45%] h-full object-cover" src={watch} alt="" />
          <div className="w-[90%] md:w-[45%] h-[80%] flex flex-col justify-center gap-4 pl-11">
            <h1 className="w-[50%] text-[42px] font-bold leading-[47px]">Smart Watches</h1>
            <button className="md:w-[50%] bg-[#EC3D2F] text-white px-4 py-2 text-[15px] md:text-[17px] font-bold rounded-lg">Shop now <i className="ri-arrow-right-line font-normal"></i></button>
          </div>
        </div>
      </div>
      <Footer/>
    </>


  )
}

export default Electronics