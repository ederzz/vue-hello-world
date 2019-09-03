const baseUrl = process.env.VUE_APP_BASE_URL

export default function request(url, options = {}) {
    const fetchUrl = `${ baseUrl }${ url }`
    return fetch(fetchUrl, options)
        .then(res => res.json())
}
