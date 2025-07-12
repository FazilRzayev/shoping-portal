import React from 'react'
import './components.css'
import { useNavigate } from "react-router-dom"


function Storage({ got }) {


    const navigate = useNavigate();
    return (
        <div className='card'>

            <img src={got.image} className='images' />
            <div>  <p style={{ textAlign: "center", height: "50px" }}>{got.title}</p>
                <h4 style={{ textAlign: "center", color: 'white' }}>{got.price} ₼</h4>
            </div>
            <div onClick={() => navigate("/product-details/" + got.id)} className='flex-row'><button className="button" >Details</button></div>
        </div>

    )
}

export default Storage
