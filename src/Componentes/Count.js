import React, { useState } from 'react';

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
        <>
            <button onClick={handleSubtract} disabled={count === 0}>-</button>
            <span>{count}</span>
            <button onClick={onAdd}>+</button>
        </>
    )
}

export default ItemCount