import React from 'react'

import Link from '@docusaurus/Link'

import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

// @ts-ignore
import styles from './Header.module.scss'

export default function Header() {

	const {siteConfig} = useDocusaurusContext()

	return (
	  <header className={styles.heroBanner}>
		<div className="container">
		
			<img className={styles.logo} src="img/tscord-template-icon.png" alt="Logo TSCord" />
			<h1 className="hero__title">{siteConfig.title}</h1>
			<p className="hero__subtitle">{siteConfig.tagline}</p>

			<div className={styles.buttons}>
				<Link
					className={`button button--secondary button--lg ${styles.button}`}
					to="/docs/bot/get-started/installation"
				>
					Get Started →
				</Link>
			</div>
		</div>
	  </header>
	)
}
