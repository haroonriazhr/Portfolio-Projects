import foob from '../assets/footer-b.png'
const Footer = () => {
  return (
    <>
      <footer className="w-full h-screen flex flex-col items-center justify-between bg-[#b7cee0]">
        <div className="w-full h-[90px] border-b-[1px] border-[#fff] items-center justify-between px-16 text-[#333333] hidden md:flex">
          <h1 className="w-[25%] text-[20px] font-medium">Your Gateway to Success Start</h1>
          <div className="w-[70%] text-[20px] font-medium flex items-center justify-evenly">
            <p>Pages</p>
            <p>Other</p>
            <p>Utility</p>
            <p>Help</p>
          </div>
        </div>

        <div className='w-full h-full flex flex-col-reverse md:flex-row'>
          <div className='w-full h-full flex flex-col justify-between p-8 font-semibold text-[#000] text-[20px] md:w-[40%]'>
            <div>
              <p>Here!</p>
              <p><i className="ri-arrow-right-line bg-[#EC3D2F] text-[#fff] p-1 rounded-full"></i> hello@helloflow.com</p>
            </div>

            <div className='w-full text-[35px] font-thin flex gap-4'>
              <p><i className="ri-youtube-fill"></i></p>
              <p><i className="ri-linkedin-box-fill"></i></p>
              <p><i className="ri-twitter-x-fill"></i></p>
              <p><i className="ri-facebook-box-fill"></i></p>
            </div>
          </div>

          <div className='w-full h-full md:w-[60%] flex flex-col md:flex-row p-4 md:p-0 gap-6 md:gap-0 justify-center items-center text-[#797878] text-[18px] font-normal'>
            <div className='w-full md:w-[24%]  h-[50%] flex flex-col gap-2'>
              <p>Demo (Sales)</p>
              <p className='text-[#EC3D2F]'>Home</p>
              <p>Services</p>
              <p>About</p>
              <p>Blog</p>
              <p>Work</p>
              <p>Shop</p>
            </div>

            <div className='w-full md:w-[24%] h-[50%] flex flex-col gap-2'>
              <p>404</p>
              <p>Password</p>
              <p>Checkout</p>
              <p>Blog Details</p>
              <p>Work Details</p>
              <p>Shop Details</p>
            </div>

            <div className='w-full md:w-[24%] h-[50%] flex flex-col gap-2'>
              <p>Style Guide</p>
              <p>Licencing</p>
              <p>Change log</p>
              <p>Instructions</p>
            </div>

            <div className='w-full md:w-[24%] h-[50%] flex flex-col gap-2'>
              <p>All Templates</p>
              <p>Supports</p>
            </div>
          </div>
        </div>

        <div className="w-full h-[90px] border-t-[1px] border-[#fff] items-center justify-between px-16 text-[#000] hidden md:flex">
          <h1 className='font-bold text-[20px]'>Your logo</h1>
          <img src={foob} alt="" />
        </div>

      </footer>
    </>
  )
}

export default Footer