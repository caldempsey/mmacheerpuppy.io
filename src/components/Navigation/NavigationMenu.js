import React from 'react';

export default function NavigationMenu(props){
    return (
    <div class="navigation_menu" style={props.style}>
    {props.children}
    </div>
    )
}