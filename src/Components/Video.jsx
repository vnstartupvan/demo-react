import React, { forwardRef, useImperativeHandle } from 'react'
import { useRef } from 'react';
import video1 from './videos/video-1.mp4'

function Video(props, ref) {
    const videoRef = useRef();

    useImperativeHandle(ref, () => {
        return {
            play: () => {
                videoRef.current.play();
            },
            pause: () => {
                videoRef.current.pause();
            }
        }
    })
    return (
        <>
            <video ref={videoRef} width={'280px'} src={video1}></video>
        </>
    )
}

export default forwardRef(Video);



