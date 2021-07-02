
import Links from "./Links";
import Typewriter from 'typewriter-effect'
import './Blog.css'


function BlogComponent() {
    return (
        <div class = 'Blog'>
            <Links />
            <div className ='title'>BLOG</div>
            <div className = 'todo'> Coming soon <Typewriter options = {{strings: ['...'], autoStart: true, loop: true, pauseFor: 5000}}/></div>
        </div>
    )
}

export default BlogComponent;