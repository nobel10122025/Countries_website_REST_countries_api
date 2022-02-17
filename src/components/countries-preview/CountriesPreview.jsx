import React ,  {useContext} from 'react'

import CountriesItem from '../countries-item/CountriesItem'
import Input from '../input/Input'
import { countriesContext } from '../context/countries.provider'

import './CountriesPreview.scss'


function CountriesPreview() {
    const {countries} = useContext(countriesContext)
    return (
            <div>
                <Input />
                <div className='card-container'>
                    {countries.map((country , index)=>            
                    <CountriesItem key={index} country={country}
                    />)}
                </div>
            </div>
    )
}

export default CountriesPreview
