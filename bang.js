
browser.omnibox.onInputChanged.addListener((text, addSuggestions) => {
  alert('input changed - ' + text);
});

browser.omnibox.onInputEntered.addListener((text, disposition) => {
  alert('input entered - ' + text);
});
