import * as React from 'react';
import ToggleIconButton from 'src/components/ToggleIconButton';
import {useSidebarToggleContext} from '../../components/SidebarToggleContext';
import ISidebarProps from '../../interfaces/ISidebarProps';

const ToggleMenu: React.FunctionComponent = () => {
  const context = useSidebarToggleContext() as ISidebarProps;
  
  return (<ToggleIconButton toggle={context.open} 
                            onClick= {context.toggle}
                            iconA={"ChromeBack"} 
                            iconB={"CollapseMenu"}/>);
}

export default ToggleMenu;