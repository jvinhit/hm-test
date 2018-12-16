import React, { Component } from 'react';

import './index.scss';

class LazyLoadimageComponent extends Component {
    random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    extractTaggedTemplate() {
        const logAll = (...args) => console.log(...args);
        logAll``;
        const variable = '_v_';
        logAll`I love ${variable}`;
    }
    componentDidMount() {
        this.extractTaggedTemplate();
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
                            img.onerror = function() {
                                // img.src = 'https://unsplash.com/photos/vRyFSqEOTZI';
                            };
                            img.style.opacity = 1;
                            img.classList.remove('lazy');
                        }
                    });
                    if (lazyloadImages.length == 0) {
                        document.removeEventListener('scroll', lazyload);
                        window.removeEventListener('resize', lazyload);
                        window.removeEventListener('orientationChange', lazyload);
                    }
                }, 20);
            }

            document.addEventListener('scroll', lazyload);
            window.addEventListener('resize', lazyload);
            window.addEventListener('orientationChange', lazyload);
        });
    }
    render() {
        return (
            <div className="lazy-load-container">
                HTML CSS JS Result EDIT ON
                <img src={`https://picsum.photos/1000/1000/?image=${this.random(1, 1000)}`} />
                <img src={`https://picsum.photos/1000/1000/?image=${this.random(1, 1000)}`} />
                <img src={`https://picsum.photos/1000/1000/?image=${this.random(1, 1000)}`} />
                <img
                    className="lazy"
                    data-src={`https://picsum.photos/1000/1000/?image=${this.random(1, 1000)}`}
                />
                <img
                    className="lazy"
                    data-src={`https://picsum.photos/1000/1000/?image=${this.random(1, 1000)}`}
                />
                <img
                    className="lazy"
                    data-src={`https://picsum.photos/1000/1000/?image=${this.random(1, 1000)}`}
                />
                <img
                    className="lazy"
                    data-src={`https://picsum.photos/1000/1000/?image=${this.random(1, 1000)}`}
                />
                <img
                    className="lazy"
                    data-src={`https://picsum.photos/1000/1000/?image=${this.random(1, 1000)}`}
                />
                <img
                    className="lazy"
                    data-src={`https://picsum.photos/1000/1000/?image=${this.random(1, 1000)}`}
                />
                <img
                    className="lazy"
                    data-src={`https://picsum.photos/1000/1000/?image=${this.random(1, 1000)}`}
                />
                <img
                    className="lazy"
                    data-src={`https://picsum.photos/1000/1000/?image=${this.random(1, 1000)}`}
                />
                <img
                    className="lazy"
                    data-src={`https://picsum.photos/1000/1000/?image=${this.random(1, 1000)}`}
                />
                <img
                    className="lazy"
                    data-src={`https://picsum.photos/1000/1000/?image=${this.random(1, 1000)}`}
                />
                <img
                    className="lazy"
                    data-src={`https://picsum.photos/1000/1000/?image=${this.random(1, 1000)}`}
                />
                <img
                    className="lazy"
                    data-src={`https://picsum.photos/1000/1000/?image=${this.random(1, 1000)}`}
                />
                <img
                    className="lazy"
                    data-src={`https://picsum.photos/1000/1000/?image=${this.random(1, 1000)}`}
                />
                <img
                    className="lazy"
                    data-src={`https://picsum.photos/1000/1000/?image=${this.random(1, 1000)}`}
                />
                <img
                    className="lazy"
                    data-src={`https://picsum.photos/1000/1000/?image=${this.random(1, 1000)}`}
                />
                <img
                    className="lazy"
                    data-src={`https://picsum.photos/1000/1000/?image=${this.random(1, 1000)}`}
                />
                1×0.5×0.25× Rerun Resources
            </div>
        );
    }
}
LazyLoadimageComponent.defaultProps = {
    imgSources: []
};
export default LazyLoadimageComponent;
