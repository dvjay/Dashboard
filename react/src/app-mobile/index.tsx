import * as React from 'react';
import { Header } from './Header';
import styled from 'styled-components';
import Main from "./Main";
import {SidebarToggleProvider} from "../components/SidebarToggleContext";

const AppHeader = styled.header`
	grid-area: header;
`;

const AppMain = styled.main`
	grid-area: main;
	background-color: blue;
	position: relative;
`;

const AppFooter = styled.footer`
	grid-area: footer;
	background-color: gray;
`;

const AppMobile = () => {
	return (<SidebarToggleProvider>
				<AppHeader>
					<Header/>
				</AppHeader>
				<AppMain>
					<Main></Main>
				</AppMain>
				<AppFooter>Footer</AppFooter>
			</SidebarToggleProvider>);
};
	

export default AppMobile;