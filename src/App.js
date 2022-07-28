import { Route, Routes, Link, useLocation } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";
import "./App.css";

function App() {
  const { pathname } = useLocation();
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile">프로필</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">히스토리</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Profile/:username" element={<Profile />} />
        <Route path="/profiles/*" element={<Profiles />} />
        <Route path="/history" element={<HistorySample />} />
        <Route
          path="/*"
          element={<h1>이 페이지는 존재하지 않습니다. - {pathname}</h1>}
        />
      </Routes>
    </div>
  );
}

export default App;
