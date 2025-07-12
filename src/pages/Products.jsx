import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from './ProductSlice';
import Storage from './Storage'



function Products() {

    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.product)

    const [search, setSearch] = useState('')

    useEffect(() => {
        dispatch(getAllProducts())
    }, []);

    return (
        <div>
            <input type='text' style={{ width: "300px", margin: "10px 5px", borderRadius: "5px", background: "none", color: "white" }} placeholder='search here...' value={search} onChange={(e) => setSearch(e.target.value)} />

            <div className='flex-row' style={{ flexWrap: "wrap", marginTop: "25px" }}>
                {
                    products && products.filter((product) => {
                        return search.toLowerCase() === '' ? product : product.title.toLowerCase().includes(search);

                    }).map((product) => (<Storage key={product.id} got={product} />
                    ))
                }



            </div>
        </div>
    );
}


export default Products
