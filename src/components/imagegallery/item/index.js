import React from 'react';
import './styles.scss';

class Item extends React.Component {
    genClass = () => {
        let css =
            this.props.index === this.props.activeIndex
                ? 'carousel__slide active'
                : 'carousel__slide';
        css += this.props.isNext ? ' isNext' : ' isPrev';
        return css;
    };
    render() {
        return <li className={this.genClass()}>{this.props.children}</li>;
    }
}

export { Item };
