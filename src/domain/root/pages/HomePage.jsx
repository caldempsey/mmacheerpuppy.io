import React, { useState } from 'react';
import Flexbox from '../../common/containers/Flexbox';
import '../common/css/styles.css';
import './styles.css';
import HomeView from '../views/HomeView';

export default function HomePage(props) {
  const [view, selectView] = useState('home');
  return (
    <Flexbox
      style={{
        flexDirection: 'column'
      }}
      className="home"
    >
      <Flexbox className="homePageContent">
        <HomeView />
        <section className="tabs">
          <a className="tab-link" href="data" title="Resume">
            <i className="fas fa-lg  fa fa-user" />
          </a>
          <a className="tab-link" href="https://github.com/mmacheerpuppy" title="GitHub">
            <i className="fab fa-lg fa-github" />
          </a>
          <clickable
            className="tab-link clickable"
            title="Analytics"
            onClick={() => selectView('analytics')}
          >
            <i className="far fa-lg fa fa-signal" />
          </clickable>
          <a className="tab-link" href="https://progdisc.club/" title="Programming Discussions">
            <i className="fab fa-lg fa-discord circle" />
          </a>
        </section>
      </Flexbox>
    </Flexbox>
  );
}
