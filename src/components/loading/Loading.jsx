import React from 'react'
import './Loading.scss'
function Loading({darkTheme}) {
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
