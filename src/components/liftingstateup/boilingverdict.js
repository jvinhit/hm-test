import React from 'react';

export const BoilingVerdict = props => {
    if (props.celsius >= 100) {
        return <p>Nuoc soi</p>;
    }
    return <p>Nước chưa sôi</p>;
};
