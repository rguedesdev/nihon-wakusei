"use client";

// Imports Principais
import { useState } from "react";

// Style Sheet CSS
import "./Pagination.css";

// Icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface PaginationProps {
  totalItems?: number;
  itemsPerPage?: number;
  maxButtons?: number; // número fixo de botões visíveis
  onPageChange?: (page: number) => void;
}

function Pagination({
  totalItems = 30,
  // itemsPerPage = 3,
  // maxButtons = 7,
  onPageChange,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 3; // fixo
  const maxButtons = 7; // fixo

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange && onPageChange(page);
  };

  const generateButtons = () => {
    const buttons: (number | "dots")[] = [];

    // Se totalPages menor ou igual ao maxButtons, mostrar todos
    if (totalPages <= maxButtons) {
      for (let i = 1; i <= totalPages; i++) buttons.push(i);
    } else {
      const middle = Math.floor(maxButtons / 2);
      let start = Math.max(currentPage - middle, 1);
      let end = start + maxButtons - 1;

      if (end > totalPages) {
        end = totalPages;
        start = totalPages - maxButtons + 1;
      }

      for (let i = start; i <= end; i++) {
        buttons.push(i);
      }

      // Substituir com "dots" se necessário
      if (buttons[0] > 1) buttons[0] = 1;
      if (buttons[1] > 2) buttons[1] = "dots";
      if (buttons[buttons.length - 2] < totalPages - 1)
        buttons[buttons.length - 2] = "dots";
      if (buttons[buttons.length - 1] < totalPages)
        buttons[buttons.length - 1] = totalPages;
    }

    return buttons;
  };

  const visibleButtons = generateButtons();

  return (
    <div className="pagination">
      <button
        className="pagination-btn"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <IoIosArrowBack size={24} />
      </button>

      {visibleButtons.map((item, idx) =>
        item === "dots" ? (
          <button key={idx} className="pagination-btn dots-btn" disabled>
            ...
          </button>
        ) : (
          <button
            key={idx}
            className={`pagination-btn ${currentPage === item ? "active" : ""}`}
            onClick={() => goToPage(item)}
          >
            {item}
          </button>
        )
      )}

      <button
        className="pagination-btn"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <IoIosArrowForward size={24} />
      </button>
    </div>
  );
}

export { Pagination };
