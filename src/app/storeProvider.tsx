'use client'

import { store } from '../stores/store'
import { Provider } from 'react-redux'


type Props ={
    children: React.ReactNode;
}
export default function storeProvider({ children }: Props) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
