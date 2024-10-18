import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home";
import { ProductDetail } from "./components/product-detail";
import { NotFound } from "./components/not-found";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="pages" element={<h1>Pages</h1>} />
          <Route path="product" element={<h1>Products</h1>} />
          <Route path="blog" element={<h1>Blog</h1>} />
          <Route path="shop" element={<h1>Shop</h1>} />
          <Route path="contact" element={<h1>Contact</h1>} />
          <Route path="product/:id" element={<ProductDetail />}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
