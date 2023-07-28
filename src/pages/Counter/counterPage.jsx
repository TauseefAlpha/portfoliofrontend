import React, { useEffect, useRef, useState } from 'react'
import "./counterstyle.scss"
import CountUp from "react-countup"
import ScrollTrigge from 'react-scroll-trigger'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const ProjectCounter = () => {
    const [counterOn, setCounterOn] = useState(false)
    const circleone = useRef(null)

    useEffect(() => {


        const el = circleone.current

        console.log("circleone", el)
        gsap.from(el, {
            opacity: 1,
            rotation: -90,
            duration: 1.5,
        }

        )

    }, [])
    return (
        <ScrollTrigge onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className='wrappercount d-flex align-items-center'>
                <div className="countercircle" ref={circleone}></div>
                <div className="container" style={{ zIndex: 1000 }}>
                    <div className="row px-5 ">
                        <div className="col-md-3 px-0 experiencecount1">
                            <div className='countdiv'>
                                <h2 className='text-center counststyle' >{counterOn && <CountUp start={0} duration={5} end={30} />}</h2>
                                <div >
                                    <h5 className='text-center text-white'>Projects</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 px-0">
                            <div className='countdiv'>
                                <h2 className=' text-center counststyle'>{counterOn && <CountUp start={0} duration={6} end={20} />}</h2>
                                <div className="card-body">
                                    <h5 className='text-center text-white'>Happy Client</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 px-0 ">
                            <div className='countdiv'>
                                <h2 className="text-center counststyle">{counterOn && <CountUp start={0} duration={5} end={10} />}</h2>
                                <div className="card-body">
                                    <h5 className='text-center text-white'>Award Winning</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 px-0 experiencecount" >
                            {/* style={{ padding: "5rem 0rem", backgroundColor: "black", borderRadius: '0px 50px 50px 0px' }} */}
                            <div className='countdiv'>
                                <h2 className="text-center counststyle">{counterOn && <CountUp start={0} duration={8} end={1} />}</h2>
                                <div className="card-body">
                                    <h5 className='text-center text-white'>Year of experience</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottomcircle"></div>
            </div>
        </ScrollTrigge>
    )
}
export default ProjectCounter
