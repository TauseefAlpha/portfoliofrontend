import React, { useEffect, useRef, useState } from 'react'
import detailcomp from './../../components/detail/detailcomp';
import Detailcomp from './../../components/detail/detailcomp';
import { projects } from "../../project api/Projectdata"
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"

import "./projectstyle.scss"
gsap.registerPlugin(ScrollTrigger)

const Pojectdetail = ({ timeline, ease }) => {



    return (
        <>

            {

                projects.map((val, ind) => (

                    <div className="wrapper d-flex align-items-center pb-5" id='projecstid' key={val.id} >
                        <div className="container">
                            <Detailcomp ScrollTrigger={ScrollTrigger} timeline={timeline} ease={ease} title={val?.title} image={val?.image} detail={val?.detail} demo={val?.demo} code={val?.code} ind={ind} />
                        </div>
                    </div >
                )
                )

            }
        </>
    )
}

export default Pojectdetail
