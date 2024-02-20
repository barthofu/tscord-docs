import React from 'react'

import BrowserOnly from '@docusaurus/BrowserOnly'
import Layout from '@theme/Layout'
import Header from '@site/src/components/modules/home/Header/Header'
import Highlights from '@site/src/components/modules/home/Highlights/Highlights'
import Features from '@site/src/components/modules/home/Features/Features'
import LandingSection from '@site/src/components/modules/home/LandingSection/LandingSection'

import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

// @ts-ignore
import styles from './index.module.scss'
import Heading from '../components/shared/Heading'
import Footer from '../components/modules/home/Footer/Footer'

export default function Home(): JSX.Element {

	const {siteConfig} = useDocusaurusContext()

	return (
		<Layout
			title={`${siteConfig.title}`}
			description="Description will go into a meta tag in <head />"
		>

			<BrowserOnly>
				{() => <>
				
					<Header />
					
					<main className={styles.main}>
						
						<Highlights />

						<section>

							<Heading>Key Features</Heading>

							<Features />

						</section>


						<section>

							<Heading>Other components</Heading>

							<LandingSection 
								title='Showcase Website'
								image='img/preview_website.png'
								alt='Showcase website preview'
								link='/docs/website'
							>
								Ever wanted an easy-to-setup and beautiful yet minimalist showcase website for your discord bot?<br />We have it for you!
							</LandingSection>

							<LandingSection 
								title='Dashboard'
								image='img/preview_dashboard.png'
								alt='Dashboard preview'
								link='/docs/dashboard'
								isImgFirst={true}
							>
								Manage, monitor or even visualize useful statistics of your TSCord-based bots with our dashboard
							</LandingSection>

						</section>

					</main>
					
					<Footer />

				</>}
			</BrowserOnly>
		
		</Layout>
	);
}