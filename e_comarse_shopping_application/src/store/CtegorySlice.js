import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const fetchcategorys = createAsyncThunk(
    'Categorys/fetchcategorys',
    async () => {
       const response = await fetch('https://fakestoreapi.com/products/categories') 
       if (! response.ok){
         throw new Error('Failed to fetch Categorys')
       }
       const data = await response.json()
       return data
    }
)


const initialState = {
    Categorys:[],
    loading:false,
    error:null
}

const CategorySlice = createSlice({
    name:'categorys',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetchcategorys.pending,(state) =>{
            state.loading = true
            state.error = null
        })
    builder.addCase(fetchcategorys.fulfilled,(state,action) =>{
        state.Categorys = action.payload
        state.loading = false
    })
    builder.addCase(fetchcategorys.rejected,(state,action) =>{
        state.error = action.error.message
        state.loading = false

    })

    }
    
})

export default CategorySlice.reducer;