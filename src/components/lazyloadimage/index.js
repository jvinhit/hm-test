import React, { Component } from 'react';

import './index.scss';

class LazyLoadimageComponent extends Component {
    render() {
        return (
            <div className="lazy-load-container">
                HTML CSS JS Result EDIT ON
                <img src="https://ik.imagekit.io/demo/img/image1.jpeg?tr=w-400,h-300" />
                <img src="https://ik.imagekit.io/demo/img/image2.jpeg?tr=w-400,h-300" />
                <img src="https://ik.imagekit.io/demo/img/image3.jpg?tr=w-400,h-300" />
                <img class="lazy" data-src="https://ik.imagekit.io/demo/img/image4.jpeg?tr=w-400,h-300" />
                <img class="lazy" data-src="https://ik.imagekit.io/demo/img/image5.jpeg?tr=w-400,h-300" />
                <img class="lazy" data-src="https://ik.imagekit.io/demo/img/image6.jpeg?tr=w-400,h-300" />
                <img class="lazy" data-src="https://ik.imagekit.io/demo/img/image7.jpeg?tr=w-400,h-300" />
                <img class="lazy" data-src="https://ik.imagekit.io/demo/img/image8.jpeg?tr=w-400,h-300" />
                <img class="lazy" data-src="https://ik.imagekit.io/demo/img/image9.jpeg?tr=w-400,h-300" />
                <img class="lazy" data-src="https://ik.imagekit.io/demo/img/image10.jpeg?tr=w-400,h-300" />
                1×0.5×0.25× Rerun Resources
            </div>
        );
    }
}
export default LazyLoadimageComponent;
