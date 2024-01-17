import { AuthFlows } from '../enums/auth.enums';

export interface Username {
  Username: string;
}

export interface RegistrationResult extends ResendCodeResult {
  UserConfirmed: boolean;
  UserSub: string;
}

export interface Registration extends Username {
  Password: string;
  UserAttributes: UserAttributes[];
}

export interface ConfirmationCode extends Username {
  ConfirmationCode: string;
}

export interface Auth {
  AuthFlow: AuthFlows;
  AuthParameters: AuthParameters;
}

export interface AuthResult {
  AuthenticationResult: AuthenticationResult;
  ChallengeParameters: {};
}

export interface AuthenticationResult {
  AccessToken: string;
  ExpiresIn: number;
  IdToken: string;
  TokenType: string;
  RefreshToken?: string;
}

export interface UserAttributes {
  Name: string;
  Value: string;
}

export interface AuthParameters {
  USERNAME?: string;
  PASSWORD?: string;
  REFRESH_TOKEN?: string;
}

export interface CodeDeliveryDetails {
  AttributeName: string;
  DeliveryMedium: string;
  Destination: string;
}

export interface ResendCodeResult {
  CodeDeliveryDetails: CodeDeliveryDetails;
}
