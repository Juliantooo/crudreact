import React from 'react'
import Post from '../Post/Post.jsx'
import axios from 'axios'
import ListPopularPost from '../Post/ListPopularPost.jsx'

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state={
            post:[]
        }
    }

    componentDidMount(){
        this.GetPost()
    }

    GetPost(){
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc').then((res)=>{
           this.setState({
               post : res.data
           })
        })
    }

    handleRemove=(post)=>{
        axios.delete(`http://localhost:3004/posts/${post}`).then(()=>{
            this.GetPost()
        })
    }

    HandleDetail=(id)=>{
        this.props.history.push(`/detail/${id}`)
    }



    render(){
        return(
            <div className="mt-5 mb-3">
                <div className="row">
                <div className="col-md-2">
                </div>
                <div className="col-5">
                {this.state.post.map((post,key)=>{
                        if(key<=15){
                            return <Post key={post.id} data={post} getDetail={this.HandleDetail} hapusPost={this.handleRemove} />
                        }
                    })}
                </div>
                <div className="col-md-3">
                    <ListPopularPost data={this.state.post}  getDetail={this.HandleDetail} />
                </div>
                <div className="col-md-1">
                </div>
            </div>
            </div>
        )
    }
}


export default Content;