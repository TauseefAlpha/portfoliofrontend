import './App.css'
import Heropage from './pages/herobanner/heropage';

import Navbar from './components/navbar/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.js"
import Maincontent from './pages/maincontent/maincontent';
import Pojectdetail from './pages/projects/pojectdetail';
import ProjectCounter from './pages/Counter/counterPage';
import Timequote from './pages/quote/timequote';
import Contactcomp from './pages/contactme/Contactcomp';
import Fottercomp from './components/fotter/fottercomp';
import Sociallinks from './pages/sidbarlinks/sociallinks';
import { TweenMax, gsap, Power2, Power3 } from "gsap"
import Contact from './pages/contactdetail/contact';

// react js is declerative

// impreative way of appending child in js
// const node = document.createElement('h1')
// const text = document.createTextNode('how are you')
// node.appendChild(text)
// document.getElementById('root').appendChild(node)

function App() {
  let t1 = new gsap.timeline();
  let ease = Power3.easeOut

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
  )
}

export default App
