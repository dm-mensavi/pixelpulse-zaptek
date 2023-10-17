import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Process from "./pages/Process";

// Nested project pages
import Project1 from "./pages/projects/Project1";
import Project2 from "./pages/projects/Project2";
import Project3 from "./pages/projects/Project3";
import Project4 from "./pages/projects/Project4";

//Nested blog pages
import Blog1 from "./pages/blogs/Blog1";
import Blog2 from "./pages/blogs/Blog2";
import Blog3 from "./pages/blogs/Blog3";
import Blog4 from "./pages/blogs/Blog4";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout with navbar */}
        <Route path="/" element={<Layout />}>
          {/* Pages */}
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="process" element={<Process />} />
          <Route path="*" element={<NoPage />} />

          {/* Projects */}
          <Route path="Projects" element={<Projects />} />
          <Route path="project1" element={<Project1 />}/>
          <Route path="project2" element={<Project2 />}/>
          <Route path="project3" element={<Project3 />}/>
          <Route path="project4" element={<Project4 />}/>

          {/* Blog posts */}
          <Route path="blog" element={<Blog />} />
          <Route path="blog1" element={<Blog1 />}/>
          <Route path="blog2" element={<Blog2 />}/>
          <Route path="blog3" element={<Blog3 />}/>
          <Route path="blog4" element={<Blog4 />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);