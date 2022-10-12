import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import "./styles/_styles.scss";

// Switch => Router를 찾는 역할 ( URL을 찾는 역할 ) Route를 찾으면 컴포넌트를 렌더링 해준다.
// v6에서는 Switch -> Routes로 변경되었다.
// v6에서는 component={Home}으로 쓰던게 element={<Home />}로 변경되었습니다.
// Routes를 사용하는 이유는 한번에 하나의 Route만 렌더링 하기 위해서이다.
function App() {
  return (
  <Router>
    <Routes>
      <Route path="/movie/:id" element={<Detail />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
  );
}


export default App;
