import ToolBar from "./ToolBar";
import "./styles.css";

import CurrentWeather from "./CurrentWeather";
import "./Footer";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="d-flex align-items-stretch height container">
        <ToolBar />
        <CurrentWeather />

      </div>
      <Footer />
    </div>
  );
}
