import React from 'react'
import './Post.css'
import {button} from 'reactstrap'
import {Link} from 'react-router-dom'


class Post extends React.Component{
    render(){
        return(
                <div className="card mb-5">
                <div className="card-header font-weight-bold text-primary clickTitle" onClick={()=>this.props.getDetail(this.props.data.id)}>
                {this.props.data.title}
                </div>
                <div className="card-body">
                    <p className="card-text text-justify" >{this.props.data.body}</p>
                    <button className="btn btn-primary mr-5 mt-5" onClick={()=>this.props.getDetail(this.props.data.id)}>Lanjutkan Membaca</button>
                    <Link to={{
                        pathname:`/posting/${this.props.data.id}`,
                        state:{
                            dataPost : this.props.data,
                            isUpdate : true
                        }
                    }} className="btn btn-primary mr-5 mt-5">Update</Link>
                    <button className="btn btn-primary mt-5" onClick={()=>{this.props.hapusPost(this.props.data.id)}}>Hapus</button>
                </div>
             </div>
        )
    }
}

export default Post;