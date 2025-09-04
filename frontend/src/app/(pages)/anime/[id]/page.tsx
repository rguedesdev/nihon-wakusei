// Imports Principais
import Image from "next/image";
import Link from "next/link";

// Style Sheet CSS
import "./anime-id.css";

// Static Images
import Logo from "../../../../../public/logo.jpg";

// Icons
import { IoCalendarOutline } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { LiaFacebookSquare } from "react-icons/lia";
import { TbBrandBluesky } from "react-icons/tb";
import { RiYoutubeLine } from "react-icons/ri";

function AnimePageByID() {
  return (
    <main className="main-animeid">
      <div className="animeid-label">
        <span>ANIME NEWS</span>
      </div>

      <h1 className="animeid-title">Anime Page ID</h1>

      <div className="animeid-post-meta">
        <Image
          className="animeid-author-picture"
          src={Logo}
          alt="Author Picture"
          width={0}
          height={0}
          priority
        />
        <div className="animeid-author-info">
          <Link href="/autor/reinaldo-guedes" className="animeid-author-name">
            KON (REINALDO GUEDES)
            <div className="tooltip">
              <p>
                Me chamo Rafael Alves, conhecido como Rafael Shinzo. Tenho
                conhecimento em cultura pop japonesa, criei o AnimeNew em 2009
                com a missão de oferecer cobertura confiável...
              </p>
              <hr />
              <div className="tooltip-follow">
                <span className="tooltip-follow-title">Redes Sociais</span>
                <span className="tooltip-icons">
                  <IoLogoInstagram size={15} />
                  <BsTwitterX size={12} />
                  <LiaFacebookSquare size={18} />
                  <TbBrandBluesky size={15} />
                  <RiYoutubeLine size={18} />
                </span>
              </div>
            </div>
          </Link>
          <div className="animeid-post-date">
            <IoCalendarOutline size={16} />
            <span className="animeid-date-text">13.06.1990 às 00:30hs </span>
          </div>
        </div>
      </div>

      <p className="animeid-post-content">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32.
      </p>
    </main>
  );
}

export default AnimePageByID;
