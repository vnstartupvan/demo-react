import React from 'react'
import { useLayoutEffect } from 'react';
import { useState } from 'react';

function FakeChat() {
    const [lesonId, setLesonId] = useState(1);
    const [comment1, setComment1] = useState([]);
    const [comment2, setComment2] = useState([]);
    const [comment3, setComment3] = useState([]);
    useLayoutEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(lesonId)
            switch (lesonId) {
                case 1:
                    setComment1(prev => [...prev, detail])
                    break
                case 2:
                    setComment2(prev => [...prev, detail])
                    break
                case 3:
                    setComment3(prev => [...prev, detail])
                    break
                default:
                    break;
            }

        }
        window.addEventListener(`lesson-${lesonId}`, handleComment)
        //Remove event 
        return () => {
            window.removeEventListener(`lesson-${lesonId}`, handleComment)
        }
    }, [lesonId])
    const contentData = [
        { name: 'Lesson 1', id: 1 },
        { name: 'Lesson 2', id: 2 },
        { name: 'Lesson 3', id: 3 }
    ];
    const renderContent = () => {
        return contentData.map(content => {
            return <span onClick={() => setLesonId(content.id)} style={{ color: content.id === lesonId ? "red" : "black", cursor: 'pointer' }} key={content.id.toString()} className='content ml-3'>{content.name}</span>
        })
    }
    const renderComment = (comment) => {
        return comment.map(content => {
            return <p>{content}</p>
        })
    }
    console.log(comment2);
    return (
        <div className="main">
            <div className='content-wrapper'>{renderContent()}</div>
            <div className="comment-wrapper">
                <div style={{display: lesonId === 1 ? "block" : "none"}} className="section-comment-1">
                    {renderComment(comment1)}
                </div>
                <div style={{display: lesonId === 2 ? "block" : "none"}} className="section-comment-2">
                    {renderComment(comment2)}
                </div>
                <div style={{display: lesonId === 3 ? "block" : "none"}} className="section-comment-3">
                    {renderComment(comment3)}
                </div>
            </div>
        </div>
    )
}

export default FakeChat