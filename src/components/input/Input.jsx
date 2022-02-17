import React , {useContext} from 'react'
import './Input.scss'
import { countriesContext } from '../context/countries.provider'

function Input() {
    const {handleChange , handleFilter} = useContext(countriesContext)
    return (
    <div className="input-container">
        <div className="search">
            <span className="icon"><i className="fas fa-search"></i></span>
            <input 
                type="text" 
                placeholder="Enter country name" 
                className="search-box"
                onChange={handleChange} 
                /> 
        </div>
        <div className="dropdown">
            <label htmlFor="continents">Choose a continent:</label>
            <select name="continents" onChange={handleFilter} placeholder="Choose a continent:" >
              <option value="all">All</option>  
              <option value="asia">Asia</option>
              <option value="americas">America</option>
              <option value="europe">Europe</option>
              <option value="africa">Africa</option>
              <option value="oceania">Oceania</option>
            </select> 
        </div>
    </div>
    )
}

export default Input
