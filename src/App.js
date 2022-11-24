import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import Error from "./pages/Error.jsx";
import Blogpost from "./pages/Blogpost.jsx";
import ScrollToTop from "./components/ScrollToTop.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<Blogpost />} />
            <Route path="*" element={<Error />} />
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
