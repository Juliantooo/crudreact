import React from 'react';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom'
import Content from '../Content/Content.jsx'
import Tentang from '../Tentang/Tentang.jsx'
import Posting from '../Post/Posting.jsx'
import DetailPost from '../Post/DetailPost.jsx'
import styles from '../style.module.css'

class Navbar extends React.Component{
    render(){
        return(
            <Router>
                <div>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                                <Link className="navbar-brand" to="/"><h2>BlogGoblog</h2></Link>
                                <ul className="navbar-nav m-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/"><h5>Home</h5><span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={{
                                        pathname:`/posting`,
                                        state:{
                                            isUpdate : false
                                        }
                                    }}><h5>Posting</h5></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/tentang/"><h5>Tentang</h5></Link>
                                </li>
                                </ul>
                                <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className={`btn btn-outline-primary my-2 my-sm-0`} type="submit">Search</button>
                                </form>
                        </div>
                    </nav>
                </div>
                <Route path="/" exact component={Content}/>
                <Route path="/posting/" component={Posting}/>
                <Route path="/tentang/" component={Tentang}/>
                <Route path="/detail/:id" component={DetailPost}/>
            </Router>
        )
    }
}

export default Navbar;