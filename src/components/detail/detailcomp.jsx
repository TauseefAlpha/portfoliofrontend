import React, { useEffect, useRef } from 'react'
import { gsap, Power2 } from 'gsap'
import "./detailstyle.scss"


const Detailcomp = ({ timeline, ease, title, image, detail, demo, code, ind, ScrollTrigger }) => {
    const heroimg = useRef(null)

    useEffect(() => {
        const el = heroimg.current

        gsap.from(el, {
            opacity: 0,
            y: 50,
            scale: 0.8,
            rotation: 180,
            duration: 1,
            stagger: 0.2,
            ease: 'elastic.out(1.5, 0.6)',
            scrollTrigger: {
                trigger: el,
                start: "top 80%", // Animation starts when the element is 80% into view
                end: "center center",
                toggleActions: "play none none reverse",
            }
        })

    }, [])

    return (
        // d-flex justify-content-between
        <div className={ind % 2 === 0 ? "row " : "row d-flex flex-row-reverse "}>
            <div className={ind % 2 === 0 ? "col-md-6" : "col-md-6 d-flex justify-content-end justify-content-md-center  align-items-end detail"}>
                <div>
                    <p className='intro '>--Projects</p>
                    <h1 className='text-light'>{title}</h1>
                    <p className='content text-light '>{detail}</p>
                    <a className='demo' href={demo} target='_blank' style={{ fontSize: "18px", textDecoration: "none" }} >DEMO</a>
                    <a className='demo' href={code} target='_blank' style={{ fontSize: "18px", textDecoration: "none", background: 'green' }} >CODE</a>
                </div>

            </div>
            <div className="col-md-6 p-md-2 ">
                <div className='wrap'>
                    {/* <div className='imagewrap'> <img src='' alt=''/></div> */}
                    {/* ref={el => imagerorate = el}  */}
                    <img className='images' src={image} ref={heroimg} />
                </div>
            </div>
        </div>
    )
}

export default Detailcomp
