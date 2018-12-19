import React from 'react';
import './index.scss';

const Dropdown = React.forwardRef((props, ref) => (
    <div ref={ref} className={`drop-down`}>
        Dropdown
    </div>
));

export { Dropdown };
