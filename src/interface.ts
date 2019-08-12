import React from 'react';

export type PreLoadable = {
    name?: string;
    require: () => ({});
    // priority: number;
    group?: string;
    static?: object;
};

export type EnhancedPreLoadable = {
    cached: boolean;
    placeholder: React.ReactNode,
    extract: string,
};

export type Component = PreLoadable & EnhancedPreLoadable & { name: string };