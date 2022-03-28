import React, {useContext} from 'react';
import {GlobalInfo} from './Context';
function Child() {
    const {contextColor} = useContext(GlobalInfo);
    console.warn("contextColor",contextColor);
  return (
        
        <div>
            <h1 style={{color:contextColor}}>Child Component</h1>
        </div>
      )
}

export default Child