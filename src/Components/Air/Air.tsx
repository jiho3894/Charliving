import { useState } from "react";
import ReactPlayer from "react-player";
import Footer from "../../styles/Footer";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const ArrayBBogumi = [
  "https://www.youtube.com/watch?v=Fn83vM8f1h8",
  "https://www.youtube.com/watch?v=ean9qb2Xtpc&t=120s",
  "https://www.youtube.com/watch?v=NeKdhpmVI64",
  "https://www.youtube.com/watch?v=BzcrBlUSHAo",
  "https://www.youtube.com/watch?v=YfzlR9X7Zfs",
];

const Air = () => {
  const [BBogumi, setBBogumi] = useState(0);
  const [pause, setPause] = useState(true);
  console.log(BBogumi);
  const next = () => {
    let total = 4;
    setBBogumi((prev) => (prev === total ? 0 : prev + 1));
  };
  const prev = () => {
    let total = 0;
    setBBogumi((prev) => (prev === total ? 4 : prev - 1));
  };
  const onPause = () => {
    setPause((prev) => !prev);
  };
  return (
    <div className="w-full h-screen bg-black">
      <div className="w-full h-full relative top-20 overflow-hidden flex justify-center">
        <ReactPlayer
          url={ArrayBBogumi[BBogumi]}
          volume={0.1}
          controls={false}
          playing={pause}
          muted={false}
          loop={true}
          width="90%"
          height="90%"
        ></ReactPlayer>
      </div>
      <div
        onClick={next}
        className="w-3 h-[90%] xl:w-10 absolute top-[5rem] right-0 bg-red-500 hover:bg-green-500 flex justify-center items-center"
      >
        <ArrowForwardIosIcon />
      </div>
      <div
        onClick={onPause}
        className="w-[calc(100%-0.75rem)] xl:w-[calc(100%-2.5rem)]  h-[90%] absolute top-[5rem]  flex justify-center items-center"
      ></div>
      <div
        onClick={prev}
        className="w-3 h-[90%] xl:w-10 absolute top-[5rem] left-0 bg-red-500 hover:bg-green-500 flex xl:justify-center justify-start items-center"
      >
        <ArrowBackIosIcon />
      </div>
      <Footer />
    </div>
  );
};

export default Air;
