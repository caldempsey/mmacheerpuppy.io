import React, { Component } from 'react';
import DynamicBackgroundFlexbox  from './components/DynamicBackgroundFlexbox/DynamicBackgroundFlexbox'
import BackgroundStyles  from './components/DynamicBackgroundFlexbox/BackgroundStyles'
import "./App.css"
import MenuContainer from './components/MenuContainer/MenuContainer';
      // The approach keeps the styles we choose (React CSS objects de-coupled from the objects themselves, while still giving us a library to choose from bundled with the component).

// Inherits display-flex from the root object properties.
class App extends Component {
  render() {
    // Implicit deconstruction of style tags.
    return (
      <DynamicBackgroundFlexbox style={{...BackgroundStyles("anim_city"), ...{flexDirection: 'column'}}}>
      <div style={{height: '100%'}}>Hello! Let the menu hit the floor, let the menu hit the floor!</div>
      <MenuContainer style={{maxWidth: '80%', minWidth:'40%', justifyContent: 'flex-end', margin: 'auto', textAlign: 'center'}}>
      </MenuContainer>
      </DynamicBackgroundFlexbox>
    );
  }
}

export default App;
