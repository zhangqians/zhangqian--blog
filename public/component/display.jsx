import React,{Component} from 'react'
// import request from 'superagent'
// require('../style/blog.css');
export default class Display extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            title:"",
            content:''
        }
    }
    componentDidMount(){
        request.get('./api/article')
            .end((err,data)=>{
                this.setState({
                    products: data.body
                })
            });


    }
    render(){
        return (

            <div>
                <div  className="my-all">

                    <input className="col-md-4  title" type="text" placeholder="title" />
                    <textarea className="col-md-4  content" type="text" placeholder="content" />
                    <button className="btn btn-info button" type="submit" >click me</button>
                </div>
            </div>
        )
    }

}