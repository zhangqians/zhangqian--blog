import React from 'react';

require('../style/bottom.css');

class Bottom extends React.Component {

    render() {
        return (
            <div className="summary-footer">
                <hr/>
                <div className="col-md-5 col-md-offset-8">
                        <h2 className="feature-footer-heading">坐标：</h2>
                        <p className="lead">陕西省 西安市 长安区 西安邮电大学 东区 </p>
                    </div>
                </div>
        )
    }
}

export default Bottom;
