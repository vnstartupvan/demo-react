import React from 'react'
import { useRef } from 'react';
import { useMemo } from 'react';
import { useState } from 'react'

function TestUseMemo() {
    const [products, setProducts] = useState([]);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const nameRef = useRef();

    const handleAddProduct = () => {
        setProducts([...products, {
            name: productName,
            price: productPrice * 1
        }])
        setProductName('');
        setProductPrice('');
        nameRef.current.focus();
        // priceRef.current.focus()
    }
    const RenderProductItem = () => {
        return products.map((product, index) => {
            return <ul key={index} className="list-wrapper">
                <li className="item-name">{product.name}</li>
                <li className="item-price">{product.price}</li>
            </ul>
        })
    }

    const totalPrice = useMemo(() => {
        const total = products.reduce((sum, currentValue) => {
            console.log('run caculating price')
            return sum + currentValue.price;
        }, 0)
        return total
    },[products])
    return (
        <div>
            <input ref={nameRef} value={productName} onChange={e => setProductName(e.target.value)} type="text" placeholder='name' />
            <input value={productPrice} onChange={e => setProductPrice(e.target.value)} type="text" placeholder='price' />
            <h1 className='total-price'>{totalPrice}</h1>
            <button onClick={() => handleAddProduct()}>Add</button>
            {RenderProductItem()}
        </div>
    )
}

export default TestUseMemo