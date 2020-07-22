import React from 'react'

class PopularPost extends React.Component{
    render(){
        return(
                <div>
                    <ul className="list-group">
                       <li className="list-group-item text-justify" onClick={()=>this.props.gotDetail(this.props.data.id)}> <p className="clickTitle">{this.props.data.title}</p></li>
                     </ul>
                </div>
        )
    }
}

export default PopularPost;


