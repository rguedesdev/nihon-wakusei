// Imports Principais
import Image from "next/image";
import Link from "next/link";

// Style Sheet CSS
import "./anime-id.css";

// Components
import { Comments } from "@/components/Comments";

// Static Images
import Logo from "../../../../../public/logo.jpg";
import Akane from "../../../../../public/akanebanashi.jpg";

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

      {/* 
      <div className="animeid-category-label">
        <span>ANIME NEWS</span>
      </div> */}

      <h1 className="animeid-title">
        {" "}
        Akane-banashi ganha anime para TV em 2026 pelo estúdio ZEXCS
      </h1>

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
                Me chamo Reinaldo Guedes, mais conhecido como Kon. Curto animes,
                mangás e cultura pop japonesa desde pequeno. Criei o Nihon
                WAkusei em 2018 com a missão de oferecer um conteúdo de
                qualidade para a comunidade.
              </p>

              <hr className="hr-faded" />

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

      <Image
        src={Akane}
        className="animeid-post-image"
        alt="Post Image"
        width={0}
        height={0}
        priority
      />

      <p className="animeid-post-content">
        A direção do anime de Akane-banashi ficará a cargo de Ayumu Watanabe,
        conhecido por trabalhos como Kaijuu no Kodomo e Gyokou no Nikuko-chan. A
        produção será do estúdio ZEXCS. Yu Harima, que já atuou como diretor de
        episódios em Summer Time Rendering e Tokyo Revengers, será o diretor
        assistente. Já Kii Tanaka cuidará do design de personagens e também
        atuará como diretor-chefe de animação. Contrary to popular belief, Lorem
        Ipsum is not simply random text. It has roots in a piece of classical
        Latin literature from 45 BC, making it over 2000 years old. Richard
        McClintock, a Latin professor at Hampden-Sydney College in Virginia,
        looked up one of the more obscure Latin words, consectetur, from a Lorem
        Ipsum passage, and going through the cites of the word in classical
        literature, discovered the undoubtable source. Lorem Ipsum comes from
        sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
        Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
        treatise on the theory of ethics, very popular during the Renaissance.
        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
        from a line in section 1.10.32.
      </p>
      <hr className="hr-faded" />

      <Comments />
    </main>
  );
}

export default AnimePageByID;
