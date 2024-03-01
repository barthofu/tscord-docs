import React from 'react'

import Link from '@docusaurus/Link'

import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

// @ts-ignore
import styles from './Header.module.scss'

export default function Header() {

	const {siteConfig} = useDocusaurusContext()

	return (
	  <header className={styles.heroBanner}>
		<div className={`container ${styles.centered}`}>
		
			<img className={styles.logo} src="img/tscord-template-icon.png" alt="Logo TSCord" />
			<h1 className="hero__title">{siteConfig.title}</h1>
			<p className="hero__subtitle">{siteConfig.tagline}</p>
			
			<div className={styles.hstack} style={{ marginTop: '1em' }}>
				<div className={styles.codeBlock}>
					<pre>
						<code>
							<span className={styles.command}>npx tscord init bot my-bot</span>
						</code>
					</pre>
				</div>

				<div className={styles.buttons}>
					<Link
						className={`button button--primary button--lg ${styles.button}`}
						to="/docs/bot/get-started/installation"
					>
						Get Started →
					</Link>
				</div>
			</div>
		</div>
	  </header>
	)
}
