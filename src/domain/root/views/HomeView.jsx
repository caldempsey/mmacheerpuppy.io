/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import ThingsRotation from '../../common/components/ThingsRotation/ThingsRotation';
import Flexbox from '../../common/containers/Flexbox';
import './styles.css';
import SendHostDetails from '../../../api/HostInfo/SendHostDetails';

const things = [
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
  'hario V60 coffee',
  'elixir',
  'kubernates',
  'teaching programming over discord',
  'javascript-ninjas',
  'the phoenix web-framework',
  "CSS in JS (don't @ me)"
];

export default function HomeView(props) {
  // Intialise localhost.ip to location ip and update on a successful fetch request.
  const [thingsILike, updateThingsILike] = useState(things);
  const [hostDetails, updateHostDetails] = useState({
    ip: String(window.location.hostname)
      .replace(`${window.location.protocol}`, '')
      .replace('www.', ''),
    region: 'Canada'
  });
  useEffect(() => {
    SendHostDetails(updateHostDetails);
  }, []);
  useEffect(() => {
    updateThingsILike(things.concat([hostDetails.region]));
  }, [hostDetails]);
  return (
    <Flexbox
      style={{
        flexDirection: 'column'
      }}
      className="home"
    >
      <Flexbox
        style={{
          margin: 'auto',
          height: '100%',
          width: '100%',
          padding: '4rem',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          boxSizing: 'border-box',
          overflow: 'hidden',
          wordWrap: 'break-word'
        }}
      >
        <section>
          <h1 className="title">
            hi my name is
            <p /> mmacheerpuppy@
            <span>{hostDetails.ip}</span>
          </h1>
        </section>
        <section>
          <h2 className="subtitle">
            <span className="faded"> i like&nbsp;</span>
            <ThingsRotation things={thingsILike} />
          </h2>
        </section>
        <section className="links">
          <a className="social-link" href="data" title="Resume">
            <i className="fas fa-lg  fa fa-user" />
          </a>
          <a className="social-link" href="https://github.com/mmacheerpuppy" title="GitHub">
            <i className="fab fa-lg fa-github" />
          </a>
          <a className="social-link" href="data" title="Analytics">
            <i className="far fa-lg fa fa-signal" />
          </a>
          <a className="social-link" href="https://progdisc.club/" title="Programming Discussions">
            <i className="fab fa-lg fa-discord circle" />
          </a>
        </section>
      </Flexbox>
    </Flexbox>
  );
}
