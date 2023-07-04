import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Residencies from "./components/Residencies/Residencies";
import "./index.css";
function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Residencies/>
    </div>
  );
}

export default App;
