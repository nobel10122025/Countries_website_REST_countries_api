import React , {useContext} from 'react'
import { countriesContext } from '../context/countries.provider'
import './CountryDetails.scss'

function CountryDetail() {

    const {data, singleCountry , convertCodeToName , handleClick , handleBack} = useContext(countriesContext)
    // console.log(singleCountry)

    const nameList= singleCountry.name
    const nativeName = Object.values(nameList)[2]
    const currenciesList = singleCountry.currencies
    const languageList = singleCountry.languages
    const borderList = singleCountry.borders;
    const fullName = (city) => convertCodeToName(data , city);

    return (
        <div className='details-container'>
            <button type="button" onClick={handleBack}>
                <i className="fas fa-long-arrow-alt-left"></i>  Back
            </button>
            <div className="image-container">
                <div className="image" style={{backgroundImage : `url(${singleCountry.flags.png})`}} />
            </div>
            <div className="text-container">
                <div className="title">{singleCountry.name.common}</div>
                <div className="details">
                    <div className="first-half">
                        <div className="info">
                            Native name : <span>{Object.values(nativeName)[0].official}</span>
                        </div>
                        <div className="info">
                            Population : <span>{singleCountry.population}</span>
                        </div>
                        <div className="info">
                            Region : <span>{singleCountry.region}</span>
                        </div>
                        <div className="info">
                            Capital : <span>{singleCountry.capital}</span>
                        </div>
                        <div className="info">
                            SubRegion : <span>{singleCountry.subregion}</span>
                        </div>
                        
                    </div>
                    <div className="second-half">
                        <div className="info">
                            Top level Domain : 
                            <span>{(singleCountry.tld[0])?(singleCountry.tld[0]):"no domain"}</span>
                        </div>
                        <div className="info">
                            Currencies : <span>{Object.values(currenciesList)[0].name}</span>
                        </div>
                        <div className="info">
                            Language : <span>{Object.values(languageList)[0]}</span>
                        </div>
                    </div>
                </div> 
                <span className='countries-container'>Border Countries :
                {
                     borderList?
                        (borderList.map((borderCity,index)=>
                        <span className='border-countries'
                        onClick=
                        {()=>(handleClick(data,fullName(borderCity).ccn3))}
                        key={index}
                        > {fullName(borderCity).name.common} </span>)):(' No neighbouring countries')
                }  
                </span>                 
            </div> 
        </div>
    )
}

export default CountryDetail
