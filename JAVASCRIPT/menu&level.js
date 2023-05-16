function menu(tryb)
{
  if(tryb==2)
  {
    textFont(elnath);
    image(back,0,0)
    textAlign(CENTER);
    textSize(45);
    text("LASER UNICKER",200,50);
    textSize(20);
    text("Kliknij dowolny klawisz,\naby rozpoczac gre.", 200, 130);
    text("Poruszasz sie spacja lub myszka,\nktora zmieniasz kierunek lotu.", 200, 208);
    text("Unikaj czerwonych obiektow. ", 200, 270);
    text("Gdy przegrasz kliknij ENTER,\naby zresetowac gre.", 200, 310);
    text("Powodzenia!", 200, 375);
  }
  else if(tryb==1)
  {
    background(219);
    fill(99, 102, 98);
    noStroke();
    rect(0, height*0.9, width, 40);
    he.show(0);
  }
  else
  {
    background(219);
    fill(99, 102, 98);
    noStroke();
    rect(0, height*0.9, width, 40);
    fill(0);
    textAlign(CENTER);
    textSize(13);
    text(`Zdobyte punkty I poziom ${poziom-1} I : ${punkty}.`, 200, 375);
    text("Kliknij enter, aby zrestartowac gre.", 200, 395);
    he.show(1);
  }
  
}
function level(ile)
{
  if(ile==15 || ile==30 || ile==45 || ile==60 || ile==120 || ile==240)
  {
    poziom++;
    ok = 1;
    fast = fast + 0.5;
    console.log("Poziom w górę!");
  }
}