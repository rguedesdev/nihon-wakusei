// Imports Principais
import Image from "next/image";

// Style Sheet: CSS
import "./Navbar.css";

// Components
import { ThemeToggle } from "./ThemeToggle";

// Static Images
import Logo from "../../public/logo.jpg";

// Icons
import { RiHome3Line } from "react-icons/ri";
import { FiTv } from "react-icons/fi";
import { BsBook } from "react-icons/bs";
import { HiOutlineBookOpen } from "react-icons/hi";
import { TbBook } from "react-icons/tb";
import { BiDonateHeart } from "react-icons/bi";
import { RiPagesLine } from "react-icons/ri";
import { RiMovieAiLine } from "react-icons/ri";

import { IoGameControllerOutline } from "react-icons/io5";

import { BiMoviePlay } from "react-icons/bi";
import { PiFilmSlate } from "react-icons/pi";

import {
  MdOutlineMusicVideo,
  MdOutlineLibraryMusic,
  MdPodcasts,
} from "react-icons/md";

function Navbar() {
  return (
    <nav>
      <Image className="" src={Logo} alt="Logo" width={70} height={70} />
      <ul>
        <li>
          <RiHome3Line size={20} />
          <span>Home</span>
        </li>

        <li>
          <FiTv size={20} />
          <span>Anime</span>
        </li>

        <li>
          <TbBook size={20} />
          <span>Mangá</span>
        </li>

        <li>
          <MdOutlineLibraryMusic size={20} />
          <span>J-Music</span>
        </li>

        <li>
          <IoGameControllerOutline size={20} />
          <span>Game</span>
        </li>

        <li>
          <PiFilmSlate size={20} />
          <span>Live Action</span>
        </li>

        <li>
          <MdPodcasts size={20} />
          <span>Podcast</span>
        </li>
      </ul>

      <ThemeToggle />
    </nav>
  );
}

export { Navbar };
