export interface ISearcher {
    name: string,
    prefix: string,
    search: (query: string, limit: number, bannedBooks: string[], timeout: number) => Promise<Book[]>,
    info: () => ISearcherInfo,
    priority: number,
    [x: string]: unknown
}

export interface ISearcherInfo {
    href: string,
    name: string,
}

export interface IDownloader {
    name: string,
    getDownloadUrl: (bookId: string) => string
}

export interface Book {
    name: string,
    downloaderName: string,
    bookId: string,
}

export interface User {
    id: number,
    searchers: string[]
}