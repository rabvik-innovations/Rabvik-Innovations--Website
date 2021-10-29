import React from "react";
import '../css/Blog.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Blog(){            <div className="blogpost">
                <img className="post-image" src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>
                
          
    return(
        <div>
            <Navbar />
            <button class="new-article-button"><a href="">New Article</a></button>
            <br/><br/>
            <br/><br/>
            <div className="blogmain">
            <div className="blogcard">
          <div className="post-content">
                        <p className="post-header"> <a className="linker" href="#">Lorem Ipsum</a> </p>
                        <p className="post-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sunt asperiores quaerat doloremque commodi facere dolor. Velit pariatur, enim veniam!
                        </p>
                        <div className="blogauthor">
                        <img src="https://assets.codepen.io/2642098/internal/avatars/users/default.png?format=auto&height=80&version=1543776877&width=80" alt="" class="author-image" />
                        <div className="author-content">
                            <p className="author-name">Özgür Kurucan</p>
                            <p className="blogdate">Jun 20, 2020</p>
                        </div>
                    </div>
            </div>
        
        </div>
    </div>



  <div className="blogcard">
    <div className="blogpost">
      <img  style={{float:"right",marginRight:"15px"}} className="post-image" src="https://images.unsplash.com/photo-1574103188526-4faaa363a358?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
      
      <div className="post-content">
        <p className="post-header"> <a className="linker" href="#">Lorem Ipsum</a> </p>
        <p className="post-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sunt asperiores quaerat doloremque commodi facere dolor. Velit pariatur, enim veniam!
        </p>
        <div className="blogauthor">
          <img src="https://assets.codepen.io/2642098/internal/avatars/users/default.png?format=auto&height=80&version=1543776877&width=80" alt="" class="author-image" />
          <div className="author-content">
            <p className="author-name">Özgür Kurucan</p>
            <p className="blogdate">Jun 20, 2020</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>





  <div className="blogcard">
    <div className="blogpost">
      <img className="post-image" src="https://images.unsplash.com/photo-1558435186-d31d126391fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"/>
      
      <div className="post-content">
        <p className="post-header"> <a className="linker" href="#"> Lorem Ipsum</a> </p>
        <p className="post-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sunt asperiores quaerat doloremque commodi facere dolor. Velit pariatur, enim veniam!
        </p>
        <div className="author">
          <img src="https://assets.codepen.io/2642098/internal/avatars/users/default.png?format=auto&height=80&version=1543776877&width=80" alt="" class="author-image" />
          <div className="author-content">
            <p className="author-name">Özgür Kurucan</p>
            <p className="blogdate">Jun 20, 2020</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</div>
<Footer />

        </div> 
    );
}

export default Blog;