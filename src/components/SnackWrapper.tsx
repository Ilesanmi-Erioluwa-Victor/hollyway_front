'use client';

import { SnackbarProvider } from 'notistack';

export const SnackProviders = ({
  children,
}: {
  children: React.ReactNode | JSX.Element;
}) => {
  return (
    <SnackbarProvider autoHideDuration={2000}>{children}</SnackbarProvider>
  );
};
