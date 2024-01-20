import { Inject, Injectable } from '@angular/core';
import { API_URL } from '../../../utils/tokens/environment.tokens';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Auth,
  AuthResult,
  ConfirmationCode,
  Registration,
  RegistrationResult,
  ResendCodeResult,
  Username
} from '../interfaces/auth.interfaces';
import { TargetValues } from '../enums/auth.enums';
import { ApiUrls } from '../../../utils/interfaces/app.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(
    @Inject(API_URL) private readonly apiUrl: ApiUrls,
    private readonly httpClient: HttpClient,
  ) { }

  public signIn(data: Auth): Observable<AuthResult> {
    return this.httpClient.post<AuthResult>(
      this.apiUrl.AUTH,
      data,
      { headers: { 'X-Amz-Target': TargetValues.AUTH } },
    );
  }

  public registration(data: Registration): Observable<RegistrationResult> {
    return this.httpClient.post<RegistrationResult>(
      this.apiUrl.AUTH,
      data,
      { headers: { 'X-Amz-Target': TargetValues.REGISTRATION } },
    );
  }

  public resendCode(data: Username): Observable<ResendCodeResult> {
    return this.httpClient.post<ResendCodeResult>(
      this.apiUrl.AUTH,
      data,
      { headers: { 'X-Amz-Target': TargetValues.RESEND_CONFIRMATION_CODE } },
    )
  }

  public confirmationCode(data: ConfirmationCode): Observable<void> {
    return this.httpClient.post<void>(
      this.apiUrl.AUTH,
      data,
      { headers: { 'X-Amz-Target': TargetValues.CONFIRMATION_CODE } },
    );
  }

  public refreshToken(data: Auth): Observable<AuthResult> {
    return this.httpClient.post<AuthResult>(
      this.apiUrl.AUTH,
      data,
      { headers: { 'X-Amz-Target': TargetValues.AUTH } },
    );
  }
}
