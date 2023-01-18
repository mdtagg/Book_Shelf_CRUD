import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import UseLocalStorage from '../hooks/UseLocalStorage'
import Header from '../components/Header'

export default function AppRouter() {
    const [ book,setBook ] = UseLocalStorage('key', [])
    return (
        <BrowserRouter>
            <div>
                <Header/>
            </div>
            
        </BrowserRouter>
    )
}