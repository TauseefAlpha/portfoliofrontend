import React from 'react'
import "./contactstyle.scss"
import Btn from '../../components/button/btn'

const Contactcomp = () => {
    return (
        <div className=' contactwrapper'>
            <div className="container parent">
                <div className="circle"></div>
                <div className="row">
                    <div className="col-md-10 col-lg-12 info pt-5 pb-5  ">
                        <div className='daline'></div>
                        <h1 className='title'>Lets Work Together</h1>
                        <p className='text-light'> I'm passionate about creating great user experiences and have a strong understanding of usability and accessibility standards.<br /> it's also changing the way we learn and what we learn</p>
                        <Btn name={'Contact Me'} link={"#contactdetail"} />
                    </div>
                </div>
                <div className="hollowcircle"></div>
            </div>
        </div>
    )
}

export default Contactcomp
