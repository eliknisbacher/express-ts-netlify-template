import constellateRSS from './ConstellateRSS.js'



export async function fetchNews(sources, sourceNames, update=false) {

    var newsItems

    if (!global?.newsItemCache || update) {
        newsItems = await constellateRSS(sources, sourceNames)
        global.newsItemCache = newsItems
    }
    else {
        newsItems = global.newsItemCache
    }
            
    return newsItems
}

export default fetchNews