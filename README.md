Product Listing Application
Overview
This is a simple product listing application built using React. It allows users to view a list of products, filter them by search terms, and sort them by price (ascending or descending). The application supports pagination and lazy loading for better performance when displaying large datasets.

Features
Product Listing: Displays products with details such as title, price, and image.
Pagination: Divides the product list into pages with a specified number of products per page.
Search: Filters products based on a search term that matches the product title.
Sorting: Sorts products by price in ascending or descending order.
Lazy Loading: Loads product images lazily to improve performance.
Technologies Used
React: JavaScript library for building user interfaces.
React Hooks (useState, useEffect): For managing state and side effects in functional components.
Bootstrap: For responsive design and basic styling.
CSS: Custom styles for specific components.
API Integration: Fetch products from a backend (using a placeholder API for now).
Project Structure
The project is organized into multiple components:

App.js: The main entry point that renders the ProductList component.
ProductList.js: Manages the state of products, handles filtering, sorting, pagination, and rendering the ProductCard components.
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
The product list is paginated. You can navigate through pages by clicking on the page numbers.

Lazy Loading
The images of products are loaded lazily to improve the initial load time of the page. This means that images are only loaded when they come into the viewport.

Component Breakdown
App.js
This is the main component that renders the ProductList component inside a container. It serves as the entry point for the app.

ProductList.js
This component manages the list of products, handles filtering, sorting, and pagination:

State: Manages the products, filtered products, loading state, and pagination.
Effect: Fetches products using the useEffect hook when the component is mounted.
Pagination: Computes the products to display based on the current page and the number of products per page.
ProductCard.js
This component is responsible for rendering an individual product. It displays the product image, title, price, and a button to add the product to the cart.

FilterSort.js
This component provides the UI for filtering and sorting the products. It includes:

Search bar: For searching products by title.
Sort dropdown: For sorting products by price.
Apply button: To apply the selected filters and sorting.
Loader.js
A simple component that displays a loading spinner when the products are being fetched.

Future Improvements
Backend Integration: Currently, the product data is fetched from a static service, but in the future, this can be integrated with a real backend service.
Cart Functionality: Implement functionality to add products to a shopping cart.
Responsive Design: Further improve mobile responsiveness for a better user experience on all devices.
Advanced Filtering: Add more filter options (e.g., by category, rating)
