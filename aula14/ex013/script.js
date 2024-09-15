function verificar(){
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var data = new Date()
    var ano = data.getFullYear()
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('ERRO! Verifique os dados novamente')
    }else{
        var fsex = document.getElementsByName('redsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade => 0 && idade < 10){
                //c
                img.setAttribute('src', 'criancaH.jpg')
            }else if(idade < 21){
                //j
                img.setAttribute('src','jovemH.jpg  ')
            }else if(idade < 50){
                //a
                img.setAttribute('src','adultoH.jpg')
            }else{
                //idoso
                img.setAttribute('src','idosoH.jpg')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >0 && idade < 10){
                //c
                img.setAttribute('src', 'criancaM.jpg')
            }else if(idade < 21){
                //j
                img.setAttribute('src','jovemM.jpg')
            }else if(idade < 50){
                //a
                img.setAttribute('src','adultaM.jpg')
            }else{
                //i
                img.setAttribute('src','idosaM.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML=`Detectamos ${genero} com ${idade} anos` 
        res.appendChild(img)
    }

}