import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import ProductCard from "./ProductCard";
import FilterSort from "./FilterSort";
import Loader from "./Loader";
import "./styles/ProductList.css";
import "./styles/FilterSort.css";
import "./styles/Loader.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);

  const handleFilterSort = (filterData) => {
    setFilteredProducts(filterData);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <Loader />;
  }

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="container my-4">
      <FilterSort products={products} onFilterSort={handleFilterSort} />
      <div className="row g-4">
        {currentProducts.map((product) => (
          <div className="col-6 col-md-4 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="pagination-container">
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <button
            key={pageNumber}
            className="pagination-button"
            onClick={() => paginate(pageNumber + 1)}
          >
            {pageNumber + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
