import React from 'react'
import "./quotestyle.scss"
import img1 from "../../assets/port.png"

const Timequote = () => {
    return (
        <div className='wrapperquote d-flex align-items-center'>
            <div className="container">
                <div className="row d-flex  justify-content-around flex-wrap  ">
                    <div className="col-md-6 pb-md-3  imgcontainer text-md-center  ">
                        <div className='imgwrap'></div>
                        <img src={img1} style={{ borderRadius: '40px 40px 0px 0px', }} className='image' />
                    </div>
                    <div className="col-md-6  d-flex align-items-center   ">
                        <div className="wrap">
                            <h4 className='text-light '>Being the master of your time means getting more done, staying energized, and doing more things you enjoy.</h4>
                            <h3 className='name'>Mari Dev</h3>
                            <h5 className='designation' >Mern Developer</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timequote
