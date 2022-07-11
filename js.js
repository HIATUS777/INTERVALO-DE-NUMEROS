function apresentar(){
    let n = [0,1]
    n[0] = document.querySelector('input#n1').value
    n[1] = document.querySelector('input#n2').value 
    let res = document.querySelector('div#res')
    let present = document.querySelector('div#present')
    if(n[0].length == 0||n[1].length == 0){
        alert("DIGITE ALGO")
           }

           else{
            n1 = Number(n[0])
            n2 = Number(n[1])
            res.innerHTML = ``
            present.innerHTML =``
            if(n1 < n2){
                for(let c = n1 + 1; c < n2 ; c++){
             present.innerHTML =`O INTERVALO DE ${n1} á ${n2} é: `
              res.innerHTML += ` ${c}`
                }
            }
            else{
                for(let c = n1 - 1; c > n2 ; c--){
                    present.innerHTML =`O INTERVALO DE ${n1} á ${n2} é: `
                    res.innerHTML += ` ${c}`
                }
            }
           }
}