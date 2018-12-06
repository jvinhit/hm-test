import React, { Component } from 'react';
import { InputGroup } from '../common/inputgroup';
import { Button } from '../common/button';
import { validators, operations } from '../../helper';
import { CountDownItem } from './countdownitem';
import './styles.scss';

class CountDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: 2019,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            seconds: 0,
            remainTime: {
                year: 0,
                month: 0,
                day: 0,
                hour: 0,
                minute: 0,
                seconds: 0
            },
            isRunning: false,
            errors: {}
        };
    }
    componentDidMount() {}

    validate = () => {
        let isError = false;
        const errors = {};
        const validatorsYear = validators.validateYear(this.state.year);
        const validatorsMonth = validators.validateMonth(this.state.month);
        const validatorsDay = validators.validateDay(this.state.day, this.state.month, this.state.year);
        const validatorsHour = validators.validateHour(this.state.hour);
        const validatorsMinute = validators.validateMinute(this.state.minute);
        const validatorsSeconds = validators.validateSeconds(this.state.seconds);
        if (validatorsYear) {
            errors.year = validatorsYear;
        }
        if (validatorsMonth) {
            errors.month = validatorsYear;
        }
        if (validatorsDay) {
            errors.day = validatorsDay;
        }
        if (validatorsHour) {
            errors.hour = validatorsHour;
        }
        if (validatorsMinute) {
            errors.minute = validatorsMinute;
        }
        if (validatorsSeconds) {
            errors.seconds = validatorsSeconds;
        } // for check if length

        this.setState({ errors });
    };
    onChangeDuration = e => {
        this.setState({ [e.target.name]: parseInt(e.target.value) });
    };

    onStart = () => {
        this.setState({ isRunning: true });
        this.validate();
        if (Object.keys(this.state.errors).length > 0) {
            // Có nghĩa là có lỗi còn làm gì tiếp ?
        } else {
            this.interval = setInterval(() => {
                const endDateString = `${this.state.year}/${this.state.month}/${this.state.day} ${this.state.hour}:${this.state.minute}:${this.state.seconds}`;
                const date = operations.setDuration(endDateString);
                if (date) {
                    this.setState({ remainTime: { ...date } });
                } else {
                    this.stop();
                }
            }, 1000);
        }
    };
    stop() {
        clearInterval(this.interval);
    }
    renderCountDown() {
        const { remainTime } = this.state;
        return Object.keys(remainTime).map(item => {
            return <CountDownItem key={`${item}__123`} label={item} value={`${operations.addLeadingZeros(this.state.remainTime[item])}`} />;
        });
    }
    render() {
        const { remainTime } = this.state;
        return (
            <div className="input-section">
                <div className="header__section">
                    <h2>Input your time to countdown</h2>
                </div>
                <div className="content__section">
                    <InputGroup
                        type="number"
                        name="year"
                        placeholder="year"
                        onChange={this.onChangeDuration}
                        required="required"
                        error={this.state.errors.year}
                        value={`${this.state.year}`}
                        min="2018"
                        onBlur={this.validate}
                    />
                    <InputGroup
                        type="number"
                        name="month"
                        placeholder="month"
                        onChange={this.onChangeDuration}
                        value={`${operations.addLeadingZeros(this.state.month)}`}
                        required="required"
                        error={this.state.errors.month}
                        min="1"
                        max="12"
                        onBlur={this.validate}
                    />
                    <InputGroup
                        type="number"
                        name="day"
                        placeholder="day"
                        onChange={this.onChangeDuration}
                        value={`${operations.addLeadingZeros(this.state.day)}`}
                        required="required"
                        error={this.state.errors.day}
                        min="1"
                        max="31"
                        onBlur={this.validate}
                    />
                    <InputGroup
                        type="number"
                        name="hour"
                        placeholder="hour"
                        onChange={this.onChangeDuration}
                        value={`${operations.addLeadingZeros(this.state.hour)}`}
                        required="required"
                        error={this.state.errors.hour}
                        min="0"
                        max="23"
                        onBlur={this.validate}
                    />
                    <InputGroup
                        type="number"
                        name="minute"
                        placeholder="minute"
                        onChange={this.onChangeDuration}
                        value={`${operations.addLeadingZeros(this.state.minute)}`}
                        required="required"
                        error={this.state.errors.minute}
                        min="0"
                        max="59"
                        onBlur={this.validate}
                    />
                    <InputGroup
                        type="number"
                        name="seconds"
                        placeholder="seconds"
                        onChange={this.onChangeDuration}
                        value={`${operations.addLeadingZeros(this.state.seconds)}`}
                        required="required"
                        error={this.state.errors.seconds}
                        min="0"
                        max="59"
                        onBlur={this.validate}
                    />
                </div>
                <Button type="button" textLabel="SetTime" onClick={this.onStart} disabled={this.state.isRunning ? 'disabled' : null} />
                <div className="countdown__section">
                    <ul>{this.renderCountDown()}</ul>
                </div>
            </div>
        );
    }
}

export default CountDown;
