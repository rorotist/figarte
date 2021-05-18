const authSessionName = 'emp';

export function setAuth(value) {
  sessionStorage.setItem(authSessionName, JSON.stringify(value));
}

export function getAuth() {
  const getInfo = sessionStorage.getItem(authSessionName);
  if (!getInfo) {
    return false;
  }
  return JSON.parse(getInfo);
}
export function clearAuth() {
  sessionStorage.removeItem(authSessionName);
}
