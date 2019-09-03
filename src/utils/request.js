const baseUrl = 'http://localhost:7002/'

export default function request(url, options = {}) {
    const fetchUrl = `${ baseUrl }${ url }`
    return fetch(fetchUrl, options)
        .then(res => res.json())
}
