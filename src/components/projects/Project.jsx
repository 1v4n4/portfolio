import React from 'react';
import PropTypes from 'prop-types';
import '../../CSS/project.css';
import ProjectCarousel from './ProjectCarousel';
import ProjectTxt from './ProjectTxt';

const Project = ({ project }) => (
  <div className="main-project d-lg-flex  align-items-center">
    <ProjectCarousel
      project={project}
    />
    <ProjectTxt
      project={project}
    />
  </div>
);

Project.propTypes = {
  project: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Project;

/* eslint-disable */

{/*
<div class="project-txt col-lg-5 ms-lg-5">
<h3 class="my-3">Do - music news website</h3>
<p class="intro"> "Do" is a music news website for users to read and create articles.
There are six articles on a homepage, the most popular one, and five latest from all categories.
  If logged in, the user can make articles and vote. Authors can edit and delete their articles. </p>

<p class="languages text-center text-lg-start my-4">HTML | CSS | Bootstrap</p>
<!-- Button trigger modal -->
<button type="button" class="btn btn-outline-light mb-4" data-bs-toggle="modal" data-bs-target="#exampleModal0">
  See project
</button>
<!-- Modal -->
<div class="modal fade blub mt-3" id="exampleModal0" tabindex="-1" aria-labelledby="exampleModalLabel0" aria-hidden="true">
  <div class="modal-dialog lite-blub">
    <div class="modal-content text-dark lite-blub">
      <div class="modal-header lite-blub">
        <h5 class="modal-title fs-4 lite-blub" id="exampleModalLabel0">Do - music website</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img src="assets/do1.png" class="d-block w-100 my-3" alt="linter img">

        <p class="my-3 modal-txt"> "Do" is a music news website with a homepage for highlighted articles, five category pages (Cover story, News, Interviews, Live, Reviews), and a few others.
          <br>
          There are six articles on a homepage, the most popular one (the article which users voted the most), and five latest articles from all categories.
          <br>
          Each category page has four of the most recent articles, along with their images, titles (truncated if needed), author's name, a preview of text, the number of votes, and a Read more link.
          <br>
          If logged in, the user can vote for articles from this and few other pages. Visitors can vore only once for each article, but it is not forbidden to support their creations.
          <br>
          Authors can edit and delete their articles, but not other people's.
          </p>

          <a href="https://github.com/1v4n4/music-news-website" class="link-unstyled my-3 fw-bold fs-5 text-dark" target="_blank" rel=”noopener”>More on GitHub</a>

      </div>
    </div>

    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

    </div>
  </div>
</div>
</div> */}
