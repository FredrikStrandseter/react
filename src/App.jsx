import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Content from "./Pages/home";
import Shop from "./Pages/shop";
import Liked from "./Pages/liked";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Content />}></Route>
            <Route path="/liked" element={<Liked />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
