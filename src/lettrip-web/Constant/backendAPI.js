export const API_BASE_URL = "http://43.201.235.247:8080";
//export const API_BASE_URL = "http://localhost:8080";
export const ACCESS_TOKEN = "accessToken";
export const ACCESS_TOKEN_EXPIRED_MESC = 604800000;

export const OAUTH2_REDIRECT_URI = "http://localhost:3000/oauth2/redirect";
export const GOOGLE_AUTH_URL =
  API_BASE_URL + "/oauth2/authorize/google?redirect_uri=" + OAUTH2_REDIRECT_URI;

export const NAVER_AUTH_URL =
  API_BASE_URL + "/oauth2/authorize/naver?redirect_uri=" + OAUTH2_REDIRECT_URI;

export const KAKAO_AUTH_URL =
  API_BASE_URL + "/oauth2/authorize/kakao?redirect_uri=" + OAUTH2_REDIRECT_URI;
