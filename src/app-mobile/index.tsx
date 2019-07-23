import * as React from 'react';
import { Header } from './Header';
import styled from 'styled-components';

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

const AppMobile = () => {
	return (<>
		<AppHeader>
			<Header/>
		</AppHeader>
		<AppMain tabIndex={-1}>Editor</AppMain>
		<AppSideNav>
			<div>
				I am a floated element in Appile.
			</div>
		</AppSideNav>
		<AppFooter>Footer</AppFooter>
	  </>);
};
	

export default AppMobile;