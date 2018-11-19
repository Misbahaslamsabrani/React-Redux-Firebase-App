import React, { Component, Fragment }from 'react'
import {connect} from "react-redux"
import { compose } from "redux"
import { firestoreConnect } from "react-redux-firebase";

class ProjectDetails extends Component{
  render(){
    return(<Fragment>
      {this.props.project ? (
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{this.props.project.title}</span>
              <p>{this.props.project.content}</p>
            </div>
            <div className="card-action lighten-4 grey-text">
            <div>Posted by {this.props.project.authFirstName} {this.props.project.authLastName}</div>
            <div>2nd September, 1:29 AM</div>
            </div>
          </div>
        </div>) : (
            <div className="container center">
              <p>Loading project...</p>
            </div>)}
        </Fragment>)
  }
}

const mapStateToProps = (state , ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.Projects;
  const project = projects ? projects[id] : null
  return{
    project: project
  }
}
export default compose(
connect(mapStateToProps),
firestoreConnect([
  { collection: "Projects" }
])
)(ProjectDetails);

