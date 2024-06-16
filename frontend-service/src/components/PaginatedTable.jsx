import React, { useEffect, useState } from "react";
import Table from "./table";
import { Pagination } from "./pagination";

const PaginatedTable = ({ data, itemsPerPage, headers }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [totalPages, setTotalPages] = useState(0);

  const handleNext = () => {
    if (totalPages > currentPage) setCurrentPage((current) => current + 1);
  };
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((current) => current - 1);
  };

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / itemsPerPage));
  }, [data]);

  return (
    <div className="w-full h-full">
      <Table
        data={data}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        headers={headers}
        totalPages={totalPages}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  );
};

export default PaginatedTable;
