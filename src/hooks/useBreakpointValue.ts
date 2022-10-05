import { useEffect, useState } from "react"
import { breakpoints, type Breakpoint } from "../utils/breakpoints"
import useBreakpoint from "./useBreakpoint"

const useBreakpointValue = <T>(values: Partial<{ [key in Breakpoint]: T }>) => {

    const windowBreakpoint = useBreakpoint()
    const [value, setValue] = useState<T | undefined>()

    useEffect(() => {

        const breakpointIndex = Object.values(breakpoints).findIndex((key) => key === windowBreakpoint)
        const belowBreakpoints = Object.values(breakpoints).slice(0, breakpointIndex)
        const aboveBreakpoints = Object.values(breakpoints).slice(breakpointIndex)

        const computedValue = 
            values[windowBreakpoint] ||
            [].concat(belowBreakpoints).reverse().map((key) => values[key]).filter(value => value)?.[0] ||
            [].concat(aboveBreakpoints).map((key) => values[key]).filter(value => value)?.[0]

        setValue(computedValue)

    }, [windowBreakpoint])

    return value
}

export default useBreakpointValue