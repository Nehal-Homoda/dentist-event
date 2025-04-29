import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginService } from "@/services/authService";
import { errorHandler } from "@/utils/shared";
import { User } from "@/types/shared";
export interface AuthState {
    user: User | null;
    token: string;
    authErrorMsg: string;
}

const initialState: AuthState = {
    user: null,
    token: "",
    authErrorMsg: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.authErrorMsg = action.payload;
        },
        enter: (state) => {
          const x=localStorage.getItem('user')
          if(x){
            state.user = JSON.parse(x);
          }
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUser, setError, enter } = authSlice.actions;

export default authSlice.reducer;
