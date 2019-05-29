chrome.omnibox.setDefaultSuggestion({
  description: '!!!'
});

chrome.omnibox.onInputEntered.addListener(function (text) {
  var bangs = {
    '!s': 'https://open.spotify.com/search/results/',
    '!g': 'https://www.google.com/search?q=',
    '!d': 'https://duckduckgo.com/?q=',
    '!m': 'https://www.google.com/maps?q=',
    '!w': 'https://en.wikipedia.org/wiki/',
    '!yt': 'https://www.youtube.com/results?search_query=',
    '!gi': 'https://www.google.com/search?tbm=isch&tbs=imgo:1&q=',
    '!ml': 'https://lista.mercadolivre.com.br/',
    '!gt': 'https://translate.google.com/#auto/pt/',
  };

  var baseUrl;

  var validBangs = Object.keys(bangs).filter(b => text.indexOf(b) >= 0);
  if (validBangs.length > 0) {
    baseUrl = bangs[validBangs[0]];
  } else {
    baseUrl = bangs['!g'];
  }

  text = text.split(' ').filter(s => !s.startsWith('!')).join(' ');

  chrome.tabs.query({
    'currentWindow': true,
    'active': true
  }, function (tabs) {
    chrome.tabs.update(tabs[0].id, {
      url: baseUrl + encodeURIComponent(text)
    });
  });
});
