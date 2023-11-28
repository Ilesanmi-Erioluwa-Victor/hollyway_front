export const useToken = (token: string, id: string) => {
  window.localStorage.setItem('userInfo', JSON.stringify({ token, id }));
};

export const useStoredToken = window.localStorage.getItem('userInfo')
  ? JSON.parse(window.localStorage.getItem('userInfo') as string)
  : null;
