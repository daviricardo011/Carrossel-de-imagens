var imagens = document.getElementsByTagName('img');
var contador = 0;
var bolas = document.getElementsByClassName("bolinha");

mudarImagem(contador);

function mudarImagem(numero){
    
    contador += numero;
    for (i = 0; i < imagens.length; i++){ 
      imagens[i].style.display = "none";
    } 
    
    for (i = 0; i < bolas.length; i++) 
    bolas[i].className = bolas[i].className.replace("ativada", "");
    
    if (contador > imagens.length - 1){ 
      contador = 0 ;
    }  
    
    if (contador < 0){
      contador = imagens.length - 1;
    }    
    
    imagens[contador].style.display = "block";

    
    bolas[contador].className += " ativada"; //O ESPAÇO DENTRO DAS ASPAS FAZ DIFERENÇA

    


}