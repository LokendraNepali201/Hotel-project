import { createSlice } from "@reduxjs/toolkit";
import { addUserToLocal, celarUser, getUserFromLocal } from "../Shared/localStorage";


export const userSlice = createSlice({
  name:'userSlice',
  initialState:({
    user:getUserFromLocal(),
  }),
  reducers:{
    setUser:(state,action)=>{
      state.user = action.payload;
      addUserToLocal(state.user);
    },

    userLogout:(state,action)=>{

    state.user = null;
    celarUser();
    }

  }
})

export const {setUser,userLogout} = userSlice.actions;
