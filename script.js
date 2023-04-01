//! Практическеи примеры из руководства CANVAS "Руководство по Canvas": https://developer.mozilla.org/ru/docs/Web/API/Canvas_API/Tutorial
// guide by canvas


//! прямоугольники 
function draw(){ //! проверка на поддержку canvas - функция draw() - написать только одну - для примера
    let canvasOne = document.querySelector('#canvasOne'); // элемент
    if (canvasOne.getContext){ // если браузер поддерживает canvas, и соответственно его метод getContext, то
      let ctxOne = canvasOne.getContext('2d'); // установить атриубут 2d
    
      //! 2 прямоугольника 
      ctxOne.fillStyle = "rgb(200,0,0)"; // атрибут (свойство) залить(заполнить) цветом
      ctxOne.fillRect(10, 10, 50, 50); // заполнить (создать) прямоугольник (rectangle - прямоугольник)

      ctxOne.fillStyle = "rgba(0, 0, 200, 0.5)";
      ctxOne.fillRect(30, 30, 50, 50); // 30 - left, 30 - top, witch, hight
    }

} 

//! треугольники
// 1-й треугольник
let canvasTwo = document.querySelector('#canvasTwo'); // элемент
let ctxTwo = canvasTwo.getContext('2d'); // установить атриубут 2d
    ctxTwo.beginPath(); // Создает новый контур - хотя без неё все также
    ctxTwo.moveTo(75,50); // начальная точка контура - Перемещает перо в точку с координатами x и y
    ctxTwo.lineTo(100,75);
    ctxTwo.lineTo(100,25);
    ctxTwo.lineTo(75,50); // конечная точка
    // ctx.closePath(); // - замыкание начало и конца (может заменить последний ctx.lineTo(75,50);)

    ctxTwo.stroke(); // красит контур
// 2-й треугольник
    ctxTwo.beginPath(); // Создает новый контур - хотя без неё все также
    ctxTwo.moveTo(10,10); // начальная точка контура - Перемещает перо в точку с координатами x и y
    ctxTwo.lineTo(50,75);
    ctxTwo.lineTo(10,90);
    ctxTwo.closePath();
    ctxTwo.fill(); // заливает внутрь фигуры





//! смайлик (дуги)
  let canvasThree = document.querySelector('#canvasThree');
  let ctxThree = canvasThree.getContext('2d');

    ctxThree.beginPath(); 
    ctxThree.arc(75,75,50,0,Math.PI*2,true); // Внешняя окружность
    ctxThree.moveTo(110,75); // отрыв пера
    ctxThree.arc(75,75,35,0,Math.PI,false);  // рот (по часовой стрелке)
    ctxThree.moveTo(65,65); // отрыв пера
    ctxThree.arc(60,65,5,0,Math.PI*2,true);  // Левый глаз
    ctxThree.moveTo(95,65); // отрыв пера
    ctxThree.arc(90,65,5,0,Math.PI*2,true);  // Правый глаз
    ctxThree.stroke(); // заливка контура




//! Практика: пишу Ришат не текстом, а дугами, линиями
let canvasFour = document.querySelector('#canvasFour');
let ctxFour = canvasFour.getContext('2d');

//----- буква Р
ctxFour.beginPath();
ctxFour.moveTo(25, 25); // первая точка
ctxFour.lineTo(25, 80); // первая линия (вниз)
//arc(x, y, radius, startAngle, endAngle, anticlockwise)
ctxFour.arc(
25, // x - позиция точки
40, // y - позиция точки 
15, // радиус
(3 *Math.PI) / 2, // радиальный  угол - начало дуги (по таблице ось Y наоборот)
Math.PI / 2
//getRadians(90)
// getRadians(90),
// true -> против часовой стрелки --- а по умолчанию (или false) по часовой стрелки
);

//----- буква И
// палочка |
ctxFour.moveTo(50, 50); // отрыв пера
ctxFour.lineTo(50, 80); // первая линия (вниз)
// палочка /
ctxFour.lineTo(70, 50); 
// палочка |
ctxFour.lineTo(70, 80);

// ---- буква Ш
// палочка вниз |
ctxFour.moveTo(80, 50); // отрыв пера
ctxFour.lineTo(80, 80);
// палочка горизонтальная (слева направо) __
ctxFour.lineTo(100, 80);
// палочка вверх |
ctxFour.lineTo(100, 50);
// средняя палочка снизу вверх |
ctxFour.moveTo(90, 80); // отрыв пера (точка)
ctxFour.lineTo(90, 50);

//----- бука A
// косая палочка вверх /
ctxFour.moveTo(110, 80); // отрыв пера
ctxFour.lineTo(120, 50);
//косая палочка вниз \
ctxFour.lineTo(130, 80);
// горизонтальная палочка -
ctxFour.moveTo(115, 65); // точка слева
ctxFour.lineTo(125, 65); // линия слева направа

//---- буква T
// палочка вертикальная |
ctxFour.moveTo(140, 80); // точка на верху
ctxFour.lineTo(140, 50); // линия внизу
// палочка горизонтальная __
ctxFour.moveTo(130, 50); // точка слева направо
ctxFour.lineTo(150, 50); // линия слева направо

// обводка контура (иначе не увидеть)
ctxFour.stroke(); 

//!------ метод для расчета радианы
function getRadians(degrees) {
return (Math.PI / 180) * degrees;
}






//! Квадратичные кривые Безье
let canvasFive = document.querySelector('#canvasFive');
let ctxFive = canvasFive.getContext('2d');

ctxFive.beginPath(); // создали путь
ctxFive.moveTo(25, 25) // первая точка

ctxFive.quadraticCurveTo(25,25,25,62.5);
    
ctxFive.quadraticCurveTo(25,100,50,100);
ctxFive.stroke(); // обводка контура


//! new Path2d - как переменная, в которой хранится фигура
let canvasSix = document.querySelector('#canvasSix');
let ctxSix = canvasSix.getContext('2d');

let rectangle = new Path2D(); 
rectangle.rect(10, 10, 50, 50);

let circle = new Path2D();
circle.moveTo(125, 35);
circle.arc(100, 35, 25, 0, 2 * Math.PI);

ctxSix.stroke(rectangle);
ctxSix.fill(circle);


//! Применение стилей и цветов
let ctxSeven = document.querySelector('#canvasSeven').getContext('2d');
// контур цветом  
ctxSeven.strokeStyle = 'blue'; // сначала нужно задать цвет (становиться стандартным и далее если не сменить, будет все фигуры закрашивать этим цветов)
ctxSeven.strokeRect(25, 25, 50, 50); // контурный прямоугольник
// заполнение цветом
ctxSeven.fillStyle = 'red';
ctxSeven.fillRect(30,30,50,50);


//! каскад цветов
  let ctxEight = document.querySelector('#canvasEight').getContext('2d');
  for (let i=0;i<6;i++){
    for (let j=0;j<6;j++){
      ctxEight.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' +
                       Math.floor(255-42.5*j) + ',0)';
      ctxEight.fillRect(j*25,i*25,25,25);
    }
  }




//! Стили линий: 
let ctxNine = document.querySelector('#canvasNine').getContext('2d'); 
ctxNine.strokeStyle = 'blue'; // цвет

//----- одна линия
//ctx.lineCap = "butt" || "round" || "square";
ctxNine.lineCap = "round"; // перед новым путем - округлые концы
ctxNine.beginPath(); // создал путь
ctxNine.moveTo(25,25); // первая точка
ctxNine.lineTo(25,80); // линия 
//----- толщина линии
ctxNine.lineWidth = 10; // можно как в начале так и в конце
//---- внешний вид концов
ctxNine.stroke(); // контур

//------ две линии, для примера касательных углов
ctxNine.lineCap = "square"; // квадратные концы
ctxNine.beginPath();
ctxNine.moveTo(50, 25);
ctxNine.lineTo(50, 80); 
ctxNine.lineTo(80, 80); // вторая линия для угла
//-----ctx.lineJoin = "bevel" || "round" || "miter";
ctxNine.lineJoin = 'round'; // округление внешнего угла
ctxNine.stroke(); // контур
  
//! изменение остроты углов (зиг заг)
ctxNine.beginPath();
ctxNine.moveTo(70,0);
ctxNine.lineWidth = 15;
ctxNine.lineTo(100, 100);
ctxNine.lineTo(110, 30);
ctxNine.lineTo(120, 110);
ctxNine.lineTo(130, 30);
ctxNine.lineTo(140, 110);
ctxNine.miterLimit = 20; // растягивает углы, делает их острее 
//---- только с miter или вовсе без lineJoin - углы меняются
ctxNine.lineJoin = 'miter'; 
ctxNine.stroke(); 

//! штрих линии
ctxNine.setLineDash([40, 16]);
//console.log(ctx.getLineDash());  // [30, 10] -- получить данные о штрихах
ctxNine.beginPath();
ctxNine.moveTo(200, 20);
ctxNine.lineTo(400, 20);
ctxNine.stroke();
//-------- Штрихованная линия СО СДВИГОМ 
ctxNine.beginPath();
ctxNine.lineDashOffset = 20;
ctxNine.moveTo(200, 50);
ctxNine.lineTo(400, 50);
ctxNine.stroke();


//! градиент
// линейный градинет 
let ctxTen = document.querySelector('#canvasTen').getContext('2d'); 
// Создание линейного градиента
// Точка начала линии градиента: x=20, y=0
// Точка конца линии градиента: x=220, y=0
let gradient = ctxTen.createLinearGradient(105,105,20,112,120,50);

// Добавление трёх контрольных точек
gradient.addColorStop(0, 'green');
gradient.addColorStop(.5, 'cyan');
gradient.addColorStop(1, 'blue');

// Установка стиля заливки и отрисовка прямоугольника градиента
ctxTen.fillStyle = gradient;
// на примере прямоугольника
ctxTen.fillRect(10, 10, 150, 80); // заполнить (создать) прямоугольник (rectangle - прямоугольник)


//! радиальный градиент 
// Внутренний круг находится в точках x=110, y=90, с радиусом=30 
// Внешний круг находится в точках x=100, y=100, с радиусом=70
  let gradientRadial = ctxTen.createRadialGradient(105,105,30,112,70,90);
  gradientRadial.addColorStop(0, 'green');
  gradientRadial.addColorStop(.5, 'yellow');
  gradientRadial.addColorStop(1, 'blue');

  ctxTen.fillStyle = gradientRadial;
  ctxTen.fillRect(10,100,150,80);



  //! Шаблоны (паттерны)
  let ctxEleven = document.querySelector('#canvasEleven').getContext('2d');
  // создаем новый ОБЪЕКТ ИЗОБРАЖЕНИЯ для использования в качестве ШАБЛОНА (ПАТТЕРНА, фрагмента, спрайтаы)
  let img = new Image();
  img.src = 'canvas_createpattern.png'; // изображение в папке проекта

  // Используйте изображение только после его загрузки
  // событие загрузки - как изображение загрузится событие запустит код
  img.onload = () => {
  const pattern = ctxEleven.createPattern(img, "repeat"); //Создаёт и возвращает новый canvas объект - шаблон (pattern).
  ctxEleven.fillStyle = pattern;
  ctxEleven.fillRect(0, 0, 200, 200);
  };


//! Тень
var ctxTwelve = document.querySelector('#canvasTwelve').getContext('2d');

  ctxTwelve.shadowOffsetX = 4;
  ctxTwelve.shadowOffsetY = 4;
  ctxTwelve.shadowBlur = 4;
  ctxTwelve.shadowColor = "rgba(0, 0, 0, 0.5)";

  ctxTwelve.font = "40px Times New Roman";
  ctxTwelve.fillStyle = "Black";
  ctxTwelve.fillText("Sample String", 5, 30);



  //! текст
  var ctxThirteen = document.querySelector('#canvasThirteen').getContext('2d');

  ctxThirteen.font = "48px serif"; // размер и шрифт
  ctxThirteen.textBaseline = "hanging"; // положение висит на строке
  ctxThirteen.fillText("Hello world - текстом", 0, 10);
  ctxThirteen.strokeText("Hello world - текстом", 0, 50);




//!Параметры заполнения (закаршивания) холста
let ctxFourteen = document.querySelector("#canvasFourteen").getContext("2d")

  ctxFourteen.beginPath();
  //первая окружность
  ctxFourteen.arc(50, 50, 30, 0, Math.PI*2, true);
  // вторая окружность
  ctxFourteen.arc(50, 50, 15, 0, Math.PI*2, true);
  //ctxFourteen.fill("nonzero"); // закрашивает оба (стоит по-умолчанию)
  ctxFourteen.fill("evenodd"); // закрашивает пространство между двух окружность
  



//! Сохранение (save()) и восстановление (restore())
let ctxFifteen = document.querySelector("#canvasFifteen").getContext("2d")
// рисуем прямоугольник с настройками по умолчанию (черный цвет )
  ctxFifteen.fillRect(0, 0, 90, 90); // состояние(свойство): черный цвет 
  ctxFifteen.save();    // сохраняем состояние

// меняем состояние (цвет: голубой)
  ctxFifteen.fillStyle = 'blue';  
// рисуем прямоугольник с новым состоянием    
  ctxFifteen.fillRect(0, 0, 80, 80);   // позицию, ширину/выссоту можно менять   


//восстанавливаем первоначальное состояние (цвет: черный)
  ctxFifteen.restore();
// рисуем прямоугольник с восстанавливаем изначальными настройками                 
  ctxFifteen.fillRect(0, 0, 90, 90);   






//!------------------- масштабирование ------------------------------
let ctxSixteen = document.querySelector("#canvasSixteen").getContext("2d") 
// рисуем масштабированный прямоугольник.
  ctxSixteen.save(); // сохранить состояние (по-умолчанию цвет: черный и сетка 0,0)
// масштабирование сетки, перед созданием фигуры 
  ctxSixteen.scale(10, 3); //! увеличить сетку
  ctxSixteen.fillRect(1, 10, 10, 10);
  
  ctxSixteen.restore(); // восстановить исходное состояние (масштаб сетки) 
//! размещаем текст, отражённый по горизонтали
  ctxSixteen.scale(-1, 1); //! перевернули сетку
  ctxSixteen.font = '48px serif';
  ctxSixteen.fillText('ТЕКСТ', -160, 100); 


//! --------------------------обрезка и композиция--------------------------
// тестил типы композиций
  let ctxSeventeen = document.querySelector("#canvasSeventeen").getContext("2d") 

  ctxSeventeen.globalCompositeOperation = "multiply";
  ctxSeventeen.fillStyle = "blue";
  ctxSeventeen.fillRect(10, 10, 100, 100);
  

  ctxSeventeen.fillStyle = "red";
  ctxSeventeen.fillRect(50, 50, 100, 100);
  
  ctxSeventeen.fillStyle = "green";
  ctxSeventeen.fillRect(70, 70, 100, 100);



//! обрезка (звезда)
let ctxEighteen = document.querySelector("#canvasEighteen").getContext("2d") 
  
  ctxEighteen.fillRect(0, 0, 150, 150);
  ctxEighteen.translate(75, 75);

// Create a circular clipping path
  ctxEighteen.beginPath();
  ctxEighteen.arc(0, 0, 60, 0, Math.PI * 2, true);
  ctxEighteen.clip();

// draw background Gradient
  var lingrad = ctxEighteen.createLinearGradient(0, -75, 0, 75);
  lingrad.addColorStop(0, '#232256');
  lingrad.addColorStop(1, '#143778');

  ctxEighteen.fillStyle = lingrad;
  ctxEighteen.fillRect(-75, -75, 150, 150);

// draw stars
  for (var j = 1; j < 50; j++) {
    ctxEighteen.save();
    ctxEighteen.fillStyle = '#fff';
    ctxEighteen.translate(75 - Math.floor(Math.random() * 150),
                   75 - Math.floor(Math.random() * 150));
    drawStar(ctxEighteen, Math.floor(Math.random() * 4) + 2);
    ctxEighteen.restore();
  }

// вырезанные звездочки (космос)
function drawStar(ctxEighteen, r) {
  ctxEighteen.save();
  ctxEighteen.beginPath();
  ctxEighteen.moveTo(r, 0);
  for (var i = 0; i < 9; i++) {
    ctxEighteen.rotate(Math.PI / 2);
    if (i % 2 === 0) {
      ctxEighteen.lineTo((r / 0.525731) * 0.200811, 0);
    } else {
      ctxEighteen.lineTo(r, 0);
    }
  }
  ctxEighteen.closePath();
  ctxEighteen.fill();
  ctxEighteen.restore();
}



//!------------------------------------- анимация -----------------------------------------
// Пример: солнечная система
var sun = new Image();
var moon = new Image();
var earth = new Image();
function init(){
  sun.src = 'canvas_sun.png';
  moon.src = 'canvas_moon.png';
  earth.src = 'canvas_earth.png';
  window.requestAnimationFrame(draw);
}

function draw() {
  var ctxNineteen = document.getElementById('canvasNineteen').getContext('2d');

  ctxNineteen.globalCompositeOperation = 'destination-over';
  ctxNineteen.clearRect(0,0,300,300); // clear canvas

  ctxNineteen.fillStyle = 'rgba(0,0,0,0.4)';
  ctxNineteen.strokeStyle = 'rgba(0,153,255,0.4)';
  ctxNineteen.save();
  ctxNineteen.translate(150,150);

  // Earth
  var time = new Date();
  ctxNineteen.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
  ctxNineteen.translate(105,0);
  ctxNineteen.fillRect(0,-12,50,24); // Shadow
  ctxNineteen.drawImage(earth,-12,-12);

  // Moon
  ctxNineteen.save();
  ctxNineteen.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
  ctxNineteen.translate(0,28.5);
  ctxNineteen.drawImage(moon,-3.5,-3.5);
  ctxNineteen.restore();

  ctxNineteen.restore();

  ctxNineteen.beginPath();
  ctxNineteen.arc(150,150,105,0,Math.PI*2,false); // Earth orbit
  ctxNineteen.stroke();

  ctxNineteen.drawImage(sun,0,0,300,300);

  window.requestAnimationFrame(draw);
}

init();
