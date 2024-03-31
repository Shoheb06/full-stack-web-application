// src/components/Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
 <div className="pagination">
    {Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i}
        className={`page-button ${currentPage === i + 1 ? 'active' : ''}`}
        onClick={() => onPageChange(i + 1)}
      >
        {i + 1}
      </button>
    ))}
 </div>
);

export default Pagination;
