import { Route, Routes} from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import AboutPage from './pages/AboutPage';
import ArticleLists from './pages/ArticleLists';
import ArticlePage from './pages/ArticlePage';
import Error404 from './pages/Error404';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="page-body">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />}/>
        <Route exact path="/articles-list" element={<ArticleLists />} />
        <Route exact path="/article/:name" element={<ArticlePage />}/>
        <Route  path="*" element={<Error404 />} />
      </Routes>
     </div>
    </div>
  );
}

export default App;
