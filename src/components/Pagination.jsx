import React from "react";

export default function Pagination({
  totalResults = 0,
  currentPage = 1,
  onPageChange = () => {},
  resultsPerPage = 10,
  maxButtons = 7,
}) {
  const totalPages = Math.max(1, Math.ceil(totalResults / resultsPerPage));

  if (!totalResults || totalPages === 1) return null;

  const handlePage = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange(page);
  };

  const getPageList = () => {
    const pages = [];

    // Always include first and last pages, and a window around current
    const half = Math.floor(maxButtons / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, currentPage + half);

    // Adjust when close to edges
    if (currentPage - start < half) {
      end = Math.min(totalPages, end + (half - (currentPage - start)));
    }
    if (end - currentPage < half) {
      start = Math.max(1, start - (half - (end - currentPage)));
    }

    if (start > 1) pages.push(1);
    if (start > 2) pages.push("start-ellipsis");

    for (let i = start; i <= end; i++) pages.push(i);

    if (end < totalPages - 1) pages.push("end-ellipsis");
    if (end < totalPages) pages.push(totalPages);

    return pages;
  };

  const pages = getPageList();

  return (
    <div style={{ textAlign: "center", marginTop: 24 }}>
      <button
        onClick={() => handlePage(currentPage - 1)}
        disabled={currentPage === 1}
        style={{ marginRight: 8, padding: "6px 10px" }}
      >
        Prev
      </button>

      {pages.map((p, idx) =>
        p === "start-ellipsis" || p === "end-ellipsis" ? (
          <span key={p + idx} style={{ margin: "0 6px" }}>…</span>
        ) : (
          <button
            key={p}
            onClick={() => handlePage(p)}
            aria-current={p === currentPage ? "page" : undefined}
            style={{
              margin: "0 4px",
              padding: "6px 10px",
              background: p === currentPage ? "#e50914" : "transparent",
              color: p === currentPage ? "white" : "inherit",
              border: "1px solid #ddd",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={() => handlePage(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{ marginLeft: 8, padding: "6px 10px" }}
      >
        Next
      </button>
    </div>
  );
}

