import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react';
import { FaShoppingBasket } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { Badge } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../pages/basketSlice';






function Header() {

    const [theme, setTheme] = useState(false);
    const navigate = useNavigate();
    const { products } = useSelector((store) => store.basket);
    const dispatch = useDispatch();

    const changeTheme = () => {
        const root = document.getElementById("root")

        if (theme) {
            root.style.backgroundColor = "gray";
            root.style.color = "#fff";

        }
        else {
            root.style.backgroundColor = "#fff";
            root.style.color = "black";
        }
        setTheme(!theme);
    }




    return (
        <div> <div className='header' >


            <div>  <Link className='link' to="/">MAIN</Link>
                <Link className='link' to="/about">ABOUT</Link>
                <Link className='link' to="/products">OUR PRODUCTS</Link>
                <Link className='link' to="/contact">CONTACTS</Link>  </div>

            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}> {theme ? <FaMoon className='icon' onClick={changeTheme} /> :
                <CiLight className='icon' onClick={changeTheme} />
            }
                <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="error">
                    <FaShoppingBasket style={{ marginRight: "8px" }} className='icon' />
                </Badge>
                <img onClick={() => navigate("/home")} src="./images/Mylogo.jpg" className='logo' />

            </div>





        </div>

        </div>

    )
}

export default Header
