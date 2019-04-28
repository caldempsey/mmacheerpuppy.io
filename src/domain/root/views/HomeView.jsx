/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import ThingsRotation from '../../common/components/ThingsRotation/ThingsRotation';
import Flexbox from '../../common/containers/Flexbox';
import './styles.css';

const thingsILike = [
  'data-engineering',
  'cage-fighting',
  'rengar',
  'ETL',
  'the jvm',
  'golang',
  'event-sourcing',
  'flink',
  'spark',
  'kafka',
  '.nix',
  'aws',
  'contributing to OSS',
  'steak-dinners',
  'react',
  'containers',
  'networking & infrastructure',
  'hario V60',
  'elixir',
  'kubernates',
  'teaching programming over discord',
  'javascript-ninjas',
  'the phoenix web-framework',
  "CSS in JS (don't @ me)"
];

export default function HomeView(props) {
  return (
    <Flexbox
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'rgb(13,20,33)',
        flexDirection: 'column'
      }}
      className="home"
    >
      <Flexbox
        style={{
          margin: 'auto',
          height: '95%',
          width: '95%',
          flexDirection: 'column'
        }}
      >
        <section style={{ minHeight: '20%' }} />
        <section>
          <h1>
            hi i'm mmacheerpuppy@
            <span>
              {String(window.location.hostname)
                .replace(`${window.location.protocol}`, '')
                .replace('www.', '')}
            </span>
          </h1>
        </section>
        <section>
          <h2>
            <span className="faded"> i like&nbsp;</span>
            <ThingsRotation things={thingsILike} />
          </h2>
        </section>
        <section className="links">
          <a className="social-link" href="data" title="Resume">
            <i className="fas fa-lg  fa-user-circle" />
          </a>
          <a className="social-link" href="https://github.com/mmacheerpuppy" title="GitHub">
            <i className="fab fa-lg fa-github" />
          </a>
          <a className="social-link" href="data" title="Analytics">
            <i className="far fa-lg fa-chart-bar circle" />
          </a>
          <a className="social-link" href="https://progdisc.club/" title="Programming Discussions">
            <i className="fab fa-lg fa-discord circle" />
          </a>
        </section>
      </Flexbox>
    </Flexbox>
  );
}
