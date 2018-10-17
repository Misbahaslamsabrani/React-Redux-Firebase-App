import React from 'react'

function ProjectDetails(props) {
  const id= props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id} </span>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus laudantium molestias hic molestiae consectetur repudiandae tenetur. Aperiam quo tempora pariatur, nostrum delectus corporis enim fuga adipisci veniam a quidem deleniti?</p>
        </div>
        <div className="card-action lighten-4 grey-text">
        <div>Posted by Misbah</div>
        <div>2nd September, 1:29 AM</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails;

