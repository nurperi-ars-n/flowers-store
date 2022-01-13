

import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({className, item}) {
    const {id, url, title, price, stars} = item

    return (
        <div className={className}>
            <Link to={`/flowers/${id}`}>
                <img src={url} alt='flower'/>
                <p>{title}</p>
                <span>от {price} тг ☆ {stars}</span>
            </Link>
        </div>
    )
}
