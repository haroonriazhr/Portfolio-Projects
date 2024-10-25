const Contacts = () => {
  return (
    <>
    <div className="w-full  pt-[80px] p-4 bg-[#5197cc] flex items-center justify-center">
      <div className="w-[85%]  bg-[#B7CEE0] flex flex-col-reverse gap-2 md:flex-row p-4 md:p-8 rounded-lg shadow-xl">
            <div className="md:w-[30%] w-full  flex flex-col justify-center bg-[#B7CEE0]">
              <h1 className="text-[38px] font-bold py-4">Contact us</h1>
              <p className="text-[#696969] pb-6">s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <div className="flex flex-col gap-4 text-[#696969] justify-center ">
                <p><i className="ri-mail-line text-[20px]"></i> kashifhurmat893@gmail.com</p>
                <p><i className="ri-phone-line text-[20px]"></i> +92 302 5058 413</p>
              </div>
            </div>
            <div className="md:w-[70%] w-full flex flex-col gap-4 bg-white rounded-lg shadow-lg p-4">
              <h1 className="w-[70%] text-[30px] font-bold leading-10">We’d love to hear from you! Lets get in touch</h1>
              <div className="w-full gap-4 flex flex-col md:flex-row items-center justify-center">
              
              <div className="w-full md:w-[50%]  flex flex-col gap-4 ">
                <label htmlFor="name" className="text-[#696969]">Name</label>
              <input className='w-full bg-transparent border border-[#EC3D2F] text-black px-4 py-2 text-[15px] md:text-[17px] rounded-lg' name="name" type="text" />
              <label htmlFor="email" className="text-[#696969]">Email</label>
              <input className='w-full bg-transparent border border-[#EC3D2F] text-black px-4 py-2 text-[15px] md:text-[17px] rounded-lg' name="email" type="text" />
              <label htmlFor="password" className="text-[#696969]">Password</label>
              <input className='w-full bg-transparent border border-[#EC3D2F] text-black px-4 py-2 text-[15px] md:text-[17px] rounded-lg' name="password" type="text" />
              </div>
              
              <div className="w-full md:w-[50%]  flex flex-col justify-center gap-4">
                <label htmlFor="user" className="text-[#696969]">User</label>
              <input className='w-full bg-transparent border border-[#EC3D2F] text-black px-4 py-2 text-[15px] md:text-[17px] rounded-lg' name="user" type="text" />
              <label htmlFor="phone" className="text-[#696969]">Phone number</label>
              <input className='w-full bg-transparent border border-[#EC3D2F] text-black px-4 py-2 text-[15px] md:text-[17px] rounded-lg' type="text"  name="phone"/>
              <label htmlFor="phone2" className="text-white">Phone number</label>
              <input className='w-full hidden md:flex bg-transparent border border-transparent text-black px-4 py-2 text-[15px] md:text-[17px] rounded-lg' type="text" name="phone2" />
              </div>
              </div>
              
              <div className="w-full flex flex-col">
                <label htmlFor="messege" className="text-[#696969] py-1">Text text</label>
              <textarea name="messege" rows={4} className="border border-[#EC3D2F] rounded-lg px-2" placeholder="Type here"></textarea>
              <button className="w-fit bg-[#EC3D2F] text-white px-4 py-2 text-[15px] md:text-[16px] rounded-lg mt-3">Send messege</button>
              </div>
            </div>
      </div>
    </div>
    </>
  )
}

export default Contacts