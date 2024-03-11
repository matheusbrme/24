var scl,sc,bgl,bg,ci,sl,s,junp,scb


function preload()
{
scl = loadAnimation("sc.gif")
bgl = loadAnimation("bg.gif")
sl = loadImage("s.webp")
junp = loadAnimation("junp.gif")
scb = loadAnimation("scb.gif")
}

function setup() 
{
    createCanvas(600,600)

bg = createSprite(300,300)
bg.addAnimation("bg",bgl)
bg.scale = 2
sl = loadImage("s.webp")
sc = createSprite(50,410)
sc.addAnimation("sc",scl)
sc.addAnimation("unp",junp)
sc.addAnimation("scb",scb)
sc.scale = 0.2
ci = createSprite(300,475,600,30)
ci.visible = false
}

function draw() 
{
    background("white");


if(sc.isTouching(ci))
{
sc.velocityY = 0
sc.changeAnimation("sc",scl)
sc.scale = 0.2
}
else   
{
    sc.velocityY = sc.velocityY + 1
}


if (World.frameCount % 50 == 0) 
{
    createspike()
}

if (s.isTouching(sc))
{
sc.changeAnimation("scb",scb)
}

if(keyDown("space") && sc.isTouching(ci))
{
   
sc.velocityY = -15
sc.scale = 0.5
sc.changeAnimation("unp",junp)
}





 drawSprites()
}

function createspike() 
{
s = createSprite(650,415 )
s.addImage(sl)
s.velocityX  = -10  
s.scale = 0.6
}
