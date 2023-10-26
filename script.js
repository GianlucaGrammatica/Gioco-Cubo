console.log('Help me qwp!');

/*Variables*/
let Menu = document.getElementById('Menu');
let GameCon = document.getElementById('GameCon');
let BestScoreText = document.getElementById('BestScore');
let Time = document.getElementById('Time');
let Score = document.getElementById('Score');
let Button = document.getElementById('StartButton');
let ScoreNum = 0;
let MaxClick = 0;
let Cube = document.getElementById('Cube');
let RandomColor = 0;
let ColorList = ['b49fff', 'ffa2e6', '9df5f5', 'caee91', 'ecd28b', 'ff8383'];
let BorderColorList = [
  '#7e6ac4',
  '#ba68a4',
  '#50d4d4',
  '#9bcf4a',
  '#d9b24a',
  '#e03f3f',
];
let SelecetColor = 'Violet';
let countdown = 15;
let game = 0;

/*Storage*/
let BestScore = 0;
if (localStorage.getItem('RaibowCrashScore')) {
  BestScore = localStorage.getItem('RaibowCrashScore');
  BestScoreText.innerText = 'Best Score: ' + BestScore;
  BestScoreText.classList.remove('Hidden');
} else {
  BestScoreText.innerText = 'Best Score: 000';
  BestScoreText.classList.add('Hidden');
}

/*First Random*/
let CuurentX = Math.floor(Math.random() * (80 - 20) + 20);
let Cuurenty = Math.floor(Math.random() * (90 - 40) + 40);
let Interval = 600;

/*Gmae Begin*/
Menu.addEventListener('click', function () {
  game = 1;
  GameCon.classList.remove('Hidden');
  Menu.classList.add('Hidden');
  RandomColor = Math.floor(Math.random() * 6);
  console.log(RandomColor);
  SelecetColor = ColorList[RandomColor];
  Cube.style =
    'left:' +
    CuurentX +
    '%;' +
    'top:' +
    Cuurenty +
    '%;' +
    'background-color: #' +
    SelecetColor +
    '; border: solid 3px ' +
    BorderColorList[RandomColor] +
    ';';
  const countdow = setInterval(CountDownDown, 1000);
  const CubeMove = setInterval(IlLkeItMoveItMoveIt, Interval);
  game = true;
  countdown = 15;
  ScoreNum = 0;
  Score.innerText = 'Score: ' + ScoreNum;
  Time.innerHTML = 'Time: ' + countdown + 's';

  /*Time Out*/
  setTimeout(() => {
    clearInterval(CubeMove);
    game = false;
  }, 15000);
  setTimeout(() => {
    clearInterval(countdow);
    Time.innerHTML = 'Game Over!';
    Button.innerHTML = 'Play Again!';
    Menu.classList.remove('Hidden');
    GameCon.classList.add('Hidden');
    BestScoreText.classList.remove('Hidden');
  }, 15000);
});

/*Cube Move*/
function IlLkeItMoveItMoveIt() {
  CuurentX = Math.floor(Math.random() * (80 - 20) + 20);
  Cuurenty = Math.floor(Math.random() * (90 - 40) + 40);
  MaxClick = 0;

  RandomColor = Math.floor(Math.random() * 6);
  SelecetColor = ColorList[RandomColor];
  Cube.style =
    'left:' +
    CuurentX +
    '%;' +
    'top:' +
    Cuurenty +
    '%;' +
    'background-color: #' +
    SelecetColor +
    '; border: solid 3px ' +
    BorderColorList[RandomColor] +
    ';';
  Interval = Math.floor(Math.random() * (1500 - 600) + 600);
}

/*Count Down*/
function CountDownDown() {
  countdown--;
  Time.innerHTML = 'Time: ' + countdown + 's';
}

/*Cube Click*/
Cube.addEventListener('click', function () {
  if (MaxClick < 1) {
    MaxClick = MaxClick +1;
    if (SelecetColor == 'b49fff') {
      ScoreNum = ScoreNum + 10;
    } else {
      if (SelecetColor == 'ffa2e6') {
        ScoreNum = ScoreNum + 15;
      } else {
        if (SelecetColor == '9df5f5') {
          ScoreNum = ScoreNum + 5;
        } else {
          if (SelecetColor == 'caee91') {
            ScoreNum = ScoreNum + 10;
          } else {
            if (SelecetColor == 'ecd28b') {
              ScoreNum = ScoreNum + 15;
            } else {
              if (SelecetColor == 'ff8383') {
                ScoreNum = ScoreNum + 5;
              }
            }
          }
        }
      }
    }
  }

  console.log(ScoreNum);
  Score.innerText = 'Score: ' + ScoreNum;
  if (ScoreNum > BestScore) {
    localStorage.setItem('RaibowCrashScore', ScoreNum);
    BestScoreText.innerText = 'Best Score: ' + ScoreNum;
  }
});
