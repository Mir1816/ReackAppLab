import Features from "./components/features/Features";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Pricing from "./components/pricing/Pricing";
import Testimonial from "./components/testimonial/Testimonial";

import "./global.scss"


function App() {
  return (
    <div className="app">
      <Header/>
      <Home/>
      <div className="container">
        <Features/>
        <Pricing/>
        <Testimonial/>
      </div>
    </div>
  );
}

export default App;
