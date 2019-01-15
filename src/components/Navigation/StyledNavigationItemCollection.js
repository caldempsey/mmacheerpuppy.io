import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';

/**
 * Responsible for taking a set of NavigationItems and return all of its children with an applied style, enforcing sweeping changes!
 */
export default function StyledNavigationItemCollection(props){
    return(
        <StyledNavigationItemCollection>
        {props.navigationItems.map(navItem => (
          // Where NavigationItems can contain styles and textStyles props.textStyle of the StyledNavigationItemCollection component
          // as their source of truth.
          <NavigationItem href={navItem.name} style={props.style} textStyle={props.textStyle} />
        ))}
      </StyledNavigationItemCollection>
    )
}

