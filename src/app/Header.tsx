import * as React from 'react';
import { TweenMax } from 'gsap';
import styled, {AnyStyledComponent} from 'styled-components';
import ToggleMenu from './Header/ToggleMenu';
import { sideNavCloseGTC, sideNavOpenGTC } from 'src/global-styled/app';

export interface IHeaderProps {
  appSectionElem: React.RefObject<AnyStyledComponent>;
}
export interface IHeaderState {
  menuOpen: boolean;
}

export class Header extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }

  handleMenuClick() {
    const menuOpened = !this.state.menuOpen;
    this.setState({menuOpen: menuOpened}, () => {
      TweenMax.to(this.props.appSectionElem.current as any,
        0.2, {
        gridTemplateColumns: this.state.menuOpen? sideNavOpenGTC : sideNavCloseGTC
        }
      );
    });
  }
  
  render() {
    const HeaderUl = styled.ul`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      background: deepskyblue;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
    `;
    
    return(
      <HeaderUl>
        <li><ToggleMenu toggle={this.state.menuOpen} 
                        onClick={()=>this.handleMenuClick()} 
                        iconA={"ChromeBack"} 
                        iconB={"CollapseMenu"}/>
        </li>
        <li>
          <div>Logo</div>
        </li>
      </HeaderUl>
    )
  }
}