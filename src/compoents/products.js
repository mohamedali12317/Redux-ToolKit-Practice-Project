import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
// import { AddProduct , FetchgetProduct } from '../store/reducers/Products-actions';
import { useEffect } from 'react';
import { addProduct , FetchProducts} from '../rtk/Slice/Proudct-slice';

const Products = () => {
const products = useSelector(state => state.products); // قم بتحديث هذا السطر

const bank = useSelector ((state) =>state.bank);

 console.log(products);

 console.log(bank);

 const dispatch = useDispatch();

 useEffect(() => {
  // dispatch(FetchgetProduct());
  dispatch(FetchProducts());
 }, []);

 return (

  <>
   <h1>products</h1>

  {/* <button onClick={()=>dispatch(AddProduct({id : 2 , title : 'prouduct-2'}))}>add products</button> */}
  <button onClick={()=>dispatch(addProduct({id : 2 , title : 'prouduct-2'}))}>add products</button>

   {
    products.map((product) => (<h2 key={product.id}>{product.title}</h2>))
   }
   
 

  </>
 );
}

export default Products;
