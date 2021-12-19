import React from 'react'
import './Header.scss'

function Header() {
    return (
        <div className="header">
            <div className="title">Where is the world?</div>
            <div className="button-container">
                <span className="icon"><i className="far fa-moon"></i></span>
                <span className="btn">Dark mode</span>
            </div>
        </div>
    )
}

export default Header
