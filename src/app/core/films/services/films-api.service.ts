import { Inject, Injectable } from '@angular/core';
import { API_URL } from '../../../utils/tokens/environment.tokens';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrls } from '../../../utils/interfaces/app.interfaces';
import { createHttpParams } from '../../../utils/functions/http.functions';
import { Film, UpdateFilmMethod } from '../utils/interfaces/films.interfaces';

@Injectable({
  providedIn: 'root'
})
export class FilmsApiService {
  constructor(
    @Inject(API_URL) private readonly apiUrl: ApiUrls,
    private readonly httpClient: HttpClient,
  ) { }

  public getFilms(sessionId: string): Observable<Film[]> {
    const params = createHttpParams({ id: sessionId });

    return this.httpClient.get<Film[]>(`${this.apiUrl.GET_FILMS}/default/get-films`, { params });
  }

  // TODO: remove responseType and change return type to void
  public updateFilm(sessionId: string, method: UpdateFilmMethod, filmName: string): Observable<string> {
    const params = createHttpParams({ id: sessionId, film: filmName, method });

    return this.httpClient.get<string>(`${this.apiUrl.UPDATE_FILM}/default/update-user-films`, { params, responseType: 'text' as 'json' });
  }
}
