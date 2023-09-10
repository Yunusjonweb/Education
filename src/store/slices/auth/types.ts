export interface AuthState {
  lang: string;
  loading: boolean;
  user: any;
  token: any;
}

export type LangKeyType = 'EN' | 'UZ' | 'RU' | string;
