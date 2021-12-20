import React  from 'react'
import './CountriesItem.scss'

function CountriesItem({country , handleClick}) {
    
    return (
        <div className='card' onClick={()=>(handleClick(country.ccn3))}>
            <div className='image-container'>
                <div className='image' style={{backgroundImage : `url(${country.flags.png})`}} />
            </div>
            <div className='text-container'>
            <span className="title">{country.name.common}</span>
                <div className="info">
                    Population : <span>{country.population}</span>
                </div>
                <div className="info">
                    Region : <span>{country.region}</span>
                </div>
                <div className="info">
                    Capital : <span>{country.capital}</span>
                </div>
            </div>
        </div>
    )
}

export default CountriesItem
