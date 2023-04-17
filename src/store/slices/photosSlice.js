import  { createSlice } from '@reduxjs/toolkit';

import { fetchPhotos } from '../thunks/fetchPhotos';
import { createPhoto } from '../thunks/createPhoto';

const photosSlice = createSlice({
    name : "photo" , 
    initialState:{
        isLoading : false , 
        data :[] , 
        error : null
    } , 
    extraReducers(builder){
        // fetchin 
        builder.addCase(fetchPhotos.pending , (state , action)=>{

        })
        builder.addCase(fetchPhotos.fulfilled , (state , action)=>{
            // console.log(action.payload)
            state.data = state.data.concat(action.payload)
            console.log(state.data)
            console.log("hasgdadasdasd")

        })
        builder.addCase(fetchPhotos.rejected , (state , action)=>{

        })


        // creating 
        builder.addCase(createPhoto.pending , (state , action)=>{

        })
        builder.addCase(createPhoto.fulfilled , (state , action)=>{

        })
        builder.addCase(createPhoto.rejected , (state , action)=>{

        })
    }
})

export const photosReducer  = photosSlice.reducer