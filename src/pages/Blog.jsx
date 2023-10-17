import React from "react";
import { Link } from "react-router-dom";
 
const Projects = () => {
    return (
        <div className="Page">
            <h1>You are in the Blogs page!</h1>
            <div className="flex mt-5 flex-col text-center space-y-5">
                <Link to="/blog1">Blog 1</Link>
                <Link to="/blog2">Blog 2</Link>
                <Link to="/blog3">Blog 3</Link>
                <Link to="/blog4">Blog 4</Link>
            </div>
        </div>
    );
};
 
export default Projects;