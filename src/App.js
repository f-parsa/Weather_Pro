import ToolBar from "./ToolBar";
import "./styles.css";
import "./Content";
import Content from "./Content";
import "./Footer";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div class="d-flex align-items-stretch height container">
        <ToolBar />
        <Content />
      </div>
      <Footer />
    </div>
  );
}
