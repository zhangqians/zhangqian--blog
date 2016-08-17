import React,{Component} from 'react'
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
        return (<form>
            <div>
                <input type="text" placeholder="title" value={this.state.title} onChange={this._onChangeTitle.bind(this)} />
            </div>
            <div>
                <textarea type="text" placeholder="content" value={this.state.content} onChange={this._onChangeContent.bind(this)}/>
            </div>
            <div>
                <button>提交</button>
            </div>
            <hr/>
            <div>{this.state.title}</div>
            <div>{this.state.content}</div>
        </form>)
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
}