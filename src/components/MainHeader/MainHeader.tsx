import * as React from 'react';
import styled from 'styled-components';
import { ExpandCollapseMenuButton } from './ExpandCollapseMenuButton';

export interface IMainHeaderState {
  menuOpen: boolean;
}

export class MainHeader extends React.Component<{}, IMainHeaderState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }
    
  handleMenuClick() {
    this.setState({menuOpen:!this.state.menuOpen});
  }
  
  render() {
    const MainHeaderUl = styled.ul`
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
      <MainHeaderUl>
        <li><ExpandCollapseMenuButton toggle={this.state.menuOpen} onClick={()=>this.handleMenuClick()} /></li>
        <li><div>Logo</div></li>
      </MainHeaderUl>
    )
  }
}