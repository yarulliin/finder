import { inject, Injectable } from "@angular/core";
import { Translation, TranslocoLoader } from "@ngneat/transloco";
import { HttpClient } from "@angular/common/http";
import { BASE_URL } from './utils/tokens/environment.tokens';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    private http: HttpClient = inject(HttpClient);
    private baseUrl: string = inject(BASE_URL);

    public getTranslation(lang: string): Observable<Translation> {
        return this.http.get<Translation>(`${this.baseUrl}/assets/i18n/${lang}.json`);
    }
}
