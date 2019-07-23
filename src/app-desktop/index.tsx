import * as React from 'react';
import styled from 'styled-components';
import { Header } from './Header';

export const AppHeader = styled.header`
	grid-area: header;
`;

export const AppSideNav = styled.nav`
	grid-area: 2 /1 / span 2/ span 3;
	background-color: green;
	width: 100%;
	height: 100%;
	min-width: 200px;
	place-self: flex-end;
`;

export const AppMain = styled.main`
	grid-area: main;
	background-color: blue;
`;

export const AppFooter = styled.footer`
	grid-area: footer;
	background-color: gray;
`;

const AppDesktop = () => {
	return (<>
				<AppHeader>
					<Header/>
				</AppHeader>
				<AppMain>Editor</AppMain>
				<AppSideNav>
					<div>
						I am a floated element in AppDesktop.
					</div>
				</AppSideNav>
				<AppFooter>Footer</AppFooter>
			</>);
};
	

export default AppDesktop;