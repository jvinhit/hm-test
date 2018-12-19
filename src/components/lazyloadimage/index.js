import React, { Component } from 'react';

import './index.scss';
import { ImageItem } from './item/item';
import { PostInput } from './postinput';

class LazyLoadimageComponent extends Component {
    componentDidMount() {
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
                }
            }, 20);
        }

        document.addEventListener('scroll', lazyload);
    }
    onClickImage = e => {};
    renderImageItem() {
        console.log(this.props.imgSources);
        return this.props.imgSources.map((item, index) => {
            this.props.imgSources[index] = LazyLoadimageComponent.generateStaticImgSrc();
            return (
                <ImageItem
                    slideClass={true}
                    onClick={this.onClickImage}
                    key={`${index}__`}
                    dataSrc={this.props.imgSources[index]}
                />
            );
        });
    }
    render() {
        return (
            <div className="lazy-load-container">
                <PostInput />
                {this.renderImageItem()}
            </div>
        );
    }
}
const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
LazyLoadimageComponent.generateStaticImgSrc = () => {
    return `https://picsum.photos/600/600/?image=${random(1, 1000)}`;
};
LazyLoadimageComponent.defaultProps = {
    imgSources: new Array(100).fill('')
};
export default LazyLoadimageComponent;
