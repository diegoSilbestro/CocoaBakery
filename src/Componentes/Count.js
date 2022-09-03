import React, { useState } from 'react';
import style from "./styles/Tienda-productos.css"

const ItemCount = ({ stock, initial }) => {
    const [count, setCount] = useState(initial);
    const onAdd = () => {
        setCount(prev => prev + 1);
    }

    const handleSubtract = () => {
        if (count > 0 || count < stock) {
            setCount(prev => prev - 1);
        }
    }
    return (
        <div style={style}>
            <button className='btn-count' onClick={handleSubtract} disabled={count === 0}>-</button>
            <span>{count}</span>
            <button className='btn-count' onClick={onAdd}>+</button>
        </div>
    )
}

export default ItemCount