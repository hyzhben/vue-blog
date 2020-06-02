import storage from 'good-storage'
const TOKEN_KEY="token"

export function saveTokens(token){
  return storage.set(TOKEN_KEY,token);
}

export function getToken(){
  return storage.get(TOKEN_KEY,[]);
}
