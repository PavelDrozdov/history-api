export function replaceQueryParam(param, newval, search) {
  let regex = new RegExp("([?;&])" + param + "[^&;]*[;&]?");
  let query = search.replace(regex, "$1").replace(/&$/, '');

  return (query.length > 2 ? query + "&" : "?") + (newval ? param + "=" + newval : '');
}

export function getQueryVariable(variable, query) {
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
      let pair = vars[i].split('=');
      if (decodeURIComponent(pair[0]) == variable) {
          return decodeURIComponent(pair[1]);
      }
  }
  return '';
}