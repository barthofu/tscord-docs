import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SimpleGrid } from '@chakra-ui/react'

import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { homepageConfig } from '@site/src/config/homepage'

// @ts-ignore
import styles from './Features.module.scss'
import useBreakpointValue from '@site/src/hooks/useBreakpointValue'
import PopBox from '@site/src/components/shared/PopBox'

const FeatureItem: React.FC<Feature> = ({ title, icon, color, link }) => {

	return (
		<PopBox>
			<a href={link ? `${useDocusaurusContext().siteConfig.baseUrl + link.replace(/^\//g, '')}` : '#'} className={`col-demo ${styles.feature}`}>
				<div className={styles.feature__icon}>
					<FontAwesomeIcon icon={icon} size='2x' color={color}/>
				</div>
				<p className={styles.feature__title}>{title}</p>
			</a>
		</PopBox>
	)
}

const itemsPerRow = 4

const Features: React.FC = () => {

	return (<>

		<SimpleGrid 
			className={styles.features}
			columns={useBreakpointValue({ sm: 1, md: 2, lg: 3, xl: 4 })} 
			spacing={10}
		>
			{homepageConfig.features.map((feature, i) => (
				<FeatureItem key={i} {...feature} />
			))}
		</SimpleGrid>
	</>)
}

export default Features