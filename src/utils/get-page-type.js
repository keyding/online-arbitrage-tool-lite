import { LOC, PAGE_TYPES } from '@/utils'

/**
 * Current page type
 * @returns {number}
 */
export const getPageType = () => {
    const paths = LOC.pathname.split('/')

    if (paths.includes('gp') || paths.includes('dp')) {
        return PAGE_TYPES.PRODUCT
    }

    return PAGE_TYPES.UNKNOWN
}
