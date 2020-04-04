import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthData, AuthState } from "../types/auth";

const initialState: AuthState = {
  loading: false,
  error: "",
  id: "",
  refreshToken: "",
  token: "",
  user: {
    email: "",
    name: "",
  },
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        
    }
})
