import React from 'react';
import {Link} from 'react-router';
require('../style/head.css');
class Head extends React.Component {
    render() {
        return (<div className="head-position">
            <nav>

                <div className="set">
                    <ul className=" nav-ul">
                        <li className="li"><Link to="/display">展示区</Link></li>
                        <li className="li"><Link to="/blog">编辑区</Link></li>
                        <li className="li"><Link to="#">个人中心</Link></li>
                    </ul>
                </div>
            </nav>
        </div>)
    }
}

export default Head
