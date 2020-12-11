html = document.getElementsByTagName('html')[0];

//Create a fixed div on top
pageDiv = document.createElement('div');
pageDiv.style.backgroundColor = 'blue';
pageDiv.style.height = '8px';
pageDiv.style.position = 'fixed';
pageDiv.style.width = '100%';
pageDiv.style.padding = '0';
pageDiv.style.margin = '0';
pageDiv.style.opacity = '1';
pageDiv.style.zIndex = '1000';

//create a div with changing width according to scrolled height
scrollingDiv = document.createElement('div');
scrollingDiv.setAttribute('id', 'scroll-bar');
scrollingDiv.style.backgroundColor = 'yellow';
scrollingDiv.style.height = '100%';
scrollingDiv.style.width = '0px';
scrollingDiv.style.padding = '0';
scrollingDiv.style.margin = '0';
scrollingDiv.style.opacity = '1';
scrollingDiv.style.zIndex = '1000';

pageDiv.appendChild(scrollingDiv);
html.insertBefore(pageDiv, html.firstChild);

const afterScroll = function () {
  //varies browser to browser
  let scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById('scroll-bar').style.width = scrolled + '%';
};

window.addEventListener('scroll', afterScroll);
