const parse = (paramsString) => {
    const result = {}

    paramsString.split('&').forEach((item) => {
        const [key, value] = item.split('=')
        result[key] = value
    })

    return result
}

const stringify = (obj) => {
    const strings = []
    for (const key in obj) {
        strings.push(`${key}=${obj[key]}`)
    }

    return strings.join('&')
}

export default {
    parse,
    stringify,
}
