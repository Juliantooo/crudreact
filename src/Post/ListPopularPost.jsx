import React from 'react'
import PopularPost from '../Post/PopularPost'


class ListPopularPost extends React.Component{
    render(){
        return(
            <div className="card">
            <div className="card-header">
            <h5 className="card-title">Popular Post</h5>
            </div>
            <div className="card-body">
            {this.props.data.map((post,key)=>{
                        if(key<=10){
                            return <PopularPost key={post.id} data={post} gotDetail={this.props.getDetail} />
                        }
                    })}
            </div>
            </div>
        )
    }
}

export default ListPopularPost;