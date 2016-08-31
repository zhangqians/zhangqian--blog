import React from 'react';
import FirstPic from '../photos/photos-wall/88.jpg';
import SecondPic from '../photos/photos-wall/book.jpg';
import ThirdPic from '../photos/photos-wall/pict0.jpeg';

require("../style/photos-wall.css");
class PhotosWall extends React.Component {
    render() {
        return (
            <div id="ad-carousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#ad-carousel" data-slide-to="0" className="active"/>
                    <li data-target="#ad-carousel" data-slide-to="1"/>
                    <li data-target="#ad-carousel" data-slide-to="2"/>
                </ol>
                <div className="carousel-inner">
                    <div className="item active">
                        <img src={FirstPic} alt="1 slide"/>
                        <div className="container">
                            <div className="carousel-caption">
                                <h2>分享文字，交流心得</h2>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <img src={SecondPic} alt="2 slide"/>
                        <div className="container">
                            <div className="carousel-caption">
                                <h2>身未动，用文字与世界邂逅</h2>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <img src={ThirdPic} alt="3 slide"/>
                        <div className="container">
                            <div className="carousel-caption">
                                <h2>做喜欢的事，就这样成长</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="left carousel-control" href="#ad-carousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"/></a>
                <a className="right carousel-control" href="#ad-carousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"/></a>
            </div>
        )
    }
}
export default PhotosWall;













