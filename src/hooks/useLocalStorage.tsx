'use client';

export const useToken = (token: string, id: string) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('userInfo', JSON.stringify({ token, id }));
  }
};

export const useStoredToken = () => {
  if (typeof window !== 'undefined') {
    const storedUserInfo = window.localStorage.getItem('userInfo');
    return storedUserInfo ? JSON.parse(storedUserInfo) : null;
  }

  return null;
};
