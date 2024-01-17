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

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    @Inject(API_URL) private readonly apiUrl: string,
    private readonly httpClient: HttpClient,
  ) { }

  public signIn(data: Auth): Observable<AuthResult> {
    return this.httpClient.post<AuthResult>(
      this.apiUrl,
      data,
      { headers: { 'X-Amz-Target': TargetValues.SIGN_IN } },
    );
  }

  public registration(data: Registration): Observable<RegistrationResult> {
    return this.httpClient.post<RegistrationResult>(
      this.apiUrl,
      data,
      { headers: { 'X-Amz-Target': TargetValues.REGISTRATION } },
    );
  }

  public resendCode(data: Username): Observable<ResendCodeResult> {
    return this.httpClient.post<ResendCodeResult>(
      this.apiUrl,
      data,
      { headers: { 'X-Amz-Target': TargetValues.RESEND_CONFIRMATION_CODE } },
    )
  }

  public confirmationCode(data: ConfirmationCode): Observable<void> {
    return this.httpClient.post<void>(
      this.apiUrl,
      data,
      { headers: { 'X-Amz-Target': TargetValues.CONFIRMATION_CODE } },
    );
  }

  public refreshToken(data: Auth): Observable<AuthResult> {
    return this.httpClient.post<AuthResult>(
      this.apiUrl,
      data,
      { headers: { 'X-Amz-Target': TargetValues.REFRESH_TOKEN } },
    );
  }
}
