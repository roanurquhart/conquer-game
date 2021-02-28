import React, { useState} from 'react';
import './App.css';

function Territory(props) {

    function territoryClick() {

    }
    
    return(
        <p class="territory" onClick={() => territoryClick()}>{props.value}</p>
    )
}

export default Territory;