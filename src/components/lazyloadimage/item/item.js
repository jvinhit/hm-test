import React, { Component } from 'react';
import './index.scss';
const ImageItem = props => {
    return <img onClick={props.onClick} className="lazy img-lazy" data-src={props.dataSrc} />;
};
export { ImageItem };
