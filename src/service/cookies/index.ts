import { destroyCookie , parseCookies, setCookie as setNookies } from 'nookies';

export function getCookie(ctx: any | null | undefined, key: string) {
  return parseCookies(ctx)[key];
}
export function delCookie(ctx: any | null | undefined, key: string, options?: any) {
  return destroyCookie(ctx, key, options);
}
export function setCookie(
  ctx: any | null | undefined,
  key: string,
  value: string,
  options: any,
) {
  return setNookies(ctx, key, value, options);
}

export const cookie = {
  get: getCookie,
  del: delCookie,
  set: setCookie,
};
