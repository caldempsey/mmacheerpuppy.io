import React from 'react';

export default function Footer(props){
    return (
    <div class="footer" style={props.style}>
    {props.children}
    </div>
    )
}