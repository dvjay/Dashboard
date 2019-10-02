import * as React from "react";
import styled, { InterpolationValue } from 'styled-components';

const RootDiv = styled.div`
    font-family: '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif';
    font-weight: 300;
`;

const HeaderDiv = styled.div`
    background-color: "#03a9f4";
    color: "white";
    padding: "16px";
    font-size: "1.5em";
`;

interface IMainContentProps {
    style: object;
    title: string;
    children: React.ReactNode;
}

const MainContent: React.FunctionComponent<IMainContentProps> = props => {
    const RootExDiv = styled(RootDiv)((props.style ? props.style : {}) as InterpolationValue[] & TemplateStringsArray);

    return (
        <RootExDiv>
            <HeaderDiv>{props.title}</HeaderDiv>
            {props.children}
        </RootExDiv>
    );
};

/* MaterialTitlePanel.propTypes = {
  style: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.object
}; */

export default MainContent;