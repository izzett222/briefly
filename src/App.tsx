import "./index.css";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Source from "./pages/Source";
import 'react-loading-skeleton/dist/skeleton.css'
import "@reach/dialog/styles.css";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
          <Route path="/search" element={<Search />} />
          <Route path="/source/:sourceId" element={<Source />} />
          <Route path="*" element={<NotFound />} />
        </Route>        
      </Routes>
    </Router>
  </Provider>
  );
}

export default App;
