import * as React from 'react';
import ToggleIconButton from 'src/components/ToggleIconButton';
import ISidebarToggle from '../../interfaces/ISidebarToggle';

interface ToggleMenuProps { sideBarContext: ISidebarToggle };
//interface ToggleMenuState { menuOpen: boolean };

class ToggleMenu extends React.Component<ToggleMenuProps, {}> {
  constructor(props: ToggleMenuProps) {
    super(props);
  }

  componentDidUpdate(): void { 
    this.props.sideBarContext.toggle();
  }

  handleClick = () => {
    this.props.sideBarContext.setIsExpanded(!this.props.sideBarContext.isExpanded);
  }

  render() {
    return (<ToggleIconButton toggle={this.props.sideBarContext.isExpanded} 
                      onClick= {this.handleClick}
                      iconA={"ChromeBack"} 
                      iconB={"CollapseMenu"}/>);
  }

}

export default ToggleMenu;