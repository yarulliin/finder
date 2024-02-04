import { Urls } from '../enums/urls.enum';

export interface ClientId {
  ClientId: string;
}

export type ApiUrls = typeof Urls;
export type FactoryReturnType = () => void;
