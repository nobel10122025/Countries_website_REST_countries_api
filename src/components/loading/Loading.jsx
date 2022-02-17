import React,{useContext} from 'react'
import { countriesContext } from '../context/countries.provider'
import './Loading.scss'
function Loading() {
    const {darkTheme} = useContext(countriesContext)
    
    return (
        <div className='loading'>
            <div className={`lds-ripple ${darkTheme ? 'dark': ''}`}>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loading
