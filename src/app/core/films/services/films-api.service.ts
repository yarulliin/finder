import { Inject, Injectable } from '@angular/core';
import { API_URL } from '../../../utils/tokens/environment.tokens';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrls } from '../../../utils/interfaces/app.interfaces';

@Injectable({
  providedIn: 'root'
})
export class FilmsApiService {
  constructor(
    @Inject(API_URL) private readonly apiUrl: ApiUrls,
    private readonly httpClient: HttpClient,
  ) { }

  public getFilms(): Observable<Record<string, unknown>> {
    return this.httpClient.get<Record<string, unknown>>(`${this.apiUrl.FILMS}/default/get-films`);
  }
}
