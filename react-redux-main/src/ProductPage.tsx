import React from 'react';
import  { useDispatch, useSelector }  from 'react-redux';
import { addToFavorites } from './store/actions';
import { addToCart } from './store/actions';
import "./ProductPage.css";
import Footer from './Footer';

function ProductPage(props: any) {
    const { productData } = props;
    const dispatch = useDispatch();
    const productDetail = useSelector((state:any) => state.productDetail);
    const favorites = useSelector((state:any) => state.favorites);
    const cart = useSelector((state:any)=>state.cart);    
    return (
        <div>{productDetail && 
            <div className="product-details">
                <div>Product ID: {productDetail.id}</div>
            <div className="title">Product Title: {productDetail.title}</div>
            <div><img style={{width: '400px', height: '400px'}} src={productDetail.images[0]} alt="" /></div>
            <div className="price">Price: ${productDetail.price}</div>   
            <div className="description">Description: {productDetail.description}</div>               
            
            <div className="button-container">
            <button className="add-to-favorite"
            style={{
                backgroundColor: favorites.find((item:any)=>item.id == productDetail.id) ? 'green' : 'white',
                color: favorites.find((item:any)=>item.id == productDetail.id) ? 'white' : 'black',
            }}
            onClick={()=>{
                dispatch(addToFavorites(productDetail));
            }}>+ Favorite</button>           
            
            <button className="add-to-cart"
            style={{
                backgroundColor: cart.find((item:any)=>item.id == productDetail.id) ? 'green' : 'white',
                color: cart.find((item:any)=>item.id == productDetail.id) ? 'white' : 'black',
            }}
            onClick={()=>{
                dispatch(addToCart(productDetail));
            }}>+ Add To Cart</button>
            </div>
            </div>
        
        }
        <Footer />   
        </div>
    );
}

export default ProductPage;