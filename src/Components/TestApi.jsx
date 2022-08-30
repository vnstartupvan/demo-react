import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function TestApi() {
    const [data, setData] = useState();
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cc22991f84msh78b99a148769abfp1e6fa5jsne980a5bd4227',
            'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
        }
    };
    useEffect(() => {
        const initData = async () => {
            const response = await fetch('https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US', options)
            let data = await response.json();
            setData(data)
        }
        initData()
            .catch(console.error);
    }, [data])
    console.log(data)
    const renderProductList = () => {
        if (!data) return;
        return data.products.map(product => {
            return <li>{product.name}</li>
        })
    }
    return (
        <div>{renderProductList()}</div>
    )
}

export default TestApi