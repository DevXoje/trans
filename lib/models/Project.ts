import { LinkProps } from 'next/link'
import { jsx } from '@emotion/react'
import JSX = jsx.JSX;

export type Project = {
    title: string;
    image:{src:string, alt:string};
    description:string;

    links:{
        source:LinkProps&{content:string|JSX.Element},
        webSite:LinkProps&{content:string|JSX.Element}
    }

}
