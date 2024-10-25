import aboutimg from '../assets/Phone-Accessories-PNG-HD-Image-removebg-preview.png'
import img2 from '../assets/about-b.png';
import img3 from '../assets/abtc-1.png';
import img4 from '../assets/abtc-2.png';
import img5 from '../assets/abt-last.png';
import Aboutcard from './aboutcards/Aboutcard';
import Footer from '../footer/Footer';
const About = () => {
  return (
    <>
      <div className="w-full pt-[80px] bg-transparent">

        <div className="w-full h-[50px] items-center justify-center text-[12px] hidden md:flex md:text-[16px] font-semibold bg-[#B7CEE0]">
          <h1>Are you university or school for an online partnership?</h1>
        </div>

        <div className="w-full flex flex-col-reverse md:flex-row justify-center h-[80vh] my-[5%]">
          <div className="w-full md:w-[50%] h-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center text-[32px] md:text-[40px] gap-0 md:gap-3 font-bold">
              <h1 className="w-full md:w-[50%] p-4 md:p-0">Open a Mobile Accessories Store Online</h1>
              <h1 className="w-full md:w-[50%] p-4 md:p-0 text-[28px] md:text-[35px] font-normal">Best Tips to Start an Online Business</h1>
            </div>

            <div className="w-full md:w-[50%] p-4 md:p-0 my-0 md:my-[3%] flex items-start justify-start">
              <button className="bg-[#EC3D2F] text-white px-4 py-2 text-[18px] md:text-[20px] font-bold rounded-lg">Shop now</button>
            </div>

          </div>
          <div className="w-full md:w-[50%] flex items-center justify-center">
            <img className='size-[300px] md:size-[550px] object-cover' src={aboutimg} alt="" />
          </div>
        </div>

        <div className='w-full hidden md:flex items-center justify-center bg-[#B7CEE0]'>
          <img className='h-[100px]' src={img2} alt="" />
        </div>

        <div className='w-full  bg-[#EEEDED] p-4 mb-[5%]'>
          <div className='flex flex-col items-center justify-center gap-1'>
            <h1 className='text-[18px] text-[#EC3D2F]'>Why choose us</h1>
            <h1 className='w-full md:w-[32%] text-center text-[32px] md:text-[40px] font-bold leading-[40px] my-[1%]'>Benifits of online buying service with us</h1>
          </div>

          <div className='w-full flex flex-wrap items-center justify-center gap-8 my-4'>
            <Aboutcard heading='Choose teaching' desc='simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s' />

            <Aboutcard heading='24/7 available' desc='simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s' />

            <Aboutcard heading='Whiteboard' desc='simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s' />

            <Aboutcard heading='Afterable price' desc='simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s' />
          </div>

          <div className='w-full mt-[15%] md:mt-[5%]'>
            <div className='w-full h-full flex items-center justify-center flex-col md:flex-row p-0 md:p-8'>
              <div className='w-full md:w-[50%]'>
                <img src={img3} alt="" />
              </div>

              <div className='w-full md:w-[50%] h-full flex flex-col px-6 md:px-10 justify-center mt-2 md:mt-0'>
                <p className="text-[#EC3D2F] text-[15px] md:text-[16px]">Customer your product us</p>
                <h1 className="w-full md:w-[100%] my-2 text-3xl md:text-4xl font-bold">
                  Personilized profeissional online buying on your schedule
                </h1>
                <p className="w-full md:w-[90%] text-[#696969] text-base md:text-base">
                  s simply dummy text of the printing and typesetting industry. Lorem Ipsum
                  has been the industry&apos;s standard dummy text ever since the 1500s, when
                  an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <div className="mt-8 md:mt-[65px]">
                  <button className="bg-[#EC3D2F] text-white px-4 py-2 text-[18px] md:text-[20px] rounded-lg">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div className='w-full h-full flex items-center justify-center flex-col md:flex-row-reverse p-0 md:p-8'>
              <div className='w-full md:w-[50%]'>
                <img src={img4} alt="" />
              </div>

              <div className='w-full md:w-[50%] h-full flex flex-col px-6 md:px-10 justify-center mt-2 md:mt-0'>
                <p className="text-[#EC3D2F] text-[15px] md:text-[16px]">Customer your product us</p>
                <h1 className="w-full md:w-[100%] my-2 text-3xl md:text-4xl font-bold">
                  Personilized profeissional online buying on your schedule
                </h1>
                <p className="w-full md:w-[90%] text-[#696969] text-base md:text-base">
                  s simply dummy text of the printing and typesetting industry. Lorem Ipsum
                  has been the industry&apos;s standard dummy text ever since the 1500s, when
                  an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <div className="mt-8 md:mt-[65px]">
                  <button className="bg-[#EC3D2F] text-white px-4 py-2 text-[18px] md:text-[20px] rounded-lg">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='hidden md:flex items-center justify-center my-5'>
          <img className='w-full md:w-auto' src={img5} alt="" />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About