import { either, isEmpty, isNil, match } from "ramda"

export const emptyOrNil = either(isEmpty, isNil)

export const getViewportWidth = (): number => window.innerWidth

export const isDoubleQuoted = (text: string): boolean => !emptyOrNil(match(/^".+"$/, text || ""))
