let blok = 1;
function koniec(restart)
{
  if(restart==1)
  {
    wh = 2;
    slupki = [];
    cooldown = 10;
    gra = 1;
    punkty = 0;
    poziom = 2;
    fast = 2;
    num = 0;
    clearInterval(a);
    clearInterval(b);
    setup();
  }
  else
  {
    console.log("Koniec gry!");
    he.show(1);
    gra = 0;
    wh = 2;
  }
}