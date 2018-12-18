import React, { Component } from 'react';

import './index.scss';
import { ImageItem } from './item/item';

class LazyLoadimageComponent extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var lazyloadImages = document.querySelectorAll('img.lazy');
            var lazyloadThrottleTimeout;

            function lazyload() {
                if (lazyloadThrottleTimeout) {
                    clearTimeout(lazyloadThrottleTimeout);
                }

                lazyloadThrottleTimeout = setTimeout(function() {
                    var scrollTop = window.pageYOffset;
                    lazyloadImages.forEach(function(img) {
                        if (img.offsetTop < window.innerHeight + scrollTop) {
                            img.src = img.dataset.src;

                            img.style.opacity = 1;
                            img.classList.remove('lazy');
                        }
                    });
                    if (lazyloadImages.length == 0) {
                        document.removeEventListener('scroll', lazyload);
                        // window.removeEventListener('resize', lazyload);
                        // window.removeEventListener('orientationChange', lazyload);
                    }
                }, 20);
            }

            document.addEventListener('scroll', lazyload);
            // window.addEventListener('resize', lazyload);
            // window.addEventListener('orientationChange', lazyload);
        });
    }

    renderImageItem() {
        console.log(this.props.imgSources);
        return this.props.imgSources.map((item, index) => {
            return (
                <ImageItem
                    key={`${index}__`}
                    dataSrc={LazyLoadimageComponent.generateStaticImgSrc()}
                />
            );
        });
    }
    render() {
        return <div className="lazy-load-container">{this.renderImageItem()}</div>;
    }
}
const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
LazyLoadimageComponent.generateStaticImgSrc = () => {
    return `https://picsum.photos/1000/1000/?image=${random(1, 1000)}`;
};
LazyLoadimageComponent.defaultProps = {
    imgSources: new Array(100).fill(1)
};
export default LazyLoadimageComponent;
