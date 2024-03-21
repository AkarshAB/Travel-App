import {createSlice} from '@reduxjs/toolkit'

const userSlice=createSlice({
name:"user",
initialState:{
    normalUser:[],
    admin:[],
},
reducers:{
    addNormaluser:(state,action)=>{
           state.normalUser.push(action.payload)  
    },
    removeUser:(state,action)=>{
        state.normalUser=state.normalUser.filter((state)=>state.id===action.payload)
    }
}
})
export const {addNormaluser,removeUser}=userSlice.actions;
export default userSlice.reducer;