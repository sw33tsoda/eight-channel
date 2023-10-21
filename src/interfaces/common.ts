import type { AdditionalClasses } from '@/types';
import { ReactNode } from 'react';

export interface IAdditionalClasses {
    readonly additionalClasses?: AdditionalClasses;
};

export interface IReactPropsWithChildren {
    children?: ReactNode;
}