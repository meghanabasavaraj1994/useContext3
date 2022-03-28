import React,{createContext, useState}  from 'react';
import Child from './Child';
export const GlobalInfo= createContext();
function Context() {
    const [color,setColor]=useState('red')
    return (
        <GlobalInfo.Provider value={{ contextColor:color }} >
        <div> 
            <h1>Context Component</h1>
            <Child />
        </div>
        </GlobalInfo.Provider>
    )
}

export default Context