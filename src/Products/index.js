import React ,{ useState,useEffect}from "react";
import './style.css'
import { Link } from "react-router-dom";


const Products=()=>{
    const[products,setProducts]=useState([])
    const [loading,setLoading]=useState([false])
    useEffect(()=>{
        (async()=>{
            await getProducts()
        })()

    },[])
    console.log({products});
    const getProducts=async()=>{
        try{
            setLoading(true);
            const response=await  fetch('https://dummyjson.com/products')
            const result =await response.json()
            setProducts(result.products)
            setLoading(false)
            
    }
    catch(error){
        console.log(error.message);
    }
}
if (loading){
    return <h2>loading.....</h2>
}


 return(
    <div className="products">

{/* <h1 className="all"> All Products</h1> */}

{products.map(item=>(
<div key={item.id}>
    <h2>{item.title}</h2>
    <img src={item.images[0]} alt={item.title} className="image" />
     <p className="price">price &nbsp;ksh{item.price}</p> 
     <p className="Discount">discount&nbsp;{item.discountPercentage}%</p> 
     <Link to={`/ProductDetails/${item.id}` }className="button"> 
     <button type="submit" className="button">More</button >

      </Link>


   
 

    </div>
 )) 
}


    </div>
 )
}
export default Products;