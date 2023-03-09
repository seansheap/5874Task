import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchProjectInfo = createAsyncThunk('api/projects',
    async () => {
        const response = await axios.get('https://6405e17d40597b65de43e280.mockapi.io/digitalspaniel/api/projects')
        return response
    }
)


interface ProjectState{
    projects: ProjectList[],
    loading:'idle' | 'pending' | 'suceed' |'fail'
}

interface ProjectList{
    image:string,
    company:string,
    companydesc:string,
    id:string,
}

const initialState:ProjectState = {
    projects: [],
    loading: 'idle'
}

const projectSlice = createSlice({
    name:'projects',
    initialState,
    reducers:{
        getProjects(){
            console.log('test',fetchProjectInfo())
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchProjectInfo.fulfilled, (state, action)=>{
            state.projects = action.payload.data
             
        })
    }
});

export const {getProjects} = projectSlice.actions;
export default projectSlice.reducer;