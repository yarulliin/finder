export enum AuthFlows {
  AUTH = 'USER_PASSWORD_AUTH',
  REFRESH_TOKEN = 'REFRESH_TOKEN_AUTH',
}

export enum TargetValues {
  REGISTRATION = 'AWSCognitoIdentityProviderService.SignUp',
  CONFIRMATION_CODE = 'AWSCognitoIdentityProviderService.ConfirmSignUp',
  RESEND_CONFIRMATION_CODE = 'AWSCognitoIdentityProviderService.ResendConfirmationCode',
  SIGN_IN = 'AWSCognitoIdentityProviderService.InitiateAuth',
  REFRESH_TOKEN = 'AWSCognitoIdentityProviderService.InitiateAuth',
}
