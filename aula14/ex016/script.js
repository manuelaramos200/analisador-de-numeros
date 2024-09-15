function contar(){
    var i = document.getElementById('txti')
    var f = document.getElementById('txtf')
    var p = document.getElementById('txtp')
    var resultado = document.getElementById('resultado')

    if(i.value.length == 0 || f.value.length == 0 || p.value.length == 0){
        window.alert('Erro! faltam dados')
    }else{
        resultado.innerHTML = 'CONTANDO: <br>'
        var inicio = Number(i.value)
        var fim = Number(f.value)
        var passo = Number(p.value)
        if ( passo <= 0 ){
            window.alert('Passo Invalido, Considerando Passo 1')
            passo = 1
        }
        if ( inicio < fim ){
            for (var c = inicio; c <= fim; c += passo){
                resultado.innerHTML += `${c}\u{1F449} `
            }
            }else{
                for(var c = inicio; c >= f; c-= p){
                    resultado.innerHTML += ` ${c}\u{1f449}`
                }

            }
            resultado.innerHTML += `\u{1F3C1}`
        } 
        
    }

