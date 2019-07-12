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

type ToggleIconButtonProps = Partial<IButtonProps> & { iconA: string, iconB: string};

const ToggleIconButton: React.FunctionComponent<ToggleIconButtonProps> = 
                      ({ onClick: handleClick = () => null, toggle = false, iconA = "Checkbox", iconB = "CheckboxFill"}: ToggleIconButtonProps) => {
  return (<IconOutterDiv>
    <IconButton iconProps={{ iconName: toggle ? iconA : iconB }} onClick={handleClick} styles={menuButtonStyles} />
  </IconOutterDiv>);
};

export default ToggleIconButton;