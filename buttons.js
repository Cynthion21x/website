// Copy - Download image

async function downloadImage(imageSrc, imgname) {

    const image = await fetch(imageSrc)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)

    const link = document.createElement('a')
    link.href = imageURL
    link.download = imgname
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

  }

  function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;


    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
  }
  function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(function() {
      console.log('Async: Copying to clipboard was successful!');
      document.getElementById('popup').style.display = 'block';
      hide();
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }

  function hide(){
      setTimeout(function () {
          document.getElementById('popup').style.display = 'none';
          console.log('SAD');
      }, 1000);

  }

// Load Content

  const avatars = ["cat", "charlotte", "god", "icon"]
  const artwork = ["catbg", "Charlotte", "crazy", "cynthBanner", "preview", "timelapse", "neglectsShowcase", "pawn", "sunBeam"]
  const characters = ["cat", "ErraticNegelectsEmpty", "sylveon", "charlotte", "cynthion", "hollowKnight", "ghostling", "Bearz", "strawberryCapKittens", "strawberryNeglects"]

  const main = document.getElementById("main");
  const title = document.getElementById("title");

  function loadImages(Characters, id){

      main.innerHTML = '';

      title.innerHTML = 'Cynthion21x | ' + Characters;

      if (Characters == 'Portraits') {

          for (let i = 0; i < characters.length; i++){

              //
              var photoCont = document.createElement("div");
              photoCont.setAttribute("class", "container");
              var photoHold = document.createElement("div");
              photoHold.setAttribute("class", "imgCont");

              //
              var image = document.createElement("img");
              image.setAttribute("src", "https://cynthion21x.github.io/website/gallery/fanart/" + characters[i] + ".png");
              image.setAttribute("class", "img");
              image.setAttribute("height", "506");

              photoHold.appendChild(image);

              //
              var descHold = document.createElement("div");
              descHold.setAttribute("class", "desc");

              //
              var buttonDown = document.createElement("button")
              buttonDown.setAttribute("class", "down");
              buttonDown.onclick = function() {downloadImage('https://cynthion21x.github.io/website/gallery/fanart/' + characters[i] + '.png', characters[i])};
              buttonDown.innerHTML = '<i class="fas fa-download"></i>'

              descHold.appendChild(buttonDown);

              //
              var buttonUp = document.createElement("button")
              buttonUp.setAttribute("class", "share");
              buttonUp.onclick = function() {copyTextToClipboard('https://cynthion21x.github.io/website/gallery/fanart/' + characters[i] + '.png')};
              buttonUp.innerHTML = '<i class="fas fa-link"></i>'

              descHold.appendChild(buttonUp);

              photoHold.appendChild(descHold);
          
              photoCont.appendChild(photoHold);
              main.appendChild(photoCont)
          }

      } else if(Characters == "Artwork") {

          for (let i = 0; i < artwork.length; i++){

              //
              var photoCont = document.createElement("div");
              photoCont.setAttribute("class", "container");
              var photoHold = document.createElement("div");
              photoHold.setAttribute("class", "imgCont");

              //
              var image = document.createElement("img");
              image.setAttribute("src", "https://cynthion21x.github.io/website/gallery/" + artwork[i] + ".png");
              image.setAttribute("class", "img");
              image.setAttribute("height", "174");

              photoHold.appendChild(image);

              //
              var descHold = document.createElement("div");
              descHold.setAttribute("class", "desc");

              //
              var buttonDown = document.createElement("button")
              buttonDown.setAttribute("class", "down");
              buttonDown.onclick = function() {downloadImage('https://cynthion21x.github.io/website/gallery/' + artwork[i] + '.png', characters[i])};
              buttonDown.innerHTML = '<i class="fas fa-download"></i>'

              descHold.appendChild(buttonDown);

              //
              var buttonUp = document.createElement("button")
              buttonUp.setAttribute("class", "share");
              buttonUp.onclick = function() {copyTextToClipboard('https://cynthion21x.github.io/website/gallery/' + artwork[i] + '.png')};
              buttonUp.innerHTML = '<i class="fas fa-link"></i>'

              descHold.appendChild(buttonUp);

              photoHold.appendChild(descHold);

              photoCont.appendChild(photoHold);
              main.appendChild(photoCont)
          }

      } else if (Characters == "Avatars"){

          for (let i = 0; i < avatars.length; i++){

              //
              var photoCont = document.createElement("div");
              photoCont.setAttribute("class", "container");
              var photoHold = document.createElement("div");
              photoHold.setAttribute("class", "imgCont");

              //
              var image = document.createElement("img");
              image.setAttribute("src", "https://cynthion21x.github.io/website/gallery/avatars/" + avatars[i] + ".png");
              image.setAttribute("class", "img");
              image.setAttribute("height", "300");

              photoHold.appendChild(image);

              //
              var descHold = document.createElement("div");
              descHold.setAttribute("class", "desc");

              //
              var buttonDown = document.createElement("button")
              buttonDown.setAttribute("class", "down");
              buttonDown.onclick = function() {downloadImage('https://cynthion21x.github.io/website/gallery/avatars/' + avatars[i] + '.png', characters[i])};
              buttonDown.innerHTML = '<i class="fas fa-download"></i>'

              descHold.appendChild(buttonDown);

              //
              var buttonUp = document.createElement("button")
              buttonUp.setAttribute("class", "share");
              buttonUp.onclick = function() {copyTextToClipboard('https://cynthion21x.github.io/website/gallery/avatars/' + avatars[i] + '.png')};
              buttonUp.innerHTML = '<i class="fas fa-link"></i>'

              descHold.appendChild(buttonUp);

              photoHold.appendChild(descHold);

              photoCont.appendChild(photoHold);
              main.appendChild(photoCont)
              }

      }

      var idd = document.getElementById(id);

      activ = document.getElementsByClassName("active");

      activ[0].setAttribute("class", "");

      idd.setAttribute("class", "active");

  }

  function linkSite(url, name, id){

      main.innerHTML = '';

      title.innerHTML = 'Cynthion21x | ' + name;

      var embedd = document.createElement("embed");

      var emHold = document.createElement("div");

      embedd.setAttribute("type", "text/html");
      embedd.setAttribute("src", url);
      embedd.setAttribute("width", "100%");
      embedd.setAttribute("height", "100%");

      emHold.setAttribute("style", "border: 4px solid white;");

      emHold.setAttribute("class", "page");

      emHold.appendChild(embedd);
      main.appendChild(emHold);

      var idd = document.getElementById(id);

      activ = document.getElementsByClassName("active");

      activ[0].setAttribute("class", "");

      idd.setAttribute("class", "active");


  }


  function loadGames() {

    main.innerHTML = '';

    title.innerHTML = 'Cynthion21x | Games';

    var games = ["BeeTD"];

    for (let i = 0; i < games.length; i++){

              //
              var photoCont = document.createElement("div");
              photoCont.setAttribute("class", "container");
              var photoHold = document.createElement("div");
              photoHold.setAttribute("class", "imgCont");

              //
              var image = document.createElement("img");
              image.setAttribute("src", "https://cynthion21x.github.io/website/gallery/gameBanners/" + games[i] + ".png");
              image.setAttribute("class", "img");
              image.setAttribute("height", "174");

              photoHold.appendChild(image);

              //
              var descHold = document.createElement("div");
              descHold.setAttribute("class", "desc");

              var buttonDown = document.createElement("button")
              buttonDown.setAttribute("class", "down");

              if (games[i] == "BeeTD") {

                buttonDown.onclick = function() {window.location.href = 'https://cynthion21x.github.io/BeeTDWebGl/'};

              }

              
              buttonDown.innerHTML = '<i class="fas fa-play"></i>'

              //
              var buttonUp = document.createElement("button")
              buttonUp.setAttribute("class", "share");
              buttonUp.onclick = function() {copyTextToClipboard('https://github.com/Cynthion21x/' + games[i] + '/releases/latest/')};
              buttonUp.innerHTML = '<i class="fas fa-link"></i>'

              descHold.appendChild(buttonDown);
              descHold.appendChild(buttonUp);

              photoHold.appendChild(descHold);

              photoCont.appendChild(photoHold);
              main.appendChild(photoCont)

    }

    var idd = document.getElementById("ga");

    activ = document.getElementsByClassName("active");

    activ[0].setAttribute("class", "");

    idd.setAttribute("class", "active");

}