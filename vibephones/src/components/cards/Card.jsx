const Card = (props) => {
  return (
    <>
      <div className="w-[230px] h-[250px] md:w-[190px] flex flex-col items-center rounded-lg p-4 bg-[#fff] shadow-xl">
        <img
          className="size-[120px] object-contain object-top"
          src={props.img}
        />
        <h1 className="text-[18px] text-black font-bold mt-2">{props.name}</h1>
      </div>
    </>
  );
};

export default Card;
