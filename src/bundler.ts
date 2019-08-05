import { Component } from './interface';

type Loadable = {
  [key: string]: Component
}

export const mapLoadable: Loadable = {};