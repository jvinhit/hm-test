import React, { Component } from 'react';
import { DotItem } from './dotitem';
import PropTypes from 'prop-types';
import { Item } from './item';
import './styles.scss';

class ImageGallery extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0, isNext: true };
    }
    componentDidMount() {
        if (this.props.infinite) {
            this.interval = setInterval(() => {
                this.onNext();
            }, this.props.autoplaySpeed);
        }
    }
    renderItem() {
        return this.props.source.map((item, index) => (
            <Item key={index} index={index} activeIndex={this.state.activeIndex} isNext={this.state.isNext}>
                {item.element}
            </Item>
        ));
    }
    play() {}
    stop() {
        clearInterval(this.interval);
        this.interval = null;
    }
    renderDotItems() {
        return this.props.source.map((item, index) => <DotItem key={index} index={index} activeIndex={this.state.activeIndex} onClicks={e => this.onGoto(e, index)} />);
    }
    onPrev = e => {
        if (e) {
            this.stop();
        }
        let index = this.state.activeIndex;
        let slidesLength = this.props.source.length;
        if (index < 1) {
            index = slidesLength;
        }
        --index;
        this.setState({
            activeIndex: index,
            isNext: false
        });
    };
    onGoto(e, index) {
        if (e) {
            this.stop();
        }
        this.setState({ activeIndex: index });
    }
    onNext = e => {
        if (e) {
            this.stop();
        }
        let index = this.state.activeIndex;
        let slidesLength = this.props.source.length;
        if (index === slidesLength - 1) {
            index = -1;
        }
        ++index;
        this.setState({
            activeIndex: index,
            isNext: true
        });
    };
    render() {
        const { infinite, autoplay, autoplaySpeed } = this.props;

        return (
            <div className="gallery-section">
                <ul className="content-section">{this.renderItem()}</ul>
                <ul className="dot-section">{this.renderDotItems()}</ul>

                <button className="btn-next btn" onClick={this.onPrev}>
                    ‹
                </button>
                <button className="btn-prev btn" onClick={this.onNext}>
                    ›
                </button>
            </div>
        );
    }
}

ImageGallery.propTypes = {
    infinite: PropTypes.bool.isRequired,
    autoplay: PropTypes.bool.isRequired,
    autoplaySpeed: PropTypes.number.isRequired
};
ImageGallery.defaultProps = {
    source: [
        {
            element: <img src="https://salt.tikicdn.com/ts/lp/8a/81/e2/4fdaacbe3a3c3fccfd8cdfe29d868f9f.png" />
        },
        {
            element: (
                <div style={{ paddingTop: '20px' }}>
                    <span>This is html tag</span>
                </div>
            )
        },
        {
            element: <img src="https://salt.tikicdn.com/ts/lp/53/c8/9b/22b09f264276653d69c0665ed525830f.png" />
        },
        {
            element: (
                <div style={{ paddingTop: '20px' }}>
                    <span>This is html tag seconds</span>
                </div>
            )
        }
    ]
};
export default ImageGallery;
