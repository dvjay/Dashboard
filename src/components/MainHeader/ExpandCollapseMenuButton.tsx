import * as React from 'react';
import { IconButton, IButtonProps, IButtonStyles} from 'office-ui-fabric-react';
import styled from 'styled-components';

const IconOutterDiv = styled.div`
  text-decoration: none;
  display: block;
  padding: 1em;
  margin: 0;
`;

const menuButtonStyles: IButtonStyles = {
  icon: {
    margin: 0,
    color: "#ffffff",
    backgroundColor: "#3b3a39"
  }
};

export const ExpandCollapseMenuButton: React.FunctionComponent<IButtonProps> = ({ onClick: handleClick, toggle = false}: IButtonProps) => {
  return (<IconOutterDiv>
    <IconButton iconProps={{ iconName: toggle ? "ChromeBack" : "CollapseMenu" }} onClick={handleClick} styles={menuButtonStyles} />
  </IconOutterDiv>);
};