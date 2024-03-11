// Trong tệp head.js
import React from 'react';

function Head({ props }) {
    console.log('props', props);
    return (
        <div className="box" style={{ backgroundColor: props }}>hthrrea</div>
    );
}

export default Head;
