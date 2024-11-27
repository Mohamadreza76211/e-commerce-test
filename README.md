Product Listing Application
Overview
This is a simple Product Listing Application built with React. It allows users to:

View a list of products
Filter products by search terms
Sort products by price (ascending or descending)
Navigate through pages using pagination
Enjoy improved performance with lazy loading for images, especially with large datasets
Features
Product Listing: Displays products with details such as title, price, and image.
Pagination: Divides the product list into pages with a specified number of products per page.
Search: Filters products based on a search term that matches the product title.
Sorting: Sorts products by price in ascending or descending order.
Lazy Loading: Loads product images lazily to improve performance and reduce initial load time.
Technologies Used
React: JavaScript library for building user interfaces.
React Hooks (useState, useEffect): For managing state and side effects in functional components.
Bootstrap: For responsive design and basic styling.
CSS: Custom styles for specific components.
API Integration: Fetch products from a backend (using a placeholder API for now).
Project Structure
The project is organized into multiple components:

App.js: The main entry point that renders the ProductList component.
ProductList.js: Manages the state of products, handles filtering, sorting, pagination, and rendering ProductCard components.
ProductCard.js: Displays individual product information, including image, title, and price.
FilterSort.js: Provides a search bar and sorting options to filter and sort the products.
Loader.js: A loading indicator displayed while data is being fetched.
Installation
To run the project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/product-listing.git
cd product-listing
Install dependencies:

bash
Copy code
npm install
Start the application:

bash
Copy code
npm start
This will start the development server, and you can view the app at http://localhost:3000.

Usage
Filtering and Sorting
Search: Enter a term in the search bar to filter products by title.
Sorting: Choose "Price: Low to High" or "Price: High to Low" from the dropdown to sort products by their price.
Apply Filter: Click the "Apply" button to apply the search and sorting filters.
Pagination
The product list is paginated. Navigate through pages by clicking on the page numbers.
Lazy Loading
The product images are loaded lazily to improve the initial load time. Images are only loaded when they come into the viewport.
Component Breakdown
App.js
This is the main component that renders the ProductList component inside a container. It serves as the entry point for the app.

ProductList.js
Manages the list of products, handles filtering, sorting, and pagination:

State: Manages the products, filtered products, loading state, and pagination.
Effect: Fetches products using the useEffect hook when the component is mounted.
Pagination: Computes the products to display based on the current page and the number of products per page.
ProductCard.js
Responsible for rendering individual products. It displays:

Product image
Title
Price
A button to add the product to the cart
FilterSort.js
Provides the UI for filtering and sorting:

Search Bar: For searching products by title.
Sort Dropdown: For sorting products by price.
Apply Button: To apply the selected filters and sorting.
Loader.js
A simple component that displays a loading spinner while products are being fetched.

Future Improvements
Backend Integration: Currently, product data is fetched from a static service. This could be integrated with a real backend service in the future.
Cart Functionality: Implement functionality to add products to a shopping cart.
Responsive Design: Improve mobile responsiveness for a better user experience across all devices.
Advanced Filtering: Add more filter options (e.g., by category, rating).
This enhanced Product Listing Application showcases the use of React in managing state, handling pagination, and applying lazy loading to improve performance.
