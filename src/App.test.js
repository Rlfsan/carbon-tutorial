import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './components/TutorialHeader/_tutorial-header.scss';
import './content/LandingPage/_landing-page.scss';
import './content/RepoPage/_repo-page.scss';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
