export const breakpoints = {
	0: 'xs',
	600: 'sm',
	960: 'md',
	1280: 'lg',
	1920: 'xl',
} as const

export type Breakpoint = typeof breakpoints[keyof typeof breakpoints]
