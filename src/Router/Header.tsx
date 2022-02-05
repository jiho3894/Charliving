import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-16 fixed flex items-center bg-teal-400">
      <div className="ml-5">
        <Link to="/">
          <span className="mr-10 font-bold">Charliving</span>
        </Link>
        <Link to="/Air">
          <span className="mr-5">실시간</span>
        </Link>
        <Link to="/TV">
          <span className="mr-5">TV프로그램</span>
        </Link>
        <Link to="/영화">
          <span className="mr-5">영화</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
