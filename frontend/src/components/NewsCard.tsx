"use client";

// Imports Principais
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Axios
import api from "@/utils/api";

// Style Sheet CSS
import "./NewsCard.css";

// Images
import AkaneBanashi from "../../public/akanebanashi.jpg";
import Kuroneko from "../../public/kuroneko.png";
import Uma from "../../public/uma-musume.jpg";
import MakeHeroine from "../../public/make-heroine.jpg";

// Icons
import { IoCalendarOutline } from "react-icons/io5";
import { RxPencil2 } from "react-icons/rx";
import { MdOutlinePersonOutline } from "react-icons/md";
import { link } from "fs";

function NewsCard() {
  const [newsDB, setNewsDB] = useState([]);

  console.log(newsDB);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await api.get("/posts/");
      setNewsDB(response.data);
    };

    fetchNews();
  }, []);

  const news = [
    {
      id: 1,
      image: Kuroneko,
      postLabel: "MANGA NEWS",
      title: "Kuroneko to Majo no Kyoushitsu terá Anime para 2026",
      date: "05.08.2025",
      author: "Kon",
      link: "/anime/kuroneko-to-majo-no-kyoushitsu",
    },
    {
      id: 2,
      image: Uma,
      postLabel: "OTAKICE",
      title: "Tailândia vai Realizar Corrida Cosplay de Uma Musume",
      date: "10.08.2025",
      author: "Kon",
      link: "/anime/uma-musume-corrida-cosplay",
    },
    {
      id: 3,
      image: MakeHeroine,
      postLabel: "ANIME NEWS",
      title:
        "Esse Anime usou Várias Imagens de IA, mas como Ninguém o Assiste está tudo Bem",
      date: "11.08.2025",
      author: "Kon",
      link: "/anime/make-heroine-ia",
    },
    {
      id: 4,
      image: AkaneBanashi,
      postLabel: "URGENTE",
      title: "Akane-banashi receberá adaptação em anime!",
      description:
        "A direção do anime de Akane-banashi ficará a cargo de Ayumu Watanabe, conhecido por trabalhos como Kaijuu no Kodomo e Gyokou no Nikuko-chan. A produção será do estúdio ZEXCS. Yu Harima, que já atuou como diretor de episódios em Summer Time Rendering e Tokyo Revengers, será o diretor assistente. Já Kii Tanaka cuidará do design de personagens e também atuará como diretor-chefe de animação. Michihiro Tsuchiya, roteirista de séries como PriPara e Cross Game, ficará responsável pelos roteiros, enquanto Akio Izutsu compõe a trilha sonora. O especialista Kikuhiko Hayashiya atuará como supervisor de rakugo, garantindo fidelidade à arte tradicional retratada.",
      date: "11.08.2025",
      author: "Kon",
      link: "/anime/akane-banashi-anime",
    },
  ];

  return (
    <section>
      {newsDB.map((news) => (
        <div key={news._id}>
          <h1>{news.postTitle}</h1>
        </div>
      ))}
      {news
        .map((item, index) =>
          index === news.length - 1 ? (
            // Card principal
            <Link href={item.link} className="card-news-main">
              <div className="banner-wrapper">
                <Image
                  className="banner-image"
                  src={item.image}
                  alt="Anime Banner"
                  width={500}
                  height={268}
                />
                <div className="banner-label">
                  <span>{item.postLabel}</span>
                </div>
              </div>

              <div>
                <h1 className="title-main">{item.title}</h1>
                <p className="text-main">{item.description}</p>
                <div className="icons-main">
                  <div className="date-icon">
                    <IoCalendarOutline size={20} />
                    <time dateTime="">{item.date}</time>
                  </div>
                  <div className="date-icon">
                    <MdOutlinePersonOutline size={22} />
                    <span>{item.author}</span>
                  </div>
                </div>
              </div>
            </Link>
          ) : (
            // Cards normais
            <Link href={item.link} key={item.id} className="news-card">
              <div className="card-wrapper">
                <Image
                  className="card-image"
                  src={item.image}
                  alt="Anime Banner"
                  width={500}
                  height={268}
                />
                <div className="card-label">
                  <span>{item.postLabel}</span>
                </div>
              </div>

              <h2 className="card-title">{item.title}</h2>
              <div className="card-icons">
                <div className="date-icon">
                  <IoCalendarOutline size={20} />
                  <time dateTime="">{item.date}</time>
                </div>
                <div className="date-icon">
                  <MdOutlinePersonOutline size={22} />
                  <span>{item.author}</span>
                </div>
              </div>
            </Link>
          )
        )
        .reverse()}
    </section>
  );
}

export { NewsCard };
