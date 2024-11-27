import React, { Suspense } from "react";

const ProductList = React.lazy(() => import("./components/ProductList"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductList />
      </Suspense>
    </div>
  );
};

export default App;
