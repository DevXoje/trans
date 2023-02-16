import { ImageProps } from 'next/image'

export type Experience = {
    title: string;
    enterprise?: string;
    description: string;

    otherTime: {
        to: Date,
        from: Date
    }
    thumbnail: ImageProps;
    address: {
        city: string,
        state: string,
        country: string
    };
    shift?: string;
}
