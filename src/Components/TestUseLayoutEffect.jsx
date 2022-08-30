import React from 'react'
import { useEffect, useLayoutEffect } from 'react';
import { useState } from 'react'

function TestUseLayoutEffect() {
    const [num, setNum] = useState(0);
    useLayoutEffect(() => {
        console.log(123)
    })
    const runEvent = () => {
            setNum(num + 1)

    }
    return (
        <div>
            <button onClick={() => runEvent()}>Run</button>
            <h1>{num}</h1>
        </div>
    )
}

export default TestUseLayoutEffect