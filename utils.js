function getQueryString(name) {
  const url_string = window.location.href;
  const url = new URL(url_string);
  return url.searchParams.get(name);
}

function swichFansUrl(mid) {
  const url_str1 = "https://img.shields.io/badge/dynamic/json?color=blue&logo=bilibili&style=social&label=Follow&query=data.follower&url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Frelation%2Fstat%3Fvmid%3D";
  const url_str2 = "%26jsonp%3Djsonp";
  return url_str1 + mid + url_str2;
}
