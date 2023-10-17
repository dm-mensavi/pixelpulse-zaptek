import React from "react";
import { Link } from "react-router-dom";
 
const Projects = () => {
    return (
        <div>
            <h1>You are in the Projects page!</h1>
            <div className="flex mt-5 flex-col text-center space-y-5">
                <Link to="/project1">Project1</Link>
                <Link to="/project2">Project2</Link>
                <Link to="/project3">Project3</Link>
                <Link to="/project4">Project4</Link>
            </div>
        </div>
    );
};
 
export default Projects;