import * as React from 'react';
import { Header } from './Header';
import styled from 'styled-components';

const AppHeader = styled.header`
	grid-area: header;
`;

const AppMain = styled.main`
	grid-area: main;
	background-color: blue;
`;

const AppFooter = styled.footer`
	grid-area: footer;
	background-color: gray;
`;

const AppMobile = () => {
	return (<>	
		<AppHeader>
			<Header/>
		</AppHeader>
		<AppMain>Editor</AppMain>
		<AppFooter>Footer</AppFooter>
	</>);
};
	

export default AppMobile;