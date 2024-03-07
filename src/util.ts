export const assetURL = (path: string) => new URL('../assets' + path, import.meta.url).href;

export const getQueryParams = (): string[] => {
    console.log("location: ", window.location.href)
    const queryParams: URLSearchParams = new URLSearchParams(window.location.search);

    if (queryParams.has('ids')) {
        const paramString: string = queryParams.get('ids') ?? ''

        return paramString.split(',') ?? []
    } else {
        return []
    }
}

export const updateQueryParams = (ids: string[]) => {
    const url = new URL(window.location.href)
    url.searchParams.set('ids', ids.join(','))
    url.search = decodeURIComponent(url.search)

    console.log("setting query params to: ", url.search)
    window.history.pushState({}, '', url)
}