import React , { useContext }from 'react'
import { countriesContext } from '../context/countries.provider'
import './Header.scss'

function Header() {
    const {toggleTheme ,darkTheme} = useContext(countriesContext)
    return (
        <div className="header">
            <div className="title">Where is the world?</div>
            <div className="button-container" onClick={toggleTheme}>
            {
                (darkTheme)?(
                    <>
                    <span className="icon"><i className="fas fa-sun"></i></span>
                    <span className="btn">Light mode</span>
                    </>
                ):
                (
                    <>
                    <span className="icon"><i className="far fa-moon"></i></span>
                    <span className="btn">Dark mode</span>
                    </>
                )
            }    
            </div>
        </div>
    )
}

export default Header
