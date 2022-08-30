import React from 'react'
import { createContext, useState } from 'react';
import Content from './Content'

export const CurrentTheme = createContext();

function TestUseContext() {
    const [theme, setTheme] = useState('light');
    const handleToggleTheme = () => {
        setTheme( theme === 'light' ? 'dark' : 'light')
    }
    const valueContext = {
        theme, 
        handleToggleTheme
    }
    return (
        <CurrentTheme.Provider value={valueContext}>
            <div>
                
                <Content />
            </div>
        </CurrentTheme.Provider>
    )
}

export default TestUseContext