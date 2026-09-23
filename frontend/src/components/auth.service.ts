export const logout = async (): Promise<void> => {
  await fetch('/logout.do', {
    method: 'POST',
    credentials: 'include',
  });
};