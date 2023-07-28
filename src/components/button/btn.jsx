import React from 'react'
import './btnstyle.scss'

const Btn = ({ name, link, data }) => {
    console.log("link value", link)
    console.log("link value", data)

    return (
        // <a href='#contactdetail"' className='btncontact'>{name}</a>
        <a className='btncontact' href={link} download={name == "Contact Me" ? false : true}>{name}</a>
    )
}

export default Btn
