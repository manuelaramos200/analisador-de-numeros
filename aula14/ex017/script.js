function Tabuada(){
    let num = document.querySelector('input#txtn')
    var tab = document.getElementById('seltab')

    if(num.value.length != 0){
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <=10){
            let item = document.createElement('option')
            item.text = (`${c} x ${n} = ${c*n}`)
            tab.appendChild(item)
            c++
        }

    }else{
        window.alert('Digite um numero!')
    }
}