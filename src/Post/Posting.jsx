import React from 'react'
import axios from 'axios'

class Posting extends React.Component{

    constructor(props){
        super(props)
        this.state={
            dataPost:{
                id:1,
                title: '',
                body: ''
            }
        }
    }
    

    componentDidMount(){
        if(this.props.location.state.isUpdate){
            this.setState({
                dataPost: this.props.location.state.dataPost
            })
        }
    }

    handleChange =(event)=>{
        let dataPostNew = {...this.state.dataPost};
        let timestamp= new Date().getTime();
        dataPostNew[event.target.name] = event.target.value;
        if(!this.state.isUpdate){
            dataPostNew['id']=timestamp;
        }
        this.setState({
            dataPost : dataPostNew
        })
    }

    PostDataToAPI=()=>{
        axios.post('http://localhost:3004/posts/',this.state.dataPost).then(()=>{
            this.setState({
                dataPost:{
                    id:1,
                    title: '',
                    body: ''
                }
            })
        })
    }

    UpdateDataToAPI=()=>{
        axios.put(`http://localhost:3004/posts/${this.props.location.state.dataPost.id}`,this.state.dataPost).then(()=>{
            this.setState({
                dataPost:{
                    id:1,
                    title: '',
                    body: ''
                }
            })
        })
    }

    handleSubmit=()=>{
        if(this.props.location.state.isUpdate){
            this.UpdateDataToAPI()
        }else{
            this.PostDataToAPI()
        }
    }



    render(){
        return(
            <div className="container mt-5">
                <div className="form-group">
                    <label htmlFor="title"><h5>Judul</h5></label>
                    <input type="text" className="form-control" placeholder="Judul" name="title" value={this.state.dataPost.title} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="body"><h5>Body</h5></label>
                    <textarea className="form-control"  rows="10" placeholder="Isi Artikel" value={this.state.dataPost.body} name="body" onChange={this.handleChange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary my-1" onClick={this.handleSubmit}><h5>Post</h5></button>
            </div>
        )
    }
}


export default Posting;