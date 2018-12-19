import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const LabelIcon = props => {
    return (
        <div className={`lbl-wrapper ${props.active ? 'active' : ''}`}>
            <FontAwesomeIcon className={`icon `} icon={props.icon} size="sm" />
            <span className="text">{props.text}</span>
        </div>
    );
};

export { LabelIcon };
