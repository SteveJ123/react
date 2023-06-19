import "./App.css";
import  { useDispatch, useSelector }  from 'react-redux';
import { fetchProductDetail } from "./store/actions";
import Footer from "./Footer";


function ProductList(props:any) {
    const {data, setProductView, setCurrentProduct} = props;
    const dispatch = useDispatch();

  return (    
    <div className="cardContainer" style={{display: 'flex', flexWrap: 'wrap'}}>
        {data && data.map((item:any)=>{          
         return(
            <div className="product-card" style={{margin: '40px'}} onClick={()=>{
                setProductView(true);
                dispatch(fetchProductDetail(Number(item.id)));
            }}>
            <div>{item.id}</div>           
            <div><img style={{width: '100px'}} src={item.images[0]}/></div>           
            <div>{item.title}</div>
            <div>${item.price}</div>           
            </div>
         )
        })}
        <br />
        <div>
        <Footer />
        </div>
    </div>
  );
}

export default ProductList;
