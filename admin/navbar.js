import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {  useSelector, UseDispatch, useDispatch } from "react-redux";
import { removeUser } from "../../store/authSlice";
import axios from "axios";
 

function Navbar() {
    var user = useSelector(store=>store.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function logout(){
        if(user){
            axios.post('http://127.0.0.1:8000/user_logout',{},{
               headers:{'Authorization':"Bearer "+ user.token}
            });
            dispatch(removeUser());
            navigate('/home');
        }
    }

    return <nav className="navbar navbar-expand-md navbar-dark" style={{ backgroundColor: "blueviolet" }}>
        <div className="navbar-brand">
            <h4>My app</h4>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mr-auto" id="navbarNav" style={{ float: "left" }}>
              <ul className="navbar-nav ml-auto" style={{ color: "#ffffff" }}>

                    <li className="nav-item">
                        <NavLink to={"/home"} className='nav-link'>
                            Home
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to={"/crud/create"} className="nav-link">
                            Create
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to={"/admin-create"} className="nav-link">
                            Create
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to={"/admin-list"} className="nav-link">
                            view
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to={"/admin-update"} className="nav-link">
                            Edit
                        </NavLink>
                    </li>

                    <li className="nav-item">
                    <NavLink 
                    to={"/signup"} 
                    className={
                        'nav-link '+
                        (status => status.isActive ? 'active' : '')
                    } 
                    >
                        Signup
                    </NavLink>
                    </li>
        
                    
                    <div class="ml-auto">
                        <form class="form-inline" action="{% url 'search' %}">
                                    <input class="form-control mr-sm-2" style={{ borderRadius: "15px" }} type="search" name="search" placeholder="Search"/>
                            <button class="btn btn-success" style={{borderRadius: "22px"}} type="submit">Search</button>
                        </form>    
                    </div>

                    {user?
                        <li className="nav-item">
                            <span className="nav-link" onClick={logout}>Logout</span>
                        </li>:
                        <li className="nav-item">
                            <NavLink to={"/login"} 
                                className={
                                    'nav-link '+
                                    (status => status.isActive ? 'active' : '')
                                } 
                            >
                                Login
                            </NavLink>
                        </li>
                    }

                    <li className="nav-item">
                        <NavLink to={"/register"} className="nav-link">
                            SignUp
                        </NavLink>
                    </li>

            </ul>
        </div>
    </nav>
}
export default Navbar;