// Imports Principais
import Image from "next/image";

// Style Sheet: CSS
import "./Navbar.css";

// Static Images
import Logo from "../../public/logo.jpg";

function Navbar() {
  return (
    <nav className="navbar">
      <Image className="" src={Logo} alt="Logo" width={70} height={70} />
      <ul>
        <li>Home</li>
        <li>Anime</li>
        <li>Mangá</li>
        <li>Live Action</li>
        <li>J-Music</li>
      </ul>
    </nav>
  );
}

export { Navbar };
