import React, { useLayoutEffect, useRef, useState, useEffect } from 'react'
import "./navstyle.scss"
import { FaLinkedin } from "react-icons/fa"
import Btn from '../button/btn'
import logo from "../../assets/logodev.png"




const Navbar = ({ timeline, ease }) => {

  const [navbar, setnavbar] = useState(false)
  const [showicon, setshowicon] = useState(false)


  let logoimg = useRef(null)

  useEffect(() => {
    //  timeline.fromTo(logoimg, 1, { opacity: 0.3, x: '100' },{ opacity:1, x: '20'});
    timeline.from(logoimg, 0.8, { opacity: 0, y: '100' })

  }, [])




  return (
    <>
      <nav className={`navbar navbar-expand-sm   navbar-dark bg-dark sticky-top navbar-custom`} >
        <div className={`container-fluid navbar-custom`}>
          <a to="/" className="navbar-brand ">
            <img
              ref={el => logoimg = el}
              src={logo}
              color='rgb(50,205,50)'
              alt="logo"
              height={60}
            />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" style={{ justifyContent: "space-around" }} id="mynavbar">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link fs-5" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="#projecstid">PortFolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 " href="#contactdetail">Contact</a>
              </li>
            </ul>

          </div>
          <div className="float-rightp pe-5">
            <span className='iconeffect'><FaLinkedin color='wheat' size={"2rem"} /></span>
            <Btn name={"Contact Me"} link={'#contactdetail'} />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
