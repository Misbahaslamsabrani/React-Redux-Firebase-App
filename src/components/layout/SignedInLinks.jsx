import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from "react-redux";
import {signOut} from "../../store/Actions/authActions"
const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to="/createproject">New Project</NavLink></li>
            <li><span onClick={props.signout}>Log Out</span></li>
            <li><NavLink to="/" className='btn btn-floating pink lighten-1'>MAS</NavLink></li>
        </ul>
    )
}
const mapDispatchToProps = (dispatch) => {
    return{
        signout: () => dispatch(signOut())
    }
}
export default connect(null,mapDispatchToProps)(SignedInLinks);