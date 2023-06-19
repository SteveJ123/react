import React, { useEffect } from 'react';
import './App.css';
import ProductList from './ProductList';
import  { useDispatch, useSelector }  from 'react-redux';
import { fetchProducts } from './store/actions';
import ProductPage from './ProductPage';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state:any) => state.products);
  const loading = useSelector((state:any) => state.loading);

  const [productView, setProductView] = React.useState(false);

  const [visibleProducts, setVisibleProducts] = React.useState(products ? products : []);

  const [searchTerm, setSearchTerm] = React.useState('');

  const [currentProduct, setCurrentProduct] = React.useState({} as any);

  useEffect(()=>{
    if(products.length == 0){
      dispatch(fetchProducts());
    }
    setVisibleProducts(products);
  },[products]);

  return (
    <div className="App">
    
      <Navbar />
     {productView == true ? <button className="navigation" onClick={()=>{setProductView(false)}}>Go back</button> : null}
    &nbsp;
    &nbsp;
      {productView == false ? <input type="text" placeholder='search' onChange={(event)=>{
        if(event.target.value == ''){
          setVisibleProducts(products);
        }
        setSearchTerm(event.target.value);
        setVisibleProducts(products.filter((item:any)=>item.title.toLowerCase().includes(searchTerm.toLowerCase())));
      }}></input> :"" }

     { !productView ? <div className="cardContainer">
        {loading ? <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
        }}>Loading...</div> : <ProductList data={visibleProducts} setProductView={setProductView} setCurrentProduct={setCurrentProduct} />}
      </div>
      :
      <ProductPage productData={currentProduct}/>
    }
    </div>
  );
}

export default App;
