import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'

export const FetchProducts = createAsyncThunk ('productSlice/FetchProducts' , async () => {
  let res = await fetch('https://fakestoreapi.com/products/');
  let data = await res.json();
  console.log(data);
  return data;
 });


const ProudctSlice = createSlice ({
 // initialState : [], // دى لو انا عايز اخالى الاراى فاضى
 initialState : [{id : 1 , title : 'product-1'}], 
 name : 'productSlice',

 reducers :{
  addProduct : (state , action) => {
    console.log(action);
    state.push(action.payload);
  },  

 } , 

 extraReducers : (builder) => {
  // builder.addCase(FetchProducts.pending , (state , action) => {
  //   console.log(action);
  //   return state = action.payload;
  // } )

    // builder.addCase(FetchProducts.rejected , (state , action) => {

  // } )

  builder.addCase(FetchProducts.fulfilled , (state , action) => {
    console.log(action);
    return state = action.payload;
  } )
 }

})

export const {addProduct} = ProudctSlice.actions;

export default ProudctSlice.reducer;

