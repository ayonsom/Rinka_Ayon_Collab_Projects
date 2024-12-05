import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../AuthContext/AuthContextProvider';
const Product = () => {
    const [data, setData] = useState([]);
    const [cardData, setCardData] = useState(undefined)
    const {isAuth, setIsAuth} = useContext(AuthContext)
    // console.log(cardData);
    const handleDivClick = async (id)=>{
        // console.log("handleDivClick : ", id);
        
        try {
            const parsedCardData = await(await fetch (`https://fakestoreapi.com/products/${id}`)).json();
            setCardData(parsedCardData);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const fetchProducts = async () => {
        try {
            const parsedResponse = await(await fetch("https://fakestoreapi.com/products")).json();
            setData(parsedResponse);
            
        } catch (error) {
            console.error(error);            
        }
    }
    useEffect(()=>{
        fetchProducts();
    },[])

    const handleLogout = () =>{
        if(window.confirm("Are You Sure?")){
        setIsAuth(false)
        }
    }

    return (
        <>
        <button style={{textAlign:"right",color:"red"}} type='submit' onClick={(e)=>handleLogout()}>Logout</button>
        <br />
        <div className='products-container'>
            
            {cardData ? (
                <div id={cardData.id} className='single-product'>
                    {/* {JSON.stringify(cardData)} */}
                    {/* <div > */}
                        
                        <button onClick={(e)=>setCardData(undefined)} style={{border: "2px solid red"}}> Back to products</button>
                        <br />
                        <br />
                        <div style={{display: "flex", gap:"75px", border:"1px dashed yellow"}}>
                            <div style={{width:"600px"}}>
                                <img style={{maxWidth : "300px", maxHeight:"400px", marginTop: "40px", marginLeft:"050px"}} src={cardData.image} alt="ProductImage"/>
                            </div>
                            <div style={{padding:"30px"}}>
                                <h3>{cardData.title}</h3>
                                <div style={{backgroundColor:"#535bf24f",maxHeight:"250px",overflowY:"scroll", textAlign:"justify", padding:"0 15px", borderRadius:"10px"}}><p>{cardData.description}</p></div>
                                <p>Category : <span style={{color:"red", fontWeight:"bold"}}>{cardData.category}</span></p>
                                <h4>Price : {cardData.price} $</h4>
                                <div><h4> <span>Avg. Rating : {cardData.rating.rate} / Total Ratings : {cardData.rating.count} </span> </h4></div>
                            </div>
                    {/* </div> */}
                            <div>
                                <br /><br />
                                <button className='cart-buy-button'>Add toCart</button>
                                <button className='cart-buy-button'>Buy Now</button>
                            </div>

                    </div>
                </div>
            ) : (<>
                    
                    {data.map((el)=>(                
                        <div className='product-card' key={el.id}
                            onClick={(e)=>handleDivClick(el.id)}
                        >
                            <img style={{maxWidth : "250px",maxHeight : "200px"}} src={el.image} alt="ProductImage" />
                            <div >
                                <h3>{el.title}</h3>
                                <p style={{}}>{el.description}</p>
                            </div>
                        </div>
                    ))}
            </>)
        
        }

        </div>
        </>
    )
}

export default Product
