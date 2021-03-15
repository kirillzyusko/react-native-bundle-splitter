import * as React from 'react';

type ImportReturnType = {};

type BasePreLoadable = {
    require?: () => NodeRequire;
    loader?: () => Promise<ImportReturnType>;
    name?: string;
    group?: string;
    static?: object;
};

// helper, which transforms optional params to mandatory
// useful for creating conditional types - see usage below
// https://stackoverflow.com/a/49725198/9272042
type RequireOnlyOne<T, Keys extends keyof T = keyof T> =
    Pick<T, Exclude<keyof T, Keys>>
    & {
        [K in Keys]-?:
            Required<Pick<T, K>>
            & Partial<Record<Exclude<Keys, K>, undefined>>
    }[Keys];

// it describes the type, where `loader` or `require` should be defined, but not 
// two of them at the same time
export type PreLoadable = RequireOnlyOne<BasePreLoadable, 'require' | 'loader'>;

export type EnhancedPreLoadable = {
    cached: boolean;
    placeholder: React.ElementType | null,
    extract: string,
};

export type Component = PreLoadable & EnhancedPreLoadable & { name: string };