import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const fetchGooglePage = createAsyncThunk('web/googlepage',
    async (thunkAPI) => {
        const response = await fetch('https://www.google.co.uk')
        return String(response)
    }
)

interface ItemState{
    count:number,
    title:string,
    website:string,
    loading:'idle' | 'pending' | 'suceed' |'fail'
}

const initialState:ItemState = {
    count:0,
    title:"beans",
    website:"",
    loading: 'idle'
}

const itemSlice = createSlice({
    name:'item',
    initialState,
    reducers:{
        increaseCount(state){
            state.count ++
        },
        changeTitle(state, action:PayloadAction<string>){
            state.title=action.payload
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchGooglePage.fulfilled, (state, action)=>{
            state.website = action.payload
             
        })
    }
});

export const {increaseCount, changeTitle} = itemSlice.actions;
export default itemSlice.reducer;