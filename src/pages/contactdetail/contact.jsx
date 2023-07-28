import React, { useState } from 'react'
import "./contactstyle.scss"

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');



    const handlesubmit = () => {

    }
    const isFormValid = name.trim().length > 1 && email.trim().length > 1;

    return (
        <div className='contactwrapper' id='contactdetail'>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h2 className='text-light mb-3' style={{ fontSize: "40px", fontFamily: "cursive", fontWeight: 'bold' }}> Contact me Let Talk</h2>
                        <div className='contact'>
                            <form action="https://getform.io/f/982b0458-6143-4b75-b019-15ca6e5ef079" method='POST' className='d-flex flex-column'>
                                <input name="name" placeholder='Enter Your name' value={name} onChange={e => setName(e.target.value)} style={{ padding: "6px 12px", borderRadius: "20px", border: "none", width: "50%", margin: "20px auto" }} />
                                <input name="email" placeholder='Enter Your Email' value={email} onChange={e => setEmail(e.target.value)} style={{ padding: "6px 12px", borderRadius: "20px", border: "none", width: "50%", margin: "20px auto" }} />
                                <textarea name='message' placeholder='Enter your message' value={message} onChange={e => setMessage(e.target.value)} style={{ width: "50%", height: "150px", padding: "12px 20px", borderRadius: "15px", margin: "20px auto" }} />
                                <button className='btn btn-warning tex text-text-decoration-none' type='submit' disabled={!isFormValid} style={{ alignSelf: "center" }}>Let Talk </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
