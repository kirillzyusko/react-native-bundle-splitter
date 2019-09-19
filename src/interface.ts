import * as React from 'react';

export type PreLoadable = {
    name?: string;
    require: () => ({});
    group?: string;
    static?: object;
};

export type EnhancedPreLoadable = {
    cached: boolean;
    placeholder: React.ElementType | null,
    extract: string,
};

export type Component = PreLoadable & EnhancedPreLoadable & { name: string };