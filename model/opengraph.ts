export interface OpenGraph {
    site_name: string,
    title: string,
    locale?: string,
    type?: string,
    url: string,
    image?: OpenGraphImage,
    description: string,
}

export interface OpenGraphImage {
    url: string,
    type: string,
    height: string,
    width: string,
    alt: string
}