import { Injectable } from '@angular/core';
import { Auth, AuthenticationResult, AuthResult } from '../interfaces/auth.interfaces';
import { AuthApiService } from './auth-api.service';
import { map, Observable, tap } from 'rxjs';
import { LocalStorageService } from '../../../utils/services/local-storage/local-storage.service';
import { LocalStorageKeys } from '../../../utils/enums/app.enums';

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {
  public user: AuthenticationResult;

  constructor(
    private readonly authService: AuthApiService,
    private readonly localStorageService: LocalStorageService,
  ) { }

  public signIn(data: Auth): Observable<AuthenticationResult> {
    return this.authService.signIn(data)
      .pipe(
        map((authInfo: AuthResult) => authInfo.AuthenticationResult),
        tap((authInfo: AuthenticationResult) => {
          this.user = authInfo;
          this.localStorageService.setItem<AuthenticationResult>(LocalStorageKeys.AUTH, authInfo);
        }),
      );
  }
}
