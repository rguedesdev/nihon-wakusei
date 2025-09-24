"use client";

import { useState } from "react";
import Image from "next/image";
import "./comments.css";
import { PiThumbsDown, PiShareFat, PiThumbsUp } from "react-icons/pi";
import { BsReply } from "react-icons/bs";
import NW from "../../public/logo.jpg";
import api from "@/utils/api";

function Comments({ postComments, id }) {
  const [loading, setLoading] = useState(false);
  const [commentText, setCommentText] = useState("");

  // <-- aqui: sem parâmetro, usamos o `commentText` do state
  async function comment() {
    if (!commentText.trim()) {
      alert("Digite algo antes de comentar!");
      return;
    }

    setLoading(true);

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4Y2JjMzEzMzQ2MjE0YmJlZmQ3NTc1YSIsIm5hbWUiOiJNYXJpIiwiaWF0IjoxNzU4MjM4MDU1fQ.Q1YThpS_UZtRlIcuGTGbMX5Cy3W4CV2aOkndKQ1HUag";

    try {
      const response = await api.post(
        `/posts/create-comment/${id}`,
        { commentText }, // body com o texto
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCommentText(""); // limpa o textarea

      // opcional: atualizar lista localmente para mostrar o novo comentário
    } catch (err) {
      console.error("Erro ao enviar comentário:", err);
      alert("Erro ao enviar comentário!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section>
      <div className="comments-container">
        <h2 className="comment-title">Comentários ({postComments.length})</h2>
        <textarea
          className="comment-textarea"
          placeholder="Deixe seu comentário aqui..."
          rows={4}
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        ></textarea>
        <button
          onClick={comment} // chama sem argumentos
          className={`comment-submit-button ${loading ? "loading" : ""}`}
          disabled={loading}
        >
          {loading ? "" : "Comentar"}
        </button>
      </div>

      {postComments.map((comment) => (
        <div key={comment._id} className="comments-list">
          <div className="comment-item">
            <Image
              src={NW}
              className="comment-avatar"
              alt="User Profile Picture"
              width={0}
              height={0}
              priority
            />

            <div className="comment-content">
              <h3 className="comment-author">{comment.userCommentID?.name}</h3>
              <p className="comment-text">{comment.commentText}</p>
              <div className="comment-actions">
                <PiThumbsUp className="comment-btn-action" size={20} />
                <PiThumbsDown className="comment-btn-action" size={20} />
                <div className="comment-btn-action">
                  <BsReply size={22} /> <span>Responder</span>
                </div>
                <div className="comment-btn-action">
                  <PiShareFat size={20} /> <span>Compartilhar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export { Comments };
