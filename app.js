var container = document.querySelector('#container');

var images = [
  'images/VueJS.png',
  'images/GitHub.png',
  'images/ReactJS.png',
  'images/AngularJS.png',
  'images/MongoDB.png',
  'images/JavaScript.png',
  'images/NodeJS.png',
  'images/NPM.png',
  'images/Python.png',
  'images/VueJS.png',
  'images/GitHub.png',
  'images/ReactJS.png',
  'images/AngularJS.png',
  'images/MongoDB.png',
  'images/JavaScript.png',
  'images/NodeJS.png',
  'images/NPM.png',
  'images/Python.png',
];

var hiddenImage = [];
var clickedImage = {};
var correctAnswer = [];
var techName = [];
var defaultImage = 'images/AppIcon.jpg'

for (let i = 0; i < 18; i++) {
  var randomNumber = Math.floor(Math.random() * Math.floor(images.length));
  var extractedName = images[randomNumber].substring(7, images[randomNumber].length - 4);
  techName.push(extractedName);
  hiddenImage.push(images[randomNumber]);
  images.splice(randomNumber, 1);
}

for (let i = 0; i < 18; i++) {
  var div = document.createElement('div');
  var divClass = document.createAttribute('class');
  divClass.value = 'cardsImage';
  div.setAttributeNode(divClass);
  container.appendChild(div);

  var cardsImageAmount = document.querySelectorAll('.cardsImage');

  var image = document.createElement('img');
  var imgId = document.createAttribute('id');
  var imgClass = document.createAttribute('class');
  var imgSrc = document.createAttribute('src');

  imgId.value = 'image' + i;
  imgClass.value = 'coverImage';
  imgSrc.value = defaultImage;
  image.setAttributeNode(imgId);
  image.setAttributeNode(imgClass);
  image.setAttributeNode(imgSrc);
  cardsImageAmount[i].appendChild(image);
}

var allImages = document.querySelectorAll('img');

allImages.forEach(function (image, i) {
  var id = '#image' + i;
  image.addEventListener('click', function () {
    var clickedImageKeys = Object.keys(clickedImage);
    var isAnswered = correctAnswer.indexOf(hiddenImage[i]);

    if (isAnswered < 0) {
      if (clickedImageKeys.length == 0) {
        clickedImage[id] = hiddenImage[i];
        image.setAttribute('src', clickedImage[id]);
        document.querySelector('#techName').textContent = techName[i];
      } else {
        if (clickedImageKeys.length == 1) {
          image.setAttribute('src', hiddenImage[i]);
          document.querySelector('#techName').textContent = techName[i];
          if (clickedImage[clickedImageKeys[0]] == hiddenImage[i] && id != clickedImageKeys[0]) {
            correctAnswer.push(clickedImage[clickedImageKeys[0]]);
            clickedImage = {};
          } else {
            clickedImage[id] = hiddenImage[i];
          }
        } else {
          clickedImageKeys = Object.keys(clickedImage);
          document.querySelector(clickedImageKeys[0]).setAttribute('src', 'images/AppIcon.jpg');
          document.querySelector(clickedImageKeys[1]).setAttribute('src', 'images/AppIcon.jpg');
          clickedImage = {};
          document.querySelector('#techName').textContent = '';
        }
      }
    }

    if (correctAnswer.length == 9) {
      document.querySelector('#congrats').style.display = 'block';
      document.querySelector('#techName').textContent = 'HOORAY!!';
    }
  });
});

document.querySelector('#btnReset').addEventListener('click', function () {
  images = [
    'images/VueJS.png',
    'images/GitHub.png',
    'images/ReactJS.png',
    'images/AngularJS.png',
    'images/MongoDB.png',
    'images/JavaScript.png',
    'images/NodeJS.png',
    'images/NPM.png',
    'images/Python.png',
    'images/VueJS.png',
    'images/GitHub.png',
    'images/ReactJS.png',
    'images/AngularJS.png',
    'images/MongoDB.png',
    'images/JavaScript.png',
    'images/NodeJS.png',
    'images/NPM.png',
    'images/Python.png',
  ];
  hiddenImage = [];
  clickedImage = {};
  techName = [];
  correctAnswer = [];
  document.querySelector('#techName').textContent = '';
  document.querySelector('#congrats').style.display = 'none';
  for (let i = 0; i < 18; i++) {
    var randomNumber = Math.floor(Math.random() * Math.floor(images.length));
    var extractedName = images[randomNumber].substring(7, images[randomNumber].length - 4);
    techName.push(extractedName);
    hiddenImage.push(images[randomNumber]);
    images.splice(randomNumber, 1);
  }
  var resetImages = document.querySelectorAll('img');
  resetImages.forEach(function (resetImage, i) {
    resetImage.setAttribute('src', defaultImage);
  });
});
