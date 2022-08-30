import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'
import Video from './Video'

function DemoUseImperativeHandle() {
    const videoRef = useRef();
    useEffect(() => {
        console.log(videoRef.current);
    })
    const handlePlay = () => {
        videoRef.current.play();
    }
    const handlePause = () => {
        videoRef.current.pause();
    }
    return (
        <div style={{
            "display": "flex",
            "flexDirection": "column"
        }}>
            <Video ref={videoRef} />
            <div>
                <button onClick={handlePlay} >Play</button>
                <button onClick={handlePause}>Pause</button>
            </div>
        </div>
    )
}

export default DemoUseImperativeHandle