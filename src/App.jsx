import "./App.css";
import Heropage from "./pages/herobanner/heropage";

import Navbar from "./components/navbar/navbar";
import Maincontent from "./pages/maincontent/maincontent";
import Pojectdetail from "./pages/projects/pojectdetail";
import ProjectCounter from "./pages/Counter/counterPage";
import Timequote from "./pages/quote/timequote";
import Contactcomp from "./pages/contactme/Contactcomp";
import Fottercomp from "./components/fotter/fottercomp";
import Sociallinks from "./pages/sidbarlinks/sociallinks";
import { TweenMax, gsap, Power3 } from "gsap";
import Contact from "./pages/contactdetail/contact";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  let t1 = new gsap.timeline();
  let ease = Power3.easeOut;

  return (
    <>
      <Navbar timeline={t1} ease={ease} />
      <Heropage timeline={t1} ease={ease} />
      <Maincontent />
      <Pojectdetail timeline={t1} ease={ease} />
      <ProjectCounter />
      <Timequote />
      <Contactcomp />
      <Contact />
      <Fottercomp />
      <Sociallinks />
    </>
  );
}

export default App;
