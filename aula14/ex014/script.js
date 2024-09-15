function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    hora = 15
    //var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >=0 && hora < 12){
        img.src="fotoDIA.jpg"
        document.body.style.background = "#e2cd9f"

    } else if (hora >= 12 && hora < 18){
        img.src="fotoTARDE.jpg"
        document.body.style.background = "#f0e68c"

    }else{
        img.src ="fotoNOITE.jpg"
        document.body.style.background = "#515154"
    }


}