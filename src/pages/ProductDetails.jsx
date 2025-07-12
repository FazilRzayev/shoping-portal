import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from './ProductSlice'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket, calculateBasket } from './basketSlice';

function ProductDetails() {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product);
    const { price, image, title, description } = selectedProduct;
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();

    const plusBasket = () => {

        setCount(count + 1);
    }
    const minusBasket = () => {
        setCount(count - 1)
    }
    const addBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count
        }
        dispatch(addToBasket(payload));
        dispatch(calculateBasket());
    }

    useEffect(() => {
        getProductById();
    }, [])



    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product));
            }
        })
    }


    return (
        <div className='card-details'>
            <div style={{ marginRight: '40px' }}>   <img src={image} width={300} height={450} alt="" /></div>
            <div>
                <div style={{ backgroundColor: "lightgray", padding: '10px', alignItems: 'center' }}>   <h2>{title}</h2>
                    <p style={{ fontSize: '20px' }}>{description}</p>
                    <h1 style={{ fontSize: '50px', fontFamily: 'arial', fontWeight: 'bold', color: 'white' }}>{price}₼</h1></div>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}> <CiCirclePlus onClick={plusBasket} className='plus' /> <span style={{ fontSize: '40px', color: 'white' }} > {count}</span>   <CiCircleMinus onClick={minusBasket} className="minus" />
                    <button
                        onClick={addBasket}
                        className='button' style={{ marginLeft: '30px' }}>Add to Basket</button> </div>


            </div>
        </div>
    )
}

export default ProductDetails
