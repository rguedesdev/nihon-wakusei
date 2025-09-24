"use client";

// Imports Principais
import Image from "next/image";
import Link from "next/link";

// Style Sheet CSS
import "./NewsCard.css";

// Icons
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";

interface IPost {
  _id: string;
  postLabel: string;
  postCategory?: string;
  postTitle: string;
  newsText: string;
  authorName: string;
  mainImagePost: string;
  createdAt: string;
}

interface INewsCardProps {
  news: IPost[];
}

function NewsCard({ news }: INewsCardProps) {
  return (
    <section>
      {news
        .map((item, index) => {
          const date = new Date(item.createdAt);

          const dia = String(date.getDate()).padStart(2, "0");
          const mes = String(date.getMonth() + 1).padStart(2, "0");
          const ano = date.getFullYear();

          const horas = String(date.getHours()).padStart(2, "0");
          const mins = String(date.getMinutes()).padStart(2, "0");

          const dataFormatada = `${dia}.${mes}.${ano} às ${horas}:${mins} hs`;

          return index === news.length - 1 ? (
            // Card principal
            <Link
              href={`/anime/${item._id}`}
              className="card-news-main"
              key={item._id}
            >
              <div className="banner-wrapper">
                <Image
                  className="banner-image"
                  src={`http://localhost:5000/public/images/posts/${item.mainImagePost}`}
                  alt="Anime Banner"
                  width={500}
                  height={268}
                />
                <div className="banner-label">
                  <span>{item.postLabel.toUpperCase()}</span>
                </div>
              </div>

              <div>
                <h1 className="title-main">{item.postTitle}</h1>
                <p className="text-main">{item.newsText}</p>
                <div className="icons-main">
                  <div className="date-icon">
                    <IoCalendarOutline size={20} />
                    <time dateTime={item.createdAt}>{dataFormatada}</time>
                  </div>
                  <div className="date-icon">
                    <MdOutlinePersonOutline size={22} />
                    <span>{item.authorName}</span>
                  </div>
                </div>
              </div>
            </Link>
          ) : (
            // Cards normais
            <Link
              href={`/anime/${item._id}`}
              key={item._id}
              className="news-card"
            >
              <div className="card-wrapper">
                <Image
                  className="card-image"
                  src={`http://localhost:5000/public/images/posts/${item.mainImagePost}`}
                  alt="Anime Banner"
                  width={500}
                  height={268}
                />
                <div className="card-label">
                  <span>{item.postLabel.toUpperCase()}</span>
                </div>
              </div>

              <h2 className="card-title">{item.postTitle}</h2>
              <div className="card-icons">
                <div className="date-icon">
                  <IoCalendarOutline size={20} />
                  <time dateTime={item.createdAt}>{dataFormatada}</time>
                </div>
                <div className="date-icon">
                  <MdOutlinePersonOutline size={22} />
                  <span>{item.authorName}</span>
                </div>
              </div>
            </Link>
          );
        })
        .reverse()}
    </section>
  );
}

export { NewsCard };
