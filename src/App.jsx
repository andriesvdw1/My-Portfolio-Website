import "./App.css";
import Header from "./components/Header/Header";
import InteractiveBarChart from "./components/InteractiveBarChart/InteractiveBarChart";
import TimeZoneContent from "./components/TimeZoneContent/TimeZoneContent";
import Footer from "./components/Footer/Footer";
import MenuHorizontal from "./components/MenuHorizontal/MenuHorizontal";


function App() {
  return (
    <div className="main-container">
      <Header/>
      <MenuHorizontal/>
      <InteractiveBarChart/>
      <TimeZoneContent/>
      <Footer/>
    </div>
  );
}

export default App;
