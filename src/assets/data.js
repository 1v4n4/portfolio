import dashboard1 from './images/dashboard1(2).png';
import dashboard2 from './images/dashboard2(1).png';
import dashboard3 from './images/dashboard3(1).png';
import beach1 from './images/beach1.png';
import beach2 from './images/beach2.png';
import beach3 from './images/beach3.png';
import fueur1 from './images/fueur1.png';
import fueur2 from './images/fueur2.png';
import fueur3 from './images/fueur3.png';
import do1 from './images/do1.png';
import do2 from './images/do2.png';
import do3 from './images/do3.png';
import doit1 from './images/doit1.png';
import doit2 from './images/doit2.png';
import doit3 from './images/doit3.png';
import quark1 from './images/quark1.png';
import quark2 from './images/quark2.png';
import quark3 from './images/quark3.png';

const skillsList = [
  ['LANGUAGES: ', 'Ruby, JavaScript, HTML, CSS, MySQL'],
  ['FRAMEWORKS: ', 'Ruby on Rails, React, Redux, Bootstrap, Sidekiq, Rspec, Capybara'],
  ['TOOLS & METHODS: ', 'GitHub, Heroku, Netlify, Responsive design, TDD, Chrome Dev'],
  ['SKILLS: ', 'Pair-Programming, Problem-solving, Teamwork, Mentoring']];

const mainProject = ['Improving Wikidata support on Programs & Events (WikiEdu) Dashboard',
  'The Dashboard is a complex web app for keeping track of contributions to Wikimedia\'s projects. It was customized mainly for Wikipedia\'s articles, and I was making Wikidata specialized features, so it would be able to work nicely with Wikidata\'s items as well.',
  'Ruby on Rails  |  React',
  'RUBY ON RAILS  |  REACT | REDUX | SIDEKIQ | RSPEC | CAPYBARA',
  [`${dashboard1}`, `${dashboard2}`, `${dashboard3}`],
  ['The Dashboard is a complex web app for keeping track of contributions to all Wikimedia projects. ',
    'It supports Wiki education assignments and editing projects, provides data and course management features for groups of editors(instructors, students...) and it has two productions (Wiki Education Dashboard and Programs & Events Dashboard). ',
    'It was customized mainly for Wikipedia\'s articles, so I was making Wikidata specialized features. ',
    'I added Wikidata terminology to an interface of the Dashboard and upgraded the process of monitoring changes by generating and displaying Wikidata statistics. ',
    'This project was a part of my Outreachy open-source internship.'],
  [['Wiki Education Dashboard', 'https://dashboard.wikiedu.org/'], ['Programs & Events Dashboard', 'https://outreachdashboard.wmflabs.org/'], ['GitHub repo', 'https://github.com/WikiEducationFoundation/WikiEduDashboard'], ['My work', 'https://cutt.ly/mPSF8Gc']]];

const projects = [
  ['Calbeach',
    'Database of beaches in California allows users to make an account and when logged in create a list of their favorite places. ',
    'React | Ruby on Rails',
    'REACT | RUBY ON RAILS | REDUX | BOOTSTRAP | RSPEC',
    [`${beach1}`, `${beach2}`, `${beach3}`],
    ['This mobile app is a database of beaches in California and each of them is presented with data like the name, location, description, available facilities, etc... ',
      'The app allows users to make accounts. When logged in users create a list of their favorite places. ',
      'There are three main pages, a homepage with a list of places, a beach details page, and a favorites page. ',
      'This project includes a React-Redux frontend deployed on GitHub pages and a backend, a Ruby on Rails API deployed on Heroku.'],
    [['Calbeach', 'https://1v4n4.github.io/beach/'], ['Calbeach API', 'https://calbeach.herokuapp.com/'], ['Frontend GitHub repo', 'https://github.com/1v4n4/beach'], ['Backend GitHub repo', 'https://github.com/1v4n4/back']]],
  ['Retro shooter game',
    '"Fueur frei!" is a simple platform space battle with attractive design and awesome music. The aim is to destroy as many enemies as possible',
    'JavaScript | Phaser',
    'JAVASCRIPT | PHASER | JEST | CSS',
    [`${fueur1}`, `${fueur2}`, `${fueur3}`],
    ['This is a retro shooter game where you have to shoot enemies, collect points, and hopefully end up in a Hall of fame. ',
      'It is a simple platform game, a battle of spaceships with one player and three kinds of enemies, giving 20, 50, and 100 points on destroying. ',
      'The player is moving using arrow keys and shoots lasers with Space. The aim is to destroy as many enemies as possible before losing all five lives.  ',
      'The player\'s name can be submitted when the game is over. The best ten results are displayed in a Hall of Fame. ',
      'Music and sounds can be on or off and preference data is kept in local storage. ',
      'The game is named after the song \'Fueuer frei!\'(Fire at will, translated) by German band Rammstein. The same song is used for the soundtrack and the intro image is a picture from the band\'s concert.'],
    [['Try shooting some spaceships! ', 'https://1v4n4.github.io/fueur-frei/'], ['\'Fueur frei!\' GitHub repo', 'https://github.com/1v4n4/fueur-frei']]],
  ['DO - Music news website',
    'App is a news website with a homepage for highlighted articles, five category pages, and a few others. If logged in, users can vote and create/edit/delete articles. ',
    'Ruby on Rails | Bootstrap',
    'RUBY ON RAILS | POSTGRESQL | BOOTSTRAP | CSS | RSPEC ',
    [`${do1}`, `${do2}`, `${do3}`],
    ['\'Do\' is a music news website with a homepage for highlighted articles, five category pages (Cover story, News, Interviews, Live, Reviews), and a few others. ',
      'There are six articles on a homepage, the most popular one (the article which users voted the most), and five latest articles from all categories. ',
      'Each category page has four of the most recent articles, along with their images, titles (truncated if needed), author\'s name, a preview of text, the number of votes, and a Read more link. ',
      'If logged in, the user can vote for articles from this and a few other pages. Visitors can vote only once for each article, but it is not forbidden to support their creations. ',
      'Authors can edit and delete their articles, but not other people\'s. ',
      'The design of this project is based on an idea by Nelson Sakwa. Sample articles and pictures are taken from websites NME, Kerrang!, Guardian, Rolling Stone, Spin, and Loudwire. '],
    [['DO', 'https://glacial-spire-65889.herokuapp.com/'], ['GitHub repo', 'https://github.com/1v4n4/music-news-website']]],
  ['Do it!',
    'Do it is a web application that helps users to organize their lives, by creating, editing, deleting, prioritizing tasks and projects.',
    'JavaScript | Bootstrap',
    'JAVASCRIPT | BOOTSTRAP | CSS | JEST',
    [`${doit3}`, `${doit1}`, `${doit2}`],
    ['Do it is a web application that helps users to organize their lives, by creating, editing, deleting, prioritizing tasks and projects. ',
      'Users can create (edit and delete) project with titles and optional descriptions and an unlimited amount of to-dos. ',
      'Tasks have priority and status tags, as well as deadlines. Status can be changed in the task\'s table, the rest of its content can be edited or whole tasks can be deleted. ',
      'Users can add comments if they want. Users can see today\'s pending tasks in a separate section. ',
      'When completed, the task is removed from the list. ',
      'This whole project is made using vanilla JavaScript.'],
    [['Do it!', 'https://1v4n4.github.io/Do-It/'], ['GitHub repo', 'https://github.com/1v4n4/Do-It']]],
  ['Quark\'s bar',
    'This three pages website is completely made by JavaScript. There is only one HTML element in it - an empty div!',
    'JavaScript | Bootstrap',
    'JAVASCRIPT | BOOTSTRAP | CSS',
    [`${quark1}`, `${quark2}`, `${quark3}`],
    ['Quark\'s bar is a simple restaurant website generated only by JavaScript\'s DOM manipulation. ',
      'It has three pages, Home, Menu (with a list of dishes), and About, but almost no HTML - there is only one empty \'div\'. ',
      'The design of the restaurant app is responsive for all screen sizes. ',
      'The whole project is made using vanilla JavaScript, Bootstrap and a little bit of CSS.'],
    [['Quark\'s bar', 'https://1v4n4.github.io/Quark-s-bar/'], ['GitHub repo', 'https://github.com/1v4n4/Quark-s-bar'],
    ],
  ],
];

export {
  skillsList, mainProject, projects,
};
