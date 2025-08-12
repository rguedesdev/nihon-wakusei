// Style Sheet CSS
import "./Pagination.css";

// Icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Pagination() {
  return (
    <div className="pagination">
      <button className="pagination-btn">
        <IoIosArrowBack size={30} />
      </button>
      <button className="pagination-btn">1</button>
      <button className="pagination-btn">2</button>
      <button className="pagination-btn">3</button>
      <button className="pagination-btn">4</button>
      <button className="pagination-btn">5</button>
      <button className="pagination-btn">6</button>
      <button className="pagination-btn">7</button>
      <button className="pagination-btn">8</button>
      <button className="pagination-btn">9</button>
      <button className="pagination-btn">10</button>
      <button className="pagination-btn">11</button>
      <button className="pagination-btn">12</button>
      <button className="pagination-btn">13</button>
      <button className="pagination-btn">14</button>
      <button className="pagination-btn">15</button>
      <button className="pagination-btn">
        <IoIosArrowForward size={30} />
      </button>
    </div>
  );
}

export { Pagination };
