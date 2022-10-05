import React from 'react'

import { Text, Box, Container, GridItem, Heading, SimpleGrid, VStack, Flex, Img } from "@chakra-ui/react"
import Link from '@docusaurus/Link'
import PopBox from "@site/src/components/shared/PopBox"
import useBreakpointValue from '@site/src/hooks/useBreakpointValue'

type LandingSectionProps = {
    title: string
    image: string
    alt?: string
    isImgFirst?: boolean
    children?: React.ReactNode
    link?: string
}

const LandingSection: React.FC<LandingSectionProps> = ({ title, image, alt, isImgFirst, children, link }) => {

	return (<>
        <Box as="section" zIndex="banner" mb='4em'>
            <Container position="relative" maxW="container.lg" px={{ base: 8, md: 12 }}>
                <PopBox>
                    <SimpleGrid
                        columns={12}
                        rowGap={useBreakpointValue({ sm: 8, md: 0 })}
                        columnGap={useBreakpointValue({ sm: 0, md: 10, lg: 16 })}
                        w="full"
                    >
                        <GridItem
                            colSpan={useBreakpointValue({ sm: 12, md: 6, lg: 5 })}
                            order={useBreakpointValue({ sm: 1, md: isImgFirst ? 2 : 1 })}
                            w="full"
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                        >
                            <VStack
                                spacing={4}
                                py={4}
                                textAlign={useBreakpointValue({ sm: "center", md: "left" })}
                                maxW="330px"
                                alignItems={useBreakpointValue({ md: "start" })}
                                mx={useBreakpointValue({ sm: "auto", md: "unset" })}
                                css={useBreakpointValue({ 
                                    md: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }, 
                                    lg: {}
                                })}
                            >

                                <Heading
                                    as="h3"
                                    fontSize={useBreakpointValue({ sm: "2xl", md: "3xl", lg: "4xl" })}
                                >
                                    {title}
                                </Heading>

                                {children ? 
                                    <Text
                                        fontSize={useBreakpointValue({ sm: "lg", lg: "xl" })}
                                        fontWeight="semibold"
                                        color='white.200'
                                        opacity='0.6'
                                        lineHeight="125%"
                                        w="full"
                                    >
                                    {children}
                                    </Text>
                                : null}

                                {link && (
                                    <Link
                                        style={{
                                            marginTop: '2em'
                                        }}
                                        className={`button button--primary button--xs`}
                                        to={link}
                                    >
                                        Get Started
                                    </Link>
                                )}

                            </VStack>
                        </GridItem>

                        <GridItem
                            colSpan={useBreakpointValue({ sm: 12, md: 6, lg: 7 })}
                            order={useBreakpointValue({ sm: 2, md: isImgFirst ? 1 : 2 })}
                            w="full"
                            maxW={useBreakpointValue({ sm: "70%", md: "full" })}
                            justifySelf="center"
                        >
                            <Flex justifyContent='center'>
                                <Flex 
                                    ml={useBreakpointValue({ md: 'unset', lg: 'auto' })}
                                    mt={useBreakpointValue({ md: '2em', lg: 'unset' })}
                                    width={useBreakpointValue({ sm: "80%", md: "full" })} 
                                    position="relative"
                                    justifyContent={useBreakpointValue({
                                        md: 'center',
                                        lg: isImgFirst ? 'flex-start' : 'flex-end'
                                    })}
                                >
                                    <Img
                                        w="80%"
                                        src={image}
                                        alt={alt || title}
                                        borderRadius='12px'
                                        boxShadow='var(--chakra-shadows-xl)'
                                    />
                                </Flex>
                            </Flex>
                        </GridItem>

                    </SimpleGrid>
                </PopBox>
            </Container>
        </Box>
    </>)
}

export default LandingSection