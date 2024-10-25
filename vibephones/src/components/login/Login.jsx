import { useState } from 'react';
import img from '../assets/Phone-Accessories-PNG-HD-Image-removebg-preview.png';
import img2 from '../assets/form-l.png';
const LoginSignupToggle = () => {

  const [isLogin, setIsLogin] = useState(true);


  const showLogin = () => {
    setIsLogin(true);
  };

  const showSignup = () => {
    setIsLogin(false);
  };
  return (
    <div className="w-full h-screen pt-[80px] p-4 bg-[#B7CEE0] flex items-center justify-center overflow-hidden">
      <div className="w-[85%] md:h-[100%] bg-[#fff] flex flex-col md:flex-row p-2 rounded-lg shadow-xl">
        <div className="md:w-[40%] w-full h-full flex items-center justify-center p-2">
          <div className='w-full md:h-[70%]'>
            <div className='h-[10%] flex items-center justify-between px-4 text-[25px] font-semibold'>
              <button onClick={showLogin} className={isLogin ? 'active' : ''}>
                <h1 className='text-[#EC3D2F]'>Sign in</h1>
              </button>
              <button onClick={showSignup} className={!isLogin ? 'active' : ''}>
                <h1 className='text-[#696969]'>Sign Up</h1>
              </button>
            </div>

            <h2>{isLogin ? "" : ""}</h2>
            {isLogin ? (
              // login form
              <form className="w-full flex flex-col items-center justify-center p-4 gap-4">
                <input className='w-full bg-transparent border border-[#EC3D2F] text-black px-4 py-2 text-[15px] md:text-[17px] rounded-lg' type="Name" placeholder="Username" />
                <input className='w-full bg-transparent border border-[#EC3D2F] text-black px-4 py-2 text-[15px] md:text-[17px] rounded-lg' type="password" placeholder="Password" />
                <div className='w-full flex items-center justify-between'>
                  <h1 className='text-[#696969] py-2 text-[15px] md:text-[12px]'>Forget Password?</h1>
                  <h1 className='bg-[#EC3D2F] text-white px-8 py-2 text-[15px] md:text-[17px] font-bold rounded-lg'>Sign in</h1>
                </div>
              </form>
            ) : (
              // sign up form
              <form className="w-full flex flex-col items-center justify-center p-4 gap-4">
                <input className='w-full bg-transparent border border-[#EC3D2F] text-black px-4 py-2 text-[15px] md:text-[17px] rounded-lg' type="Name" placeholder="Username" />
                <input className='w-full bg-transparent border border-[#EC3D2F] text-black px-4 py-2 text-[15px] md:text-[17px] rounded-lg' type="email" placeholder="Email" />
                <input className='w-full bg-transparent border border-[#EC3D2F] text-black px-4 py-2 text-[15px] md:text-[17px] rounded-lg' type="password" placeholder="Password" />
                <div className='w-full flex items-center justify-between'>
                  <h1 className='bg-[#EC3D2F] text-white px-8 py-2 text-[15px] md:text-[17px] font-bold rounded-lg'>Sign up</h1>
                </div>
              </form>
            )}
            <div className='w-full block'>
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
        <div className="md:w-[60%] w-full h-full flex items-center justify-center">
          <img className='w-[700px] h-[300px] md:w-[688px] md:h-[600px] object-cover' src={img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default LoginSignupToggle;