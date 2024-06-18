function carregar() {
    var msg = document.querySelector('#msg')
    var imagem = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    
    //msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        imagem.src="imagens/manha.jpg"
        //msg.innerHTML = `Agora são ${hora} horas, bom dia!!`
         min = msg.innerHTML = `Agora são ${hora} horas e ${min} minutos, bom dia!!`
         document.body.style.background = 'rgb(245, 234, 154)'

    }
    else if ( hora >= 12 && hora <= 18) {
        imagem.src="imagens/tarde.jpg"
         min = msg.innerHTML = `Agora são ${hora} horas e ${min} minutos, boa tarde!!`
         document.body.style.background = 'rgb(217, 97, 144)'
    }
    else {
        imagem.src="imagens/noite.jpg"
         min = msg.innerHTML = `Agora são ${hora} horas e ${min} minutos, boa noite!!`
         document.body.style.background = 'rgb(3, 18, 21)'
    }
}