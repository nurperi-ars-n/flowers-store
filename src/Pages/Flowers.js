

import React from 'react'
import { useSelector } from 'react-redux'
import StyledTable from '../components/UI/Table'

export default function Flowers() {
    const flowers = useSelector(state => state.flowers.flowers)
    
    const flowerOptions = ['Title', 'Price', 'Date', 'Edit' ]
    return <StyledTable options={flowerOptions} data={flowers}/>
}
