import React, { useState } from "react";

const FilterSort = ({ products, onFilterSort }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("");

  const handleFilterSort = () => {
    let filtered = [...products];

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortType === "price-asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortType === "price-desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    onFilterSort(filtered);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search products..."
        className="form-control mb-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        className="form-select"
        value={sortType}
        onChange={(e) => setSortType(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
      <button className="btn btn-secondary mt-2" onClick={handleFilterSort}>
        Apply
      </button>
    </div>
  );
};

export default FilterSort;
