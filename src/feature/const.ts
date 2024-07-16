/**
 * baseUrl이 있어서 env.development에 BASE_URL이 있을경우 사용 아닐경우 안사용
 * 배포과정에서는 baseurl이 들어가면 안되고 local 환경에선 css url에 들어가야 하기 때문
 */
export const BASE_URL = String(import.meta.env.VITE_BASE_URL ?? '');
