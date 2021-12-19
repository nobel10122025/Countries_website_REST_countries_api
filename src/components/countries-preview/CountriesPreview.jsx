import React from 'react'
import './CountriesPreview.scss'
import CountriesItem from '../countries-item/CountriesItem'
import Input from '../input/Input'

function CountriesPreview({countries , handleChange , handleFilter}) {
    return (
        <>
        <Input handleChange={handleChange} handleFilter={handleFilter}></Input>
            <div className='card-container'>
                {countries.map((country , index)=>            
                <CountriesItem key={index} country={country}/>)}
            </div>
        </>
    )
}

export default CountriesPreview
