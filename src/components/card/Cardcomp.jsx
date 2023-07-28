import React from 'react'
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import "./cardstyle.scss"


const Cardcomp = ({title}) => {
    return (
       
        <div className="card  m-3 pt-3 py-2 " style={{ maxWidth: '26rem', borderRadius: "24px", backgroundColor: "#2d2e32", boxShadow: "0px 3px 5px black,0px 4px 16px black" }}>
            <div className='d-flex justify-content-center '><div className="cardcircle d-flex justify-content-center align-items-center"><div className='content'></div><ViewInArIcon color={'success'} /></div></div>
            
            <div className="card-body">
                <h2 className='text-center text-white '>{title}</h2>
                <h6 className='text-center text-white'>The technological revolution is changing aspect</h6>
            </div>
            </div>

    )
}

export default Cardcomp
