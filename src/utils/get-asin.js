/**
 * Get Asin from url
 * @returns {string} asin
 */
export const getAsin = () => {
    const paths = window.location.pathname.split('/')

    if (paths.includes('dp')) {
        const dpIndex = paths.findIndex((val) => val === 'dp')
        return paths[dpIndex === -1 ? dpIndex : dpIndex + 1]
    }

    if (paths.includes('gp')) {
        const gpIndex = paths.findIndex((val) => val === 'gp')
        return paths[gpIndex === -1 ? gpIndex : gpIndex + 2]
    }

    return ''
}
