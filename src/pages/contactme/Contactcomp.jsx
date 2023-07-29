import React from 'react'
import "./contactstyle.scss"
import Btn from '../../components/button/btn'

const Contactcomp = () => {
    return (
        <div className=' contactwrapper px-2 ' styl>
            <div className="container parent ">
                {/* <div className="circle"></div> */}
                <div className="row">
                    <div className="col-md-10 info pt-5 pb-5 m-auto ">
                        <div className='daline'></div>
                        <h1 className='title'>Lets Work Together</h1>
                        <p className='text-light'> I'm passionate about creating great user experiences and have a strong understanding of usability and accessibility standards</p>
                        <Btn name={'Contact Me'} link={"#contactdetail"} />
                    </div>

                </div>
                {/* <div className="hollowcircle"></div> */}
            </div>
        </div>
    )
}

export default Contactcomp
