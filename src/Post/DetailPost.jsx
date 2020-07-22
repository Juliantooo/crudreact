import React from 'react'
import axios from 'axios'

class DetailPost extends React.Component{
    constructor(props){
        super(props)
        this.state={
            post:{
                title :'',
                body:''
            }
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:3004/posts/${this.props.match.params.id}`).then((res)=>{
            this.setState({
                post : {
                    title : res.data.title,
                    body : res.data.body
                    }
            })
        })
    }

    render(){
        return(
            <div className="container mt-5">
               <h4 className="text-center">{this.state.post.title}</h4>
               <hr/>
                <p className="mt-5 text-justify">{this.state.post.body}</p>
            </div>
        )
    }
}


export default DetailPost;