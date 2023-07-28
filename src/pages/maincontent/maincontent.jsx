import React from "react"
import "./maincontent.scss"
import Btn from "../../components/button/btn"
import Cardcomp from "../../components/card/Cardcomp"

const Maincontent = () => {
    return (
        <div className="maincontent d-flex align-items-center">
            <div className="container">
                <div className="row d-flex flex-wrap">
                    <div className="col-md-6  ">
                        <div className="row d-flex  justify-content-between align-items-center cardinfo ">
                            <div className="col-md-6"><Cardcomp title={'webDeveloper'} /> <Cardcomp title={'React js'} /></div>
                            <div className="col-md-6 col-lg-6"><Cardcomp title={'JavaScript'} /><Cardcomp title={'MongoDb'} /></div>
                        </div>

                    </div>

                    <div className="col-md-6 d-flex justify-content-end justify-content-md-center  align-items-end ">
                        <div>
                            <p className='intro '>--introduction</p>
                            <h1 className='text-light'>Why Hire Me For Next <br />Project?</h1>
                            <p className='content text-light '>
                                Developing new and attractive user Interfaces using React.js Building reusable components and front-end libraries for future use.Convert your Figma designs to HTML CSS code optimizing components for maximum performance across a vast array of web-capable devices and browsersStrong proficiency in JavaScript, including DOM manipulation and the JavaScript object model.Thorough understanding of React.js and its core principles
                                Experience with popular React.js workflows (Redux toolkit for global state management).Familiarity with code versioning tools  such as Git</p>
                            <div>
                                <Btn link='./MernstackResume1.pdf' name={"Download Cv"} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Maincontent