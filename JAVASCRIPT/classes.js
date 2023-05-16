class hero
{
  constructor(px, py, d, func)
  {
    this.px = px;
    this.py = py;
    this.d = d;
  }
  show(end)
  {
    if(end==1)
    {
      fill(53, 57, 61);
    }
    else
    {
      fill(140);
    }
    circle(this.px, this.py, this.d);
  }
  move(val, poziom)
  {
    if(val==0)
    {
      if(this.py>this.d/2)
      {
        this.py = this.py - poziom;
      }
      else
      {
        this.py = this.py + poziom;
        wh = 1;
        zmien(1);
      }
    }
    else if(val==1)
    {
      if(this.py<height-40-(this.d/2))
      {
        this.py = this.py + poziom;
      }
      else
      {
        this.py = this.py - poziom;
        wh = 0;
        zmien(0);
      }
    }
  }
  czydotyka(slupek) {
    if(this.px+this.d/2>slupek.px-slupek.d/2+this.d/20 && this.px-this.d/2<slupek.px+slupek.d/2-this.d/10)
    {
      if(this.py+this.d/2>slupek.py-slupek.d/20 && this.py-this.d/2<slupek.py+slupek.d/20)
      {
        koniec(0);
      }
    }
  }
}

class slupek
{
  constructor(px, py, d, r)
  {
    this.px = px;
    this.py = py;
    this.d = d;
    this.r = r;
  }
  create()
  {
    push()
    fill("red");
    rectMode(CENTER);
    rect(this.px, this.py, this.d, this.d/10, this.r);
    pop()
  }
  move()
  {
    this.px = this.px - 1;
  }
}