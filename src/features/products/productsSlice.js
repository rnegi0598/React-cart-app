import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";


const API_URL  ="http://localhost:4000/products"

const initialState = {
  products:[],
  status: 'idle',//'idle' | 'loading' | 'succeeded' | 'failed'
  error:null,
};
//fetch products
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});
//add new products 
export const addNewProduct=createAsyncThunk("products/addNewProduct",async (newProduct)=>{
  
  const response=await axios.post(API_URL,newProduct);
  return response.data;
})
//update products
export const updateProduct=createAsyncThunk("products/updateProduct",async(updatedProduct)=>{
  const response=await axios.put(`${API_URL}/${updatedProduct.id}`,updatedProduct);
  return response.data;
})
//delete product
export const deleteProduct=createAsyncThunk('products/deleteProduct',async(id)=>{
  await axios.delete(`${API_URL}/${id}`);
  return id;
})

const productsSlice=createSlice({
  name:'products',
  initialState,
  reducers:{},
  extraReducers(builder){
    builder
      .addCase(fetchProducts.pending,(state,action)=>{
        state.status='loading';
      })
      .addCase(fetchProducts.fulfilled,(state,action)=>{
        state.status='succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected,(state,action)=>{
        state.status='failed';
        state.error = action.error.message;
        
      })
      .addCase(addNewProduct.fulfilled,(state,action)=>{
        state.status='succeeded';
        console.log(action.payload);
        state.products.push(action.payload);
      })
      .addCase(updateProduct.fulfilled,(state,action)=>{
          state.status='succeeded';
          state.products=state.products.map((product)=>{
            if(product.id===action.payload.id){
              return action.payload;
            }else{
              return product
            }
          })
      })
      .addCase(deleteProduct.fulfilled,(state,action)=>{
        state.products=state.products.filter((product)=>{
          return product.id!==action.payload
        })

      })
  }
})

export default productsSlice.reducer;