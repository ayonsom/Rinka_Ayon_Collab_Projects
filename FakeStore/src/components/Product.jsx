import React, { useState, useEffect } from 'react'


const Product = () => {
    const [data, setData] = useState([]);
    console.log(data);
    
    const fetchProducts = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products")
            const parsedResponse = await response.json()
            // console.log(parsedResponse);
            setData(parsedResponse)
            
        } catch (error) {
            console.error(error);
            
        }
    }
    useEffect(()=>{
        fetchProducts();
    },[])

    return (
        <div className='products-container'>
            {data.map((el)=>(
                <div className='product-card' key={el.id}>
                    <img style={{maxWidth : "250px",maxHeight : "200px"}} src={el.image} alt="ProductImage" />
                    <div >
                        <h3>{el.title}</h3>
                        <p style={{}}>{el.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Product
