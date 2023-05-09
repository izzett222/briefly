import React from "react";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Source from "./pages/sources/Source";
import SourceArticle from "./pages/sources/SourceArticle"
import 'react-loading-skeleton/dist/skeleton.css'
import "@reach/dialog/styles.css";
import Search from "./pages/Search";
import SearchedArticle from "./pages/SearchedArticle";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/article/:articleId" element={<Article />} />
          <Route path="/source/article/:articleId" element={<SourceArticle />} />
          <Route path="/search" >
            <Route index element={<Search />} />
            <Route path=":searchQuery/article/:articleId" element={<SearchedArticle />} />
          </Route>

          <Route path="/source/:sourceId">
            <Route index element={<Source />} />
            <Route path="article/:articleId" element={<SourceArticle />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
        
      </Routes>
    </Router>
  </Provider>
  );
}

export default App;
