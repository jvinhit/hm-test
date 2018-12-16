import React, { Component } from 'react';
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
    }
    handleChange = e => {
        this.props.onTemperatureChange(e.target.value);
    };
    render() {
        const { scale, temperature } = this.props;
        return (
            <fieldset>
                <legend>Nhập nhiệt độ trong Độ {scaleNames[scale]}: </legend>
                <input type="text" value={temperature} onChange={this.handleChange} />
            </fieldset>
        );
    }
}

export default TemperatureInput;
