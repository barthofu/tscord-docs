import React from 'react'

type HeadingProps = {
    children: React.ReactNode
}

const Heading: React.FC<HeadingProps> = ({ children, ...rest }) => {

	return (<>
        <h2
            style={{
                fontSize: '1.75rem',
                textAlign: 'center',
                marginBottom: '3em',
            }}
        >
            {children}
        </h2>
    </>)
}

export default Heading