import React from 'react'
import { NavLink } from 'react-router-dom'

const Item = ({ id, number, img, color }) => {
    return (
        <NavLink to={`/${number}`} key={id} style={{ background: color }}>
            <img src={img} alt={number} />
        </NavLink>
    )
}

export default Item