import { ApiUrls } from './app.interfaces';

export interface Environment {
  baseUrl: string;
  production: boolean;
  clientId: string;
  urlsEnum: ApiUrls,
}
