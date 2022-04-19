var  caractere  =  documento . getElementById ( "caractere" ) ;
var  bloco  =  documento . getElementById ( "bloco" ) ;
var  contador = 0 ;
função  salto ( ) {
    if ( character . classList  ==  "animate" ) { return }
    personagem . classList . add ( "animar" ) ;
    setTimeout ( function ( ) {
        personagem . classList . remove ( "animar" ) ;
    } , 300 ) ;
}
var  checkDead  =  setInterval ( function ( )  {
    let  characterTop  =  parseInt ( window . getComputedStyle ( caracter ) . getPropertyValue ( "top" ) ) ;
    let  blockLeft  =  parseInt ( window . getComputedStyle ( block ) . getPropertyValue ( "left" ) ) ;
    if ( blockLeft < 20  &&  blockLeft > - 20  &&  characterTop >= 130 ) {
        bloco . estilo . animação  =  "nenhum" ;
        alert ( " Game Over. score: " + Math . floor ( counter / 100 ) ) ;
        contador = 0 ;
        bloco . estilo . animação  =  "bloco 1s linear infinito" ;
    } senão {
        contador ++ ;
        documento . getElementById ( "scoreSpan" ) . innerHTML  =  Math . andar ( balcão / 100 ) ;
    }
} ,  10 ) ;
