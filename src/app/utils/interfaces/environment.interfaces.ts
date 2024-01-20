import { ApiUrls } from './app.interfaces';

export interface Environment {
  production: boolean;
  clientId: string;
  urlsEnum: ApiUrls,
}
