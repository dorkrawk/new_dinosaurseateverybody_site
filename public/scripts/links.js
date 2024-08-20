document.addEventListener('DOMContentLoaded', function() {
  let lastKeyPress = ['', 0];
  const linksList = document.getElementById('comic_links');
  const comicUrls = [];
  if (linksList) {
    const links = linksList.getElementsByTagName('a'); // Get all 'a' elements within the UL
    for (let link of links) {
      if (link.className != "skip_auto_open") {
        comicUrls.push(link.href); // Store the href attribute (URL) of each link
      }
    }
  }

  document.addEventListener('keydown', function(event) {
      now = Date.now();
      timeSinceLastKeyPress = now - lastKeyPress[1];
      if (lastKeyPress[0] === 'o' && event.key === 'c' && timeSinceLastKeyPress < 1000) {
        comicUrls.forEach((url, index) => {
            setTimeout(() => {
                newWindow = window.open(url, '_blank');
            }, index * 200); // Delay opening each tab by 200ms
        });
      }
      lastKeyPress[0] = event.key; // Store the last key pressed
      lastKeyPress[1] = now; // time of last key press
  });
});
