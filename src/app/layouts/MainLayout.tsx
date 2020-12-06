import React from 'react'
import { StyledLayout } from '../../styles/common.styles'
import CookieBanner from '../components/CookieBanner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'

interface MainLayoutProps {
	children: React.ReactNode
	featuredStream: string
}

const MainLayout: React.FunctionComponent<MainLayoutProps> = ({ children, featuredStream }: MainLayoutProps) => {
	return (
		<StyledLayout>
			<CookieBanner />
			<Header featuredStream={featuredStream} />
			<Main>{children}</Main>
			<Footer featuredStream={featuredStream} />
		</StyledLayout>
	)
}

export default MainLayout
