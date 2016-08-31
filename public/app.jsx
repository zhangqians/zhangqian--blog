import React, {Component} from 'react';
import Head from './component/head.jsx'
export default class App extends Component {
    render() {
        return <div>
            <div>
              <Head/>
            </div>
         <div>{this.props.children}</div>
                </div>

    }
}