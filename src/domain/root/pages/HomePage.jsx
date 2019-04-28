import React from 'react';
import Flexbox from '../../common/containers/Flexbox';
import HomeView from '../views/HomeView';

export default function HomePage() {
  return (
    <Flexbox
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div style={{ height: '100%' }}>
        {/** Placeholder div while developing * */}
        <HomeView />
        {/** Placeholder div while developing Dashboard View goes below * */}
        <div />
      </div>
    </Flexbox>
  );
}
