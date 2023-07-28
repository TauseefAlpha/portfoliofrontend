import React, { useLayoutEffect, useRef } from 'react'
import Btn from '../../components/button/btn'
import "./herostyle.scss"

import tauseefpic from "../../assets/tauseefcrop.png"




const Heropage = ({ timeline, ease }) => {


    let heading = useRef(null);
    let paragraph = useRef(null);
    let btn = useRef(null);

    let image = useRef(null);
    let left1 = useRef(null);
    let left2 = useRef(null);
    let right1 = useRef(null);
    let right2 = useRef(null);

    console.log("image refrence", image)


    useLayoutEffect(() => {
        timeline.from([heading, paragraph.children, btn.children], 1, { opacity: 0, y: "100", skewY: 10, stagger: { amount: .4 } });
        // timeline.fromTo(image, .8, { opacity: 0.8, y: 100}, { opacity: 0.8, y: 0, ease:ease})
        timeline.from([image, left1, left2, right1, right2], 1.3, { y: 1200, ease: ease, opacity: 0 }).from(image, 2, { scale: 1.6, ease: ease })
    }, [])
    return (
        <div className='bg-dark herocontainner'>
            <div className='container '>
                <div className="row" >
                    <div className="col-sm-6">
                        <p className='intro '>--introduction</p>
                        <h1 className='text-light  heading' ref={el => heading = el}>Hello<br></br>
                            I'm Tauseef<br /> Ahmad</h1>
                        <p className='content' ref={el => paragraph = el}>I Am a Mern Stack Developer with a vast array of knowledge in frontend and
                            backend end languages responsive website, built websites using technologie like Reactjs,bookstrap, CSS,Material UI,TailwindCSS, MongoDB</p>

                        <div ref={el => btn = el}>
                            <Btn name={"Contact Me"} />
                        </div>

                    </div>
                    <div ref={el => { image = el }} className="col-sm-6   text-center mx-auto p-2 d-flex justify-content-center align-content-center imagclass">
                        <div className='circle'>
                            <div className="smallcircle left1  " ref={el => left1 = el}><h3>RJ</h3></div>
                            <div className="smallcircle left2  " ref={el => left2 = el}><h3>Js</h3></div>
                            <div className="smallcircle Right1 " ref={el => right1 = el}><h3>Css</h3></div>
                            <div className="smallcircle right3  " ref={el => right2 = el}><h3 >Html</h3></div>
                            <img src={tauseefpic} className='profileimg' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Heropage
