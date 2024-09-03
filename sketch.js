
function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background("white");
    fill("red");
    textSize(64);
    textAlign(CENTER, CENTER)
    
    let maximo = width;
    let minimo = 0;
    let palavra = "o amor morreu por mim";
    let quantidade = map(mouseX, 0, width, 1, palavra.length);
    let parcial = palavra.substring(0,quantidade);
    text(parcial,50,50);
    
  //  if(mouseX < 50){
  //    let palavra = "C";
  //    text(palavra, 50, 50);
  //  } else {
  //    let palavra = "doi te amar";
  //    text(palavra, 50, 50);
  //  }
  }