import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('ProductLists/fetchProducts',
    async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        if (! response.ok){
            throw new Error('Failed to fetch product')}
        const data = await response.json()
        return data
    }
)
const initialState = {
    productlist:[],
    loading:false,
    error:null
}
const productlistsSlice = createSlice({
    name:'ProductLists',
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
     builder.addCase(fetchProducts.pending,(state) =>{
        state.loading = true
        state.error = null
     })
     builder.addCase(fetchProducts.fulfilled,(state,action) =>{
        state.loading = false
        state.productlist = action.payload
     })
     builder.addCase(fetchProducts.rejected,(state,action) =>{
        state.error = action.error.message
        state.loading = false
     })
    }

})

export default productlistsSlice.reducer