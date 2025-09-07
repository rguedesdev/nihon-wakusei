// Imports Principais
import Image from "next/image";

// Style Sheet CSS
import "./comments.css";

// Icons
import { BiLike, BiDislike } from "react-icons/bi";
import { PiThumbsUp } from "react-icons/pi";
import { PiThumbsDown } from "react-icons/pi";

import { BsReply } from "react-icons/bs";
import { PiShareFat } from "react-icons/pi";

// Images
import NW from "../../public/logo.jpg";

function Comments() {
  return (
    <section>
      <div className="comments-container">
        <h2 className="comment-title">Comentários (3)</h2>
        <textarea
          className="comment-textarea"
          placeholder="Deixe seu comentário aqui..."
          rows={4}
        ></textarea>
        <button className="comment-submit-button">Comentar</button>
        <div className="comments-list">
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
              <h3 className="comment-author">Kon Sama ZS</h3>
              <p className="comment-text">Ótimo artigo! Muito informativo.</p>
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
              <h3 className="comment-author">Rika Get Set</h3>
              <p className="comment-text">
                Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
                Cicero, written in 45 BC. This book is a treatise on the theory
                of ethics, very popular during the Renaissance. The first line
                of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a
                line in section 1.10.32.
              </p>
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
      </div>
    </section>
  );
}
export { Comments };
