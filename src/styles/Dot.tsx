interface IProps {
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
  index: number;
}

export default function Dot({ index, onClick }: IProps) {
  return (
    <div className="z-10 w-32 h-8  absolute sm:top-[65vh] top-[60vh] left-[10%] flex items-center">
      {[1, 2, 3, 4, 5].map((_, num) => {
        return (
          <input
            key={num}
            type="button"
            value={`${num}`}
            onClick={onClick}
            className={`bg-gray-500 opacity-100 cursor-pointer sm:w-4 w-3 sm:h-4 h-3 m-1 relative z-1 rounded-full text-transparent ${
              index === num ? "bg-white" : ""
            }`}
          />
        );
      })}
    </div>
  );
}
