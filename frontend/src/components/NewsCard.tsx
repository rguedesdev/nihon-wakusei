// Imports Principais
import Image from "next/image";

// Style Sheet CSS
import "./NewsCard.css";

// Images
import Kuroneko from "../../public/kuroneko.png";
import Manga from "../../public/09.jpg";

// Icons
import { IoCalendarOutline } from "react-icons/io5";
import { RxPencil2 } from "react-icons/rx";

function NewsCard() {
  return (
    <section>
      <div className="news-card">
        <Image
          className="card-image"
          src={Kuroneko}
          alt="Anime Banner"
          width={500}
          height={268}
        />
        <h2 className="card-title">
          Kuroneko to Majo no Kyoushitsu terá Anime para 2026
        </h2>
        <div className="card-icons">
          <span className="date-icon">
            <IoCalendarOutline size={22} />
            <p>10/08/2025</p>
          </span>
          <span className="date-icon">
            <RxPencil2 size={22} />
            <p>Reinaldo Guedes</p>
          </span>
        </div>
      </div>
    </section>
  );
}

export { NewsCard };
