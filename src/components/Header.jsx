import { Link } from "react-router-dom";
import Logo from "/images/Logo.svg";

const Header = () => {
  return (
    <div
      id="header"
      className={`min-h-[240px] md:min-h-[300px] bg-[url('/images/hero-image-wr.jpg')] bg-no-repeat bg-center bg-cover flex items-center`}
    >
      <Link to="/" className="mx-auto">
        <img src={Logo} alt="World Ranks" />
      </Link>
    </div>
  );
};

export default Header;
