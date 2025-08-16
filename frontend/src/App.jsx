import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import CustomToaster from "./components/CustomToaster";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import Restaurants from "./pages/Restaurants";
import Dishes from "./pages/Dishes";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import RestaurantDetail from "./pages/RestaurantDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomToaster />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
