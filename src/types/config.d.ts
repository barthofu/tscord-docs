type Feature = {
    title: string
    icon: import('@fortawesome/fontawesome-svg-core').IconProp
    color: string,
    link?: string
}

type highlight = {
    title: string
    description: string
}

type HomepageConfigType = {

    highlights: Highlight[]

    features: Feature[]
}