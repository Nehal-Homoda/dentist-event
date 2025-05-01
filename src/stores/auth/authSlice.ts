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
            localStorage.setItem('user', JSON.stringify(state.user))
        },
        setError: (state, action: PayloadAction<string>) => {
            state.authErrorMsg = action.payload;
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('user')
        },
        enter: (state) => {
            const x = localStorage.getItem('user')
            if (x) {
                state.user = JSON.parse(x);
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUser, setError, enter, logout } = authSlice.actions;

export default authSlice.reducer;
