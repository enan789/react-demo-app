import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import AddProject from './AddProject';

class Projects extends Component {
  render() {
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        //console.log(project);
        return (
          <ProjectItem key={project.title} project={project}/>
        );
      });
    }
    return (
      <div className="Projects">
        <AddProject />
        {projectItems}
      </div>
    );
  }
}

export default Projects;
