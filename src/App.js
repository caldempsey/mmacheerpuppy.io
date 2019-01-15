import React, { Component } from 'react';
import DynamicBackground  from './components/DynamicBackground/DynamicBackground'
import BackgroundStyles  from './components/DynamicBackground/BackgroundStyles'
import "./App.css"
import NavigationMenu from './components/Navigation/NavigationMenu';
import NavigationItem from './components/Navigation/NavigationItem';
import NavigationStyles from './components/Navigation/NavigationStyles';
import Footer from './components/Footer/Footer';
import FooterStyles from './components/Footer/FooterStyles';
      // The approach keeps the styles we choose (React CSS objects de-coupled from the objects themselves, while still giving us a library to choose from bundled with the component).

// Inherits display-flex from the root object properties.
class App extends Component {
  render() {
    // Implicit deconstruction of style tags within the flexbox (column descending).
    // Get system timee and render page using switch statement. 
    
    return (
      /** Use flexboxContainers where we will organise our flexbox elements, the dynamic background and footer (remember that how our content is organised must be well-defined) 
       * These flexbox containers are also flexboxes themselves which we use for internal... flexboxing. */  
      <div style={{...customStyles.flexboxContainer}}>
      <div style={{...customStyles.flexboxContainer}}>
      <DynamicBackground style={{...BackgroundStyles("eightbit_morning")}}>
      <NavigationMenu 
      style={{...NavigationStyles("morning"), ...customStyles.navigationMenu}}>
        <NavigationItem>
          Navigation Menu Item
        </NavigationItem>
      </NavigationMenu>
      {/** Placeholder div while developing **/}
      <div style={{height: '100%'}}></div>
      {/** Placeholder div while developing **/}
      </DynamicBackground>
      </div>
      <Footer style={{...FooterStyles("light"), ...customStyles.footer}} />
      </div>
    );
  }
}
const customStyles = {
  flexboxContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
  },
  navigationMenu: {
    width: '300px',
    margin: 'auto', 
    textAlign: 'center'
  },
  footer: {
    maxHeight: '30%',
    justifyContent: 'flex-end',
  },  
}


export default App;
