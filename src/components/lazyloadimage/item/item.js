import React, { Component } from 'react';
import './index.scss';
const ImageItem = props => {
    return (
        <img
            onClick={props.onClick}
            className={`lazy img-lazy ${props.slideClass ? 'slide-image' : ''}`}
            data-src={props.dataSrc}
        />
    );
};
export { ImageItem };
