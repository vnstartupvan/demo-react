import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function PreviewImages() {
    //Declare image url 
    const [imageUrl, setImageUrl] = useState();
    useEffect(() => {
        //Clean up image after the elememt is unmounted
        return () => {
            imageUrl && URL.revokeObjectURL(imageUrl.preview)
        }
    }, [imageUrl])
    //Handle preview image
    const handlePreview = (e) => {
        let imageUrl = e.target.files[0];
        imageUrl.preview = URL.createObjectURL(imageUrl);
        setImageUrl(imageUrl);
    }
    return (
        <div className='container'>
            <input onChange={handlePreview} type="file" className="getImageBtn" />
            {imageUrl && (
                <img src={imageUrl.preview} alt="" />
            )}
        </div>
    )
}

export default PreviewImages