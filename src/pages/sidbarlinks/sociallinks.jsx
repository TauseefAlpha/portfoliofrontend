import React from 'react'
import { FiGithub } from "react-icons/fi"
import { FaLinkedin } from "react-icons/fa"
import { MdOutlineMailLock } from "react-icons/md"
import { BsFillFilePersonFill } from "react-icons/bs"

import "./socialstyle.scss"


const data = [
    { id: 1, name: "Linkdin", icon: <FaLinkedin size={30} />, href: "https://www.linkedin.com/in/tauseef-ahmad-a2107523b/" },
    { id: 2, name: "Github", icon: <FiGithub size={30} />, href: "https://github.com/TauseefAlpha" },
    { id: 3, name: "Mail", icon: <MdOutlineMailLock size={30} />, href: "mailto:name@email.com" },
    { id: 4, name: "Profile Cv", icon: <BsFillFilePersonFill size={30} />, href: "./MernstackResume1.pdf", download: true }
]


const Sociallinks = () => {
    return (
        <div className='d-flex' style={{ position: "fixed", top: "35%", right: '0' ,zIndex:'1000'}}>
            <ul className='my-5' style={{ textDecoration: 'none' }}>
                {data.map(({ id, name, icon, href, download }, ind) => (
                    <li className='py-2 px-4 list-unstyled my-1  listdata' key={ind}>
                        <a href={href} className="anchoritem text-light text-decoration-none " download={download} target='blank' rel='noreferrer'>{icon} {name}</a>
                    </li>
                ))

                }

            </ul>

        </div>
    )
}

export default Sociallinks
