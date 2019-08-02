import { PreLoadable } from './interface';

type Loadable = {
  [key: string]: PreLoadable
}

export const mapLoadable: Loadable = {};