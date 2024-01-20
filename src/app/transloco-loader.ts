import { inject, Injectable } from "@angular/core";
import { Translation, TranslocoLoader } from "@ngneat/transloco";
import { HttpClient } from "@angular/common/http";
import { BASE_URL } from './utils/tokens/environment.tokens';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    private http = inject(HttpClient);
    private baseUrl = inject(BASE_URL);

    getTranslation(lang: string) {
        return this.http.get<Translation>(`${this.baseUrl}/assets/i18n/${lang}.json`);
    }
}
