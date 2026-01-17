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

  const square = ["strawberryCapKittens", "strawberryNeglects", "cat", "sylveon","god2", "charlotteLogo", "pfp-background", "sunBeam", "sunechos", "stirringspritesouls", "moondrops", "kaypfp", "beetd", "tompfp-bg", "cynthpfp2", "wooper", "lurantispfp", "kingfisher", "seaAngel", "caterpillarNotExpress", "toothless", "bird", "newdawn", "abstract", "feralshamans"];

  const horizontal = ["Project_1", "catbg", "Charlotte", "crazy", "cynthBanner", "preview", "timelapse", "neglectsShowcase", "pawn", "beeTDirl", "terrariaEOC", "neglects2", "stormboundhalloween", "plasmaClocket", "mechaWasp", "lurantis", "charlottesLegacy-Title", "wanderingVillage", "bedman", "redLiz", "vulture", "jellyfish", "puffin", "EmperorCaterpillar", "cavesOfQudDragon", "caterpillar2", "gastrodon", "cormorant", "snowy", "Averevoir"];

  const vertical = ["Bearz", "ghostling", "cynthion", "hollowKnight", "perspective", "charlotte", "ErraticNegelectsEmpty", "waterGolem", "plasmaSquid", "PlasticGolem", "CloudKing", "sentinelKnight", "cat", "cardgod", "stormbound", "cynton", "seaslug", "BeeTd", "FieryNeglects", "cardconveyorplayer", "erraticNeglects", "leavanny", "goat"]; 

  const photos = ["ladybird", "moth", "goose", "154634", "154459", "154341", "154150", "154049", "154027", "114145", "161100", "goosereflect", "glow", "gooseduo", "redblue"];

  const main = document.getElementById("main");
  const title = document.getElementById("title");

  function loadImages(Characters, id){

      main.innerHTML = '';

      title.innerHTML = 'Cynthion21x | ' + Characters;
      
        if(id === "squ") {
            main.classList.add("square-grid");
            main.style.columns = "unset";
        } else {
            main.classList.remove("square-grid");
            main.style.columns = "";
        }

      if (id == 'ver') {

          for (let i = vertical.length - 1; i >= 0; i--){

              //
              var photoCont = document.createElement("div");
              photoCont.setAttribute("class", "container");
              var photoHold = document.createElement("div");
              photoHold.setAttribute("class", "imgCont");

              //
              var image = document.createElement("img");
              image.setAttribute("src", "https://cynthion21x.github.io/website/gallery/vertical/" + vertical[i] + ".png");
              image.setAttribute("class", "img");
              //image.setAttribute("height", "506");

              photoHold.appendChild(image);

              //
              var descHold = document.createElement("div");
              descHold.setAttribute("class", "desc");

              //
              var buttonDown = document.createElement("button")
              buttonDown.setAttribute("class", "down");
              buttonDown.onclick = function() {downloadImage('https://cynthion21x.github.io/website/gallery/vertical/' + vertical[i] + '.png', vertical[i])};
              buttonDown.innerHTML = '<i class="fas fa-download"></i>'

              descHold.appendChild(buttonDown);

              //
              var buttonUp = document.createElement("button")
              buttonUp.setAttribute("class", "share");
              buttonUp.onclick = function() {copyTextToClipboard('https://cynthion21x.github.io/website/gallery/vertical/' + vertical[i] + '.png')};
              buttonUp.innerHTML = '<i class="fas fa-link"></i>'

              descHold.appendChild(buttonUp);

              photoHold.appendChild(descHold);
          
              photoCont.appendChild(photoHold);
              main.appendChild(photoCont)
          }

      } else if(id == "hor") {

          for (let i = horizontal.length - 1; i >= 0; i--){

              //
              var photoCont = document.createElement("div");
              photoCont.setAttribute("class", "container");
              var photoHold = document.createElement("div");
              photoHold.setAttribute("class", "imgCont");

              //
              var image = document.createElement("img");
              image.setAttribute("src", "https://cynthion21x.github.io/website/gallery/" + horizontal[i] + ".png");
              image.setAttribute("class", "img");
              //image.setAttribute("height", "174");

              photoHold.appendChild(image);

              //
              var descHold = document.createElement("div");
              descHold.setAttribute("class", "desc");

              //
              var buttonDown = document.createElement("button")
              buttonDown.setAttribute("class", "down");
              buttonDown.onclick = function() {downloadImage('https://cynthion21x.github.io/website/gallery/' + horizontal[i] + '.png', horizontal[i])};
              buttonDown.innerHTML = '<i class="fas fa-download"></i>'

              descHold.appendChild(buttonDown);

              //
              var buttonUp = document.createElement("button")
              buttonUp.setAttribute("class", "share");
              buttonUp.onclick = function() {copyTextToClipboard('https://cynthion21x.github.io/website/gallery/' + horizontal[i] + '.png')};
              buttonUp.innerHTML = '<i class="fas fa-link"></i>'

              descHold.appendChild(buttonUp);

              photoHold.appendChild(descHold);

              photoCont.appendChild(photoHold);
              main.appendChild(photoCont)
          }

      } else if (id == "squ"){

          for (let i = square.length - 1; i >= 0; i--){

              //
              var photoCont = document.createElement("div");
              photoCont.setAttribute("class", "container");
              var photoHold = document.createElement("div");
              photoHold.setAttribute("class", "imgCont");

              //
              var image = document.createElement("img");
              image.setAttribute("src", "https://cynthion21x.github.io/website/gallery/square/" + square[i] + ".png");
              image.setAttribute("class", "img");

              photoHold.appendChild(image);

              //
              var descHold = document.createElement("div");
              descHold.setAttribute("class", "desc");

              //
              var buttonDown = document.createElement("button")
              buttonDown.setAttribute("class", "down");
              buttonDown.onclick = function() {downloadImage('https://cynthion21x.github.io/website/gallery/square/' + square[i] + '.png', square[i])};
              buttonDown.innerHTML = '<i class="fas fa-download"></i>'

              descHold.appendChild(buttonDown);

              //
              var buttonUp = document.createElement("button")
              buttonUp.setAttribute("class", "share");
              buttonUp.onclick = function() {copyTextToClipboard('https://cynthion21x.github.io/website/gallery/square/' + square[i] + '.png')};
              buttonUp.innerHTML = '<i class="fas fa-link"></i>'

              descHold.appendChild(buttonUp);

              photoHold.appendChild(descHold);

              photoCont.appendChild(photoHold);
              main.appendChild(photoCont)
              }

      } else if (id == "ph"){

          for (let i = photos.length - 1; i >= 0; i--){

              //
              var photoCont = document.createElement("div");
              photoCont.setAttribute("class", "container");
              var photoHold = document.createElement("div");
              photoHold.setAttribute("class", "imgCont");

              //
              var image = document.createElement("img");
              image.setAttribute("src", "https://cynthion21x.github.io/website/gallery/photo/" + photos[i] + ".jpg");
              image.setAttribute("class", "img");

              photoHold.appendChild(image);

              //
              var descHold = document.createElement("div");
              descHold.setAttribute("class", "desc");

              //
              var buttonDown = document.createElement("button")
              buttonDown.setAttribute("class", "down");
              buttonDown.onclick = function() {downloadImage('https://cynthion21x.github.io/website/gallery/photo/' + photos[i] + '.jpg', photos[i])};
              buttonDown.innerHTML = '<i class="fas fa-download"></i>'

              descHold.appendChild(buttonDown);

              //
              var buttonUp = document.createElement("button")
              buttonUp.setAttribute("class", "share");
              buttonUp.onclick = function() {copyTextToClipboard('https://cynthion21x.github.io/website/gallery/photo/' + photos[i] + '.jpg')};
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

    const emHold = document.createElement("div");
    emHold.classList.add("page");
    emHold.style.width = "90%";
    emHold.style.margin = "20px auto";
    emHold.style.paddingTop = "56.25%";
    emHold.style.border = "4px solid white";

    const embedd = document.createElement("embed");
    embedd.type = "text/html";
    embedd.src = url;
    embedd.style.position = "absolute";
    embedd.style.top = "0";
    embedd.style.left = "0";
    embedd.style.width = "100%";
    embedd.style.height = "100%";
    embedd.style.display = "block";

    emHold.appendChild(embedd);
    main.appendChild(emHold);

    const idd = document.getElementById(id);
    const activ = document.getElementsByClassName("active");
    if (activ[0]) activ[0].className = "";
    idd.className = "active";
}



  function loadGames() {

    main.innerHTML = '';

    title.innerHTML = 'Cynthion21x | Games';

    var games = ["BeeTD"];

    for (let i = 0; i < games.length; i++){

              //
              var photoCont = document.createElement("div");
              photoCont.setAttribute("class", "container");

              //
              photoCont.innerHTML = '<iframe frameborder="0" src="https://itch.io/embed/1787338?bg_color=41572c&amp;fg_color=fffd35&amp;link_color=b8872a&amp;border_color=41572c" width="552" height="167"><a href="https://cynthion21x.itch.io/beetd">BeeTD by cynthion21x</a></iframe>'

              main.appendChild(photoCont)

    }

    var idd = document.getElementById("ga");

    activ = document.getElementsByClassName("active");

    activ[0].setAttribute("class", "");

    idd.setAttribute("class", "active");

}
