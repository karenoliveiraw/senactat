function media () {
    var nome = document.querySelector ("#tnome"); 
    var nt1 = document.querySelector ("#nota1"); 
    var nt2 = document.querySelector ("#nota2"); 
    var nt3 = document.querySelector ("#nota3"); 
    var res = document.querySelector ("#resp"); 

    var nt1 = Number(nota1.value)
    var nt2 = Number(nota2.value)
    var nt3 = Number(nota3.value)
  

    var media = (nt1 + nt2 + nt3 ) /3

    var mediaf = media.toFixed(1) 
    if (mediaf <= 5) {
        
        alert (`${nome.value}, Sua média é: ${media} Reprovado (a).`)

     } else 
        
        alert (`${nome.value}, Sua média é: ${media}, Aprovado. (a) `)
    

    res.innerHTML = `Sua média é <strong> ${media} </strong>`

}