import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginService } from "@/services/authService";
import { errorHandler } from "@/utils/shared";
import { User } from "@/types/shared";
export interface AuthState {
    user: User | null;
    token: string;
    authErrorMsg: string;
    fullForm: boolean;
}

const initialState: AuthState = {
    user: null,
    token: "",
    authErrorMsg: "",
    fullForm: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.fullForm = true;
            localStorage.setItem("user", JSON.stringify(state.user));
        },
        setError: (state, action: PayloadAction<string>) => {
            state.authErrorMsg = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.fullForm = false;
            localStorage.removeItem("user");
        },
        enter: (state) => {
            try {
                const x = localStorage.getItem("user");
                if (x) {
                    state.user = JSON.parse(x);

                    state.fullForm = true;
                }
            } catch (error: any) {
                state.user = null;
                state.fullForm = false;
                localStorage.removeItem("user");
                console.log("Enter error ", error.message);
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUser, setError, enter, logout } = authSlice.actions;

export default authSlice.reducer;
