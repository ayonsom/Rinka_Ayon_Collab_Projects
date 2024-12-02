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
        <div style={{display : "grid", gridTemplateColumns : "repeat(3, 1fr)", gap:"50px 50px" }}>
            {data.map((el)=>(
                <div key={el.id} style={{padding: "15px" ,width : "300px", height : "450px", border:"1px solid grey", overflowY:"scroll"}}>
                    <img style={{width : "150px"}} src={el.image} alt="ProductImage" />
                    <h3>{el.title}</h3>
                    <p style={{}}>{el.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Product
