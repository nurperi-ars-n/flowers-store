import React from 'react'
import classes from '../../assets/styles/Content.module.css'

import Card from '../UI/Card'
import { useSelector } from 'react-redux'








export default function Content() {


    const flowers = useSelector(state => state.flowers.flowers)


    return (
        <div className={classes.container}>

            <div className={classes.flowersBlock}>
                {flowers.map(item => <Card key={item.id} className={classes.flower} item={item} />)}
            </div>
        
        </div>
    )
}
