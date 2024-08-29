

const Card = ({Icon,number,cardLabel, percentage}) => {
  return (
    <div className="w-full h-auto border border-[#D9D9D9] bg-white rounded-lg p-4 flex flex-col justify-between cursor-pointer">
      <div className="w-10 h-10 bg-[#EAEEF6] rounded-full flex items-center justify-center text-[#2D56A8] text-xl">
        <Icon />
      </div>
      <div className="flex flex-col items-start mt-2">
        <p className="font-bold text-3xl">{number}</p>
        <div className="flex items-center justify-between w-full">
          <p className="text-[#323232] whitespace-nowrap">{cardLabel}</p>
          <div className="w-14 h-6 bg-gray-200 flex items-center justify-center rounded-full font-medium">{percentage}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
