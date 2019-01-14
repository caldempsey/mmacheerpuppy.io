import React from 'react';
import { TabNavigation, SidebarTab } from 'evergreen-ui'
export default function MenuContainer(props){
    return (
        <div className="menu_container" style={props.style}>
        <TabNavigation  marginBottom={16}>
        {['Test1', 'Test2', 'Test3'].map((tab, index) => (
          <SidebarTab key={tab} is="a" href="#" id={tab} isSelected={index === 0}>
            {tab}
          </SidebarTab>
        ))}
        </TabNavigation>     
        </div>
    )
}