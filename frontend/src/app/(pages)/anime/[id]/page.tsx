// Imports Principais
import Image from "next/image";
import Link from "next/link";

// Axios
import api from "@/utils/api";

// Style Sheet CSS
import "./anime-id.css";

// Components
import { Comments } from "@/components/Comments";

// Icosn
import { IoCalendarOutline, IoLogoInstagram } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { LiaFacebookSquare } from "react-icons/lia";
import { TbBrandBluesky } from "react-icons/tb";
import { RiYoutubeLine } from "react-icons/ri";

// Imagem estática (continua funcionando em Server Component)
import Logo from "../../../../../public/logo.jpg";

async function AnimePageByID({ params }: { params: { id: string } }) {
  let post;

  try {
    const response = await api.get(`/posts/${params.id}`);
    post = response.data;
  } catch (err) {
    console.error("Erro ao buscar post:", err);
    return <div>Post não encontrado</div>;
  }

  const date = new Date(post.createdAt);
  const dataFormatada = `${String(date.getDate()).padStart(2, "0")}.${String(
    date.getMonth() + 1
  ).padStart(2, "0")}.${date.getFullYear()} às ${String(
    date.getHours()
  ).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")} hs`;

  return (
    <main className="main-animeid">
      <div className="animeid-label">
        <span>{post.postLabel?.toUpperCase()}</span>
      </div>

      <h1 className="animeid-title">{post.postTitle}</h1>

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
            <span>{post.authorName}</span>
            <div className="tooltip">
              <p>{post.authorDescription}</p>
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
            <span className="animeid-date-text">{dataFormatada}</span>
          </div>
        </div>
      </div>

      {post?.mainImagePost && (
        <Image
          src={`http://localhost:5000/public/images/posts/${post.mainImagePost}`}
          alt="Post Image"
          className="animeid-post-image"
          width={0}
          height={0}
          unoptimized
        />
      )}

      <p className="animeid-post-content">{post.newsText}</p>
      <hr className="hr-faded" />

      <Comments postComments={post.postComments || []} id={params.id} />
    </main>
  );
}

export default AnimePageByID;
