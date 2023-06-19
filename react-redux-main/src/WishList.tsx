import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from './store/actions';
import { addToCart } from './store/actions';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';

function WishList(props: any) {
    const { productData } = props;
    const favorites = useSelector((state: any) => state.favorites);

    return (
        <div>
            <Navbar />
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: 'space-around' }}>{favorites && favorites.map((item: any) => {
                return (
                    <div className="product-details" style={{ margin: "10px" }}>
                        <div>Product ID: {item.id}</div>
                        <div className="title">Product Title: {item.title}</div>
                        <div><img style={{ width: '100px', height: '100px' }} src={item.images[0]} alt="" /></div>
                        <div className="price">Price: ${item.price}</div>
                        <div className="description">Description: {item.description}</div>
                    </div>
                )
            })

            }
            </div>
            <Footer />
        </div>
    );
}

export default WishList;