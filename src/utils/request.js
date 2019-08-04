export default function request(url, options = {}) {
    return fetch(url, options)
        .then(res => res.json())
}
