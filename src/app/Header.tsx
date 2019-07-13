import * as React from 'react';
import styled, {AnyStyledComponent} from 'styled-components';
import ToggleMenu from './Header/ToggleMenu';
import { TransitionGroup } from 'react-transition-group';

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

  handleMenuClick = () => {
    this.setState({menuOpen: !this.state.menuOpen});
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
        <li>
          <TransitionGroup component={null} >
            <ToggleMenu toggle={this.state.menuOpen} 
                        onClick={this.handleMenuClick} 
                        appSectionElem={this.props.appSectionElem}/>
          </TransitionGroup>
        </li>
        <li>
          <div>Logo</div>
        </li>
      </HeaderUl>
    )
  }
}