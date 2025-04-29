import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { loginService } from '@/services/authService'
import { errorHandler } from '@/utils/shared'
export interface AuthState {
  user: { name: string, password: string }
  token: string,
  authErrorMsg: string
}

const initialState: AuthState = {
  user: { name: 'nehal', password: '0123' },
  token: '',
  authErrorMsg: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<FormData>) => {
      loginService(action.payload).then((response) => {
        state.user = response
        state.token = response.meta.token
        localStorage.setItem('token', state.token)
        localStorage.setItem('user', JSON.stringify(state.user))
      }).catch((error) => {
        const errorMsg = errorHandler(error)
        state.authErrorMsg = errorMsg
      })

    }


  },
})

// Action creators are generated for each case reducer function
export const {login } = authSlice.actions

export default authSlice.reducer