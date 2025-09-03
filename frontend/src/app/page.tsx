import Image from "next/image";

// Style Sheet CSS
import "./Home.css";

// Components
import { NewsCard } from "@/components/NewsCard";
import { Pagination } from "@/components/Pagination";

// Static Images
import AkaneBanasho from "../../public/akanebanashi.jpg";

// Icons
import { IoCalendarOutline } from "react-icons/io5";
import { RxPencil2 } from "react-icons/rx";

function Home() {
  return (
    <div>
      <main className="main">
        <div className="banner-wrapper">
          <Image
            className="banner-image"
            src={AkaneBanasho}
            alt="Anime Banner"
            width={500}
            height={268}
          />
          <div className="banner-label">
            <span>ANIME NEWS</span>
          </div>
        </div>

        <div>
          <h1 className="title-main">
            Akane-banashi receberá adaptação em anime!
          </h1>
          <p className="text-main">
            A direção do anime de Akane-banashi ficará a cargo de Ayumu
            Watanabe, conhecido por trabalhos como Kaijuu no Kodomo e Gyokou no
            Nikuko-chan. A produção será do estúdio ZEXCS. Yu Harima, que já
            atuou como diretor de episódios em Summer Time Rendering e Tokyo
            Revengers, será o diretor assistente. Já Kii Tanaka cuidará do
            design de personagens e também atuará como diretor-chefe de
            animação. Michihiro Tsuchiya, roteirista de séries como PriPara e
            Cross Game, ficará responsável pelos roteiros, enquanto Akio Izutsu
            compõe a trilha sonora. O especialista Kikuhiko Hayashiya atuará
            como supervisor de rakugo, garantindo fidelidade à arte tradicional
            retratada.
          </p>
          <div className="icons-main">
            <span className="date-icon">
              <IoCalendarOutline size={22} />
              <p>10 de Agosto de 2025</p>
            </span>
            <span className="date-icon">
              <RxPencil2 size={22} />
              <p>Reinaldo Guedes</p>
            </span>
          </div>
        </div>
      </main>

      <NewsCard />
      <Pagination />
    </div>
  );
}

export default Home;
