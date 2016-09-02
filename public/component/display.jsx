import React, {Component} from 'react';
import request from 'superagent';
import $ from 'jquery';
import _ from 'lodash';
import {Grid, Row, Col} from 'react-bootstrap';
require('../style/display.css');

export default class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
        this.removeArticles = this.removeArticles.bind(this);

    }

    componentDidMount() {
        request.get('/api/article')
            .end((err, res) => {
                if (err) return alert("Loading data failed");
                this.setState({
                    articles: res.body
                });
            });
    }

    render() {
        return <div className="grid-class">
            <Row>
                <Col xs={12}>
                    <div>
                        {
                            this.state.articles.map(article =>
                                <div key={article._id}>
                                    <div className="my-title">{article.title}</div>
                                    <div className="my-content">{article.content}</div>
                                   <div > <button className="btn btn-success button" onClick={this.removeArticles(article._id)}>删除</button></div>
                                </div>

                            )
                        }
                    </div>
                </Col>
            </Row>
        </div>;
    }
    removeArticles(id) {
        return () => {
            const self = this;
            $.ajax({
                url: '/texts/' + id,
                type: 'DELETE',
                success: function(result) {
                    const remainArticles = _.filter(self.state.articles, s => s._id !== id);
                    self.setState({
                        articles: remainArticles
                    });
                }
            });
        }
    }
}