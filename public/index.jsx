import React from 'react';
// import BrifeIntroduciton from './component/brief-introduction.jsx';
import PhotosWall from './component/photos-wall.jsx';
import Bottom from './component/bottom.jsx';
export default class Hello extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div>
          <div>
            <PhotosWall/>
          </div>
        </div>
        <div>
          {this.props.children}
        </div>
<div>
    <Bottom/>
</div>
      </div>
    );
  }
}
