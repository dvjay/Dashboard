import * as React from 'react';
import { IButtonProps} from 'office-ui-fabric-react';
import {AnyStyledComponent} from 'styled-components';
import { TweenMax } from 'gsap';
import { sideNavCloseGTC, sideNavOpenGTC } from 'src/global-styled/app';
import ToggleIconButton from 'src/components/ToggleIconButton';

type ToggleMenuProps = Partial<IButtonProps> & { appSectionElem: React.RefObject<AnyStyledComponent>};

class ToggleMenu extends React.Component<ToggleMenuProps> {
  constructor(props: ToggleMenuProps) {
    super(props);
    this.state = {
      menuOpen: true
    };
  }
  
  sidebarToggle = (toggle: boolean, appSectionElem: React.RefObject<AnyStyledComponent>) => {
    TweenMax.to(appSectionElem.current as any,
      0.2, {
      gridTemplateColumns: toggle?  sideNavOpenGTC : sideNavCloseGTC
      }
    );
  }

  componentDidUpdate(): void { 
    let { toggle = false, appSectionElem = React.createRef<AnyStyledComponent>()} = this.props;
    this.sidebarToggle(toggle, appSectionElem);
  }

  render() {
    const { onClick: handleClick = () => null, toggle = false} = this.props;
    return (<ToggleIconButton toggle={toggle} 
                      onClick= {(e)=> {
                                      handleClick(e);
                                    }
                      }
                      iconA={"ChromeBack"} 
                      iconB={"CollapseMenu"}/>);
  }

}

export default ToggleMenu;