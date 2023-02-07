import { jsx } from '@emotion/react'
import JSX = jsx.JSX;

export type Project = {
    title: string;
    image: { src: string, alt: string, sizes?: string, srcset?: string[] };
    description: string;

    links: {
        source: { href: string, content: string | JSX.Element },
        webSite: { href: string, content: string | JSX.Element },
        /* source: LinkProps & { content: string | JSX.Element },
        webSite: LinkProps & { content: string | JSX.Element } */
    }
    isComplete: boolean;
}
