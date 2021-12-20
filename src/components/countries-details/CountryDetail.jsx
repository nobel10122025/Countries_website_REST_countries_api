import React from 'react'
import './CountryDetails.scss'

function CountryDetail({country , handleBack}) {
    const nameList= country.name
    const nativeName = Object.values(nameList)[2]
    const currenciesList = country.currencies
    const languageList = country.languages
   
    return (
        <div className='details-container'>
            <button type="button" onClick={handleBack}>
                <i class="fas fa-long-arrow-alt-left"></i>  Back
            </button>
            <div className="image-container">
                <div className="image" style={{backgroundImage : `url(${country.flags.png})`}} />
            </div>
            <div className="text-container">
                <div className="title">{country.name.common}</div>
                <div className="details">
                    <div className="first-half">
                        <div className="info">
                            Native name : <span>{Object.values(nativeName)[0].official}</span>
                        </div>
                        <div className="info">
                            Population : <span>{country.population}</span>
                        </div>
                        <div className="info">
                            Region : <span>{country.region}</span>
                        </div>
                        <div className="info">
                            Capital : <span>{country.capital}</span>
                        </div>
                        <div className="info">
                            SubRegion : <span>{country.subregion}</span>
                        </div>
                        
                    </div>
                    <div className="second-half">
                        <div className="info">
                            Top level Domain : <span>{country.tld[0]}</span>
                        </div>
                        <div className="info">
                            Currencies : <span>{Object.values(currenciesList)[0].name}</span>
                        </div>
                        <div className="info">
                            Language : <span>{Object.values(languageList)[0]}</span>
                        </div>
                    </div>
                </div> 
            </div> 
        </div>
    )
}

export default CountryDetail
