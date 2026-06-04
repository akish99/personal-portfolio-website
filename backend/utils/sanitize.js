// export function clean(value=''){return String(value).trim().replace(/[<>]/g,'');}
// export function isEmail(value=''){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim());}


export function clean(value = '') {
  return String(value).trim().replace(/[<>]/g, '');
}

export function isEmail(value = '') {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim());
}