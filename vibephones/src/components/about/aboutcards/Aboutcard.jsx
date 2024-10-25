const Aboutcard = (props) => {
  return (
    <>
    <div className="w-[250px] h-[240px] bg-[#ababab85] rounded-lg shadow-2xl flex items-center justify-center">
      <div className="w-full pb-[10px] px-4">
        <h1 className="my-2 text-[20px] font-medium">{props.heading}</h1>
        <h1 className="text-[15px] text-[#696969]">{props.desc}</h1>
      </div>

    </div>
    </>
  )
}

export default Aboutcard