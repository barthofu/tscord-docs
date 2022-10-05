import { useEffect, useState } from 'react'
import { type Breakpoint, breakpoints } from '../utils/breakpoints'

const breakpointsSizes = Object.keys(breakpoints).map((key) => parseInt(key))

const useBreakpoint = () => {
	
	const [breakpoint, setBreakPoint] = useState<Breakpoint>('xl')
	const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight })

	const handleResize = () => {
		
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		})
	}

	useEffect(() => {
		
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	useEffect(() => {

		for (const size of breakpointsSizes) {
			if (windowSize.width < size) {
				setBreakPoint(breakpoints[size])
				break
			}
		}
		
	}, [windowSize.width])

	return breakpoint
}

export default useBreakpoint