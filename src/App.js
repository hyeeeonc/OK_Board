import { Route, Routes } from "../node_modules/react-router-dom/index";
import PostPage from "./pages/PostPage";
import PostListPage from "./pages/PostListPage";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PostListPage />} />
        <Route path=":postId" element={<PostPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
