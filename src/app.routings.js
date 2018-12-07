import React from 'react';
import CountDown from './components/countdown';
import ImageGallery from './components/imagegallery';
const currentDate = new Date();
class RouteConfigs extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <CountDown />
                    <ImageGallery infinite={true} autoplay={true} autoplaySpeed={1000}>
                        <img src="https://salt.tikicdn.com/ts/lp/8a/81/e2/4fdaacbe3a3c3fccfd8cdfe29d868f9f.png" />
                        <div style={{ paddingTop: '20px' }}>
                            <span>This is html tag</span>
                        </div>
                        <img src="https://salt.tikicdn.com/ts/lp/53/c8/9b/22b09f264276653d69c0665ed525830f.png" />
                        <div style={{ paddingTop: '20px' }}>
                            <span>This is html tag seconds</span>
                        </div>
                        asd
                    </ImageGallery>
                </div>
            </div>
        );
    }
}
export default RouteConfigs;
