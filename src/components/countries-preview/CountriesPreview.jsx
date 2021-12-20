import React from 'react'
import './CountriesPreview.scss'
import CountriesItem from '../countries-item/CountriesItem'
import Input from '../input/Input'

function CountriesPreview({countries , handleChange , handleFilter , handleClick}) {
    return (
            <div>
                <Input handleChange={handleChange} 
                    handleFilter={handleFilter}></Input>
                <div className='card-container'>
                    {countries.map((country , index)=>            
                    <CountriesItem key={index} country={country} handleClick={handleClick}/>)}
                </div>
            </div>
    )
}

export default CountriesPreview
