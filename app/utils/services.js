/***
 * Return url with params*/
export const setDataUrl = (url, data) => {
  let resultUrl = '';
  const esc = encodeURIComponent;
  let query = Object.keys(data)
    .map((k) => `${esc(k)}=${esc(data[k])}`)
    .join('&');
  if (url.indexOf('?') === -1) {
    query = `?${query}`;
  } else {
    query = `&${query}`;
  }
  resultUrl = url + query;
  return resultUrl;
};
