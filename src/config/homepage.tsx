import { faDocker } from "@fortawesome/free-brands-svg-icons"
import { faPencil, faUserSecret, faArrowsToEye, faBomb, faBoxesPacking, faBug, faCalendarDays, faChartLine, faCode, faCodeCompare, faDatabase, faFileArrowUp, faGlobe, faPaste, faPuzzlePiece, faShield, faShieldHalved, faSitemap, faRotate } from "@fortawesome/free-solid-svg-icons"

export const homepageConfig: HomepageConfigType = {

    highlights: [
        {
            title: 'Easy to Use',
            description: 'Everything is done to improve the developer experience. The project is built with the latest technologies and is easy to use.',
        },
        {
            title: 'Boilerplate ready',
            description: 'Create a new project with a single command. No need to worry about the setup.',
        },
        {
            title: 'Fully-featured',
            description: 'Bundles with all the features that a medium to large Discord bot needs.',
        },
    ],

    features: [
        {
            title: 'Commands',
            icon: faCode,
            color: '#03a9f4',
            link: '/docs/bot/discord/interactions'
        },
        {
            title: 'Guards',
            icon: faShieldHalved,
            color: '#43a047',
            link: '/docs/bot/discord/guards'
        },
        {
            title: 'Plugins',
            icon: faPuzzlePiece,
            color: '#0288d1',
            link: '/docs/plugins'
        },
        {
            title: 'API',
            icon: faSitemap,
            color: '#fbc02d',
            link: '/docs/bot/features/API'
        },
        {
            title: 'Databases',
            icon: faDatabase,
            color: '#ffca28',
            link: '/docs/bot/features/database/configuration'
        },
        {
            title: 'Custom events',
            icon: faArrowsToEye,
            color: '#ff7043',
            link: '/docs/bot/features/custom-events'
        },
        {
            title: 'HMR',
            icon: faRotate,
            color: '#644b9f',
            link: '/docs/bot/features/hmr'
        },
        {
            title: 'Error handling',
            icon: faBomb,
            color: '#ef5350',
            link: '/docs/bot/features/error-handler'
        },
        {
            title: 'Localization (i18n)',
            icon: faGlobe,
            color: '#5c6bc0',
            link: '/docs/bot/features/internationalization'
        },
        {
            title: 'Reactive store',
            icon: faBoxesPacking,
            color: '#00acc1',
            link: '/docs/bot/features/local-store'
        },
        {
            title: 'Logger',
            icon: faPaste,
            color: '#546e7a',
            link: '/docs/bot/features/logger'
        },
        {
            title: 'Scheduler',
            icon: faCalendarDays,
            color: '#4caf50',
            link: '/docs/bot/features/scheduler'
        },
        {
            title: 'Statistics',
            icon: faChartLine,
            color: '#fbc02d',
            link: '/docs/bot/features/stats'
        },
        {
            title: 'Assets upload',
            icon: faFileArrowUp,
            color: '#009688',
            link: '/docs/bot/features/assets'
        },
        {
            title: 'Docker',
            icon: faDocker,
            color: '#0098d5',
            link: '/docs/bot/devops/docker'
        },
        {
            title: 'CI/CD',
            icon: faCodeCompare,
            color: '#f26100',
            link: '/docs/bot/devops/ci-cd'
        },
        {
            title: 'Debug config',
            icon: faBug,
            color: '#a7b1b5',
            link: '/docs/bot/devops/debug-with-vscode'
        },
        {
            title: 'Linting & Formatting',
            icon: faPencil,
            color: '#4caf50',
            link: '/docs/bot/devops/linting-and-formatting'
        },
        {
            title: 'Typesafe env',
            icon: faUserSecret,
            color: '#f44336',
            link: '/docs/bot/features/environment-variables'
        }

    ]

}