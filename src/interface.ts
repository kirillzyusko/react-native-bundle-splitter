export type PreLoadable = {
    name: string;
    require: () => ({});
    priority: number;
    group: string;
    static?: object;
};