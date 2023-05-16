let he;
let wh = 2;
let slupki = [];
let cooldown = 0;
let gra = 2;
let num = 0;
let punkty = 0;
let fast = 2;
let poziom = 2;
let a, b;

function preload()
{
  back = loadImage("CSS&ASSETS/back.png"); //created by Wiktor Sokoliński
  elnath = loadFont("CSS&ASSETS/elnath.ttf"); //implemented by Wiktor Sokoliński
  // music = loadSound();
}

function setup()
{
  createCanvas(400, 400);
  he = new hero(50, random(15, 345), 30);
  a = setInterval(function()
  {
    if(gra==1)
    {
      slupki.push(new slupek(num*40+500, random(10, 350), 100, 3));
      num++;
    }
  }, 200);
  b = setInterval(function()
  {
    if(gra==1)
    {
      punkty++;
      level(punkty);
    }
  }, 1000);
}

function draw()
{
  menu(gra);
  if(gra==2)
  {
    if(keyIsPressed)
    {
      console.log("Start gry!");
      koniec(1);
    }
  }
  else if(gra==1)
  {
    if(keyIsPressed && keyCode===32 && cooldown==0 || mouseIsPressed && cooldown==0)
    {
      if(wh>=1)
      {
        wh = 0;
        cooldown = 10;
        he.move(wh, poziom/fast);
      }
      else if (wh==0)
      {
        wh = 1;
        cooldown = 10;
        he.move(wh, poziom/fast);
      }
    }
    else
    {
      if(wh==1)
      {
        he.move(wh, poziom/fast);
      }
      else if (wh==0)
      {
        he.move(wh, poziom/fast);
      }
    }
    if(cooldown>0)
    {
      cooldown--;
    }
  }
  else
  {
    if(keyIsPressed && keyCode===ENTER)
    {
      console.log("Gra zresetowana!");
      koniec(1);
    }
  }
  for (let i = 0;i<slupki.length;i++)
  {
      slupki[i].create();
    if(gra==1)
    {
      he.czydotyka(slupki[i], punkty);
      if(slupki[i].px<-slupki[i].d*1.1)
      {
        slupki.shift();
      }
      else
      {
        slupki[i].px -= poziom;
      }
    } 
  }
}

function zmien(val)
{
  he.move(val, poziom/fast);
}