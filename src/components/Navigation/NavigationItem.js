import React from 'react';

export default function NavigationItem(props){
    return (
    <div href={props.href} style={props.style}>
    {props.children}
    </div>
    )
}
