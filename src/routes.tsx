import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageDefault from "components/PageDefault";
import Footer from "components/Footer";
import NavMenu from "components/Menu";
import NotFound from "pages/NotFound";
import About from "pages/About";
import Home from "pages/Home";
import Menu from "pages/Menu";
import Dish from "pages/Dish";

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <NavMenu />
        <Routes>
          <Route path="/" element={<PageDefault />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="dish/:id" element={<Dish />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
