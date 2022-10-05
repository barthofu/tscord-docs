import React from 'react'

import { homepageConfig } from '@site/src/config/homepage'

// @ts-ignore
import styles from './Highlights.module.scss'
import useBreakpointValue from '@site/src/hooks/useBreakpointValue'

const HighlightItem: React.FC<{ title: string, description: string }> = ({ title, description }) => {

	return (
		<li className={styles.highlight}  style={useBreakpointValue({
			sm: { maxWidth: '80%' },
			md: {},
		})}>
			<h3>{title}</h3>
			<p>{description}</p>
		</li>
	)
}

const Highlights: React.FC = () => {

	return (
		<ul className={styles.highlights} style={useBreakpointValue({
			sm: { flexDirection: 'column', alignItems: 'center' },
			md: {}
		})}>
			{homepageConfig.highlights.map((highlight, i) => (
				<HighlightItem key={i} title={highlight.title} description={highlight.description} />
			))}
		</ul>
	)
}

export default Highlights