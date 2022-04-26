import React, { useEffect } from 'react';
import '../CSS/blog.css';

const Blog = () => {
  useEffect(() => {
    document.title = 'iv4n4 | Blog';
  }, []);
  return (
    <div className="blog-container">
      <div className="blog-div">
        WORK IN PROGRESS
        <div>WORK IN PROGRESS</div>
        <div>WORK IN PROGRESS</div>
        <div>WORK IN PROGRESS</div>
        <div>WORK IN PROGRESS</div>
      </div>
    </div>
  );
};

export default Blog;
