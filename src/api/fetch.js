export const request = (url, config = {}) => {
    const _config = {
        ...config,
        credentials: 'include',
    }

    return fetch(new Request(url, _config))
}
