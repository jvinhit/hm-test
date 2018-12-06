import React from 'react';
import CountDown from './components/countdown';
import ImageGallery from './components/imagegallery';
const currentDate = new Date();
const year = currentDate.getMonth() === 11 && currentDate.getDate() > 23 ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
class RouteConfigs extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <CountDown date={`${year}-12-06T00:00:00`} />
                    <ImageGallery infinite={true} autoplay={true} autoplaySpeed={1000} />
                </div>
            </div>
        );
    }
}
export default RouteConfigs;
