"use client"; // necessário para usar hooks no componente client-side
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // hook para pegar a rota atual

// Styles e Components
import "./Navbar.css";
import { ThemeToggle } from "./ThemeToggle";
import Logo from "../../public/logo.jpg";

// Icons
import { RiHome3Line } from "react-icons/ri";
import { FiTv } from "react-icons/fi";
import { TbBook } from "react-icons/tb";
import { MdOutlineLibraryMusic, MdPodcasts } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { PiFilmSlate } from "react-icons/pi";

function Navbar() {
  const pathname = usePathname();

  // função para verificar se o link está ativo
  // const isActive = (href: string) => pathname === href;
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <nav>
      <Image src={Logo} alt="Logo" width={70} height={70} />
      <ul>
        <li>
          <Link
            className={`navigation-link ${isActive("/") ? "active" : ""}`}
            href="/"
          >
            <RiHome3Line size={20} />
            <span>Home</span>
          </Link>
        </li>

        <li>
          <Link
            className={`navigation-link ${isActive("/anime") ? "active" : ""}`}
            href="/anime"
          >
            <FiTv size={20} />
            <span>Anime</span>
          </Link>
        </li>

        <li>
          <Link
            className={`navigation-link ${isActive("/manga") ? "active" : ""}`}
            href="/manga"
          >
            <TbBook size={20} />
            <span>Mangá</span>
          </Link>
        </li>

        <li>
          <Link
            className={`navigation-link ${isActive("/jmusic") ? "active" : ""}`}
            href="/jmusic"
          >
            <MdOutlineLibraryMusic size={20} />
            <span>J-Music</span>
          </Link>
        </li>

        <li>
          <Link
            className={`navigation-link ${isActive("/game") ? "active" : ""}`}
            href="/game"
          >
            <IoGameControllerOutline size={20} />
            <span>Game</span>
          </Link>
        </li>

        <li>
          <Link
            className={`navigation-link ${
              isActive("/live-action") ? "active" : ""
            }`}
            href="/live-action"
          >
            <PiFilmSlate size={20} />
            <span>Live Action</span>
          </Link>
        </li>

        <li>
          <Link
            className={`navigation-link ${
              isActive("/podcast") ? "active" : ""
            }`}
            href="/podcast"
          >
            <MdPodcasts size={20} />
            <span>Podcast</span>
          </Link>
        </li>
      </ul>

      <ThemeToggle />
    </nav>
  );
}

export { Navbar };
