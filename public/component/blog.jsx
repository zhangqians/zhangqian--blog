import React,{Component} from 'react'
import request from 'superagent';
import {hashHistory} from 'react-router';
require('../style/blog.css');
export default class Article extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            title:"",
            content:''
        }
    }
    render(){
        return (

            <div>
            <div  className="my-all">

                <input className="col-md-4  title" type="text" placeholder="title" value={this.state.title} onChange={this._onChangeTitle.bind(this)} required/>
                <textarea className="col-md-4  content" type="text" placeholder="content" value={this.state.content} onChange={this._onChangeContent.bind(this)} required/>
                <button className="btn btn-info button" type="submit" onClick={this._onSubmit.bind(this)}>提交</button>
            </div>
        </div>
                )
    }
_onChangeTitle(event) {
    this.setState({
        title: event.target.value
    })
}
_onChangeContent(event){
    this.setState({
        content:event.target.value
    })
}
    _onSubmit(){
request.post('./api/article')
    .send({
        title:this.state.title,
        content:this.state.content
    })
    .end((err,res)=>{
        if(err) return console.error(err);
        console.log(res.statusCode);
        return hashHistory.push('/display');
    })
    }
}