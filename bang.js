chrome.omnibox.onInputEntered.addListener(function (text) {
  var bangs = {
    '!s': 'https://open.spotify.com/search/results/',
    '!g': 'https://www.google.com/search?q=',
    '!d': 'https://duckduckgo.com/?q=',
  };

  var baseUrl;

  var validBangs = Object.keys(bangs).filter(b => text.indexOf(b) >= 0);
  if (validBangs.length > 0) {
    baseUrl = bangs[validBangs[0]];
  } else {
    baseUrl = bangs['!g'];
  }

  chrome.tabs.query({
    'currentWindow': true,
    'active': true
  }, function (tabs) {
    chrome.tabs.update(tabs[0].id, {
      url: baseUrl + encodeURIComponent(text)
    });
  });
});
