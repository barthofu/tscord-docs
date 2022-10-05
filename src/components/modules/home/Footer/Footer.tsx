import React from 'react'

import { Divider, Flex, Text } from '@chakra-ui/react'

const Footer: React.FC = () => {

	return (<>
        <Flex 
            flexDir='column'
            alignItems='center'
        >

            <Divider w='40%' opacity='0.5'/>

            <Text m='1em 0 3em 0' opacity='0.8'>
                Made by <a href='https://github.com/barthofu'>barthofu</a> and CodeLab team with ❤️
            </Text>

        </Flex>
    </>)
}

export default Footer