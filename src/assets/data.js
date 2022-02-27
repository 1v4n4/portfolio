import dashboard1 from './images/dash1.png';
import dashboard2 from './images/dash2.png';
import dashboard3 from './images/dash3.png';

const skillsList = [
  ['LANGUAGES: ', 'Ruby, JavaScrypt, HTML, CSS, MySQL'],
  ['FRAMEWORKS: ', 'Ruby on Rails, React, Redux, Bootstrap, Sidekiq, Rspec, Capybara'],
  ['TOOLS & METHODS: ', 'Github, Heroku, Netlify, Responsive design, TDD, Chrome Dev'],
  ['SKILLS: ', 'Pair-Programming, Problem-solving, Teamwork, Mentoring']];

const mainProject = ['Improving Wikidata support on Programs & Events (WikiEdu) Dashboard',
  'The Dashboard is a complex web app for keeping track of contributions to Wikimedia\'s projects. It was customized mainly for Wikipedia\'s articles, and I was making Wikidata specialized features, so it would be able to work nicely with Wikidata\'s items as well.',
  'Ruby on Rails  |  React',
  'Ruby on Rails  |  React | Redux | Sidekiq',
  [`${dashboard1}`, `${dashboard2}`, `${dashboard3}`],
  'The Dashboard is a complex web app for keeping track of contributions to Wikimedia projects. It supports Wiki education assignments and editing projects, provides data and course management features for groups of editors(instructors, students...) and it has two productions (Wiki Education Dashboard and Programs & Events Dashboard). It was customized mainly for Wikipedia\'s articles, so I was making Wikidata specialized features. I added Wikidata terminology to an interface of the Dashboard and upgraded the process of monitoring changes by generating and displaying Wikidata statistics',
  'https://cutt.ly/mPSF8Gc'];

export {
  skillsList, mainProject,
};
