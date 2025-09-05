// Style Sheet CSS
import "./comments.css";

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
        <button className="comment-submit-button">Enviar</button>
      </div>
    </section>
  );
}
export { Comments };
