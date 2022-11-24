 function mtn() {
    var txt = document.querySelector('div#d1');
    var img = document.querySelector('div#d2');
    var foto = document.querySelector('img#foto')
    var agora = new Date();
    var hora = agora.getHours();
    // var hora = 22;


    txt.innerHTML = `Agora são ${hora} horas.`
    
        if (hora >= 5 && hora < 12) {
            foto.src = 'img/manha.png'
            //img.innerHTML = `<img src="img/manha.png" alt="manha">`
            document.body.style.background = 'rgb(220, 231, 73)'
        } else if (hora >= 12 && hora < 19) {
            foto.src = 'img/tarde.png'
            //img.innerHTML = `<img src="img/tarde.png" alt="tarde">`
            document.body.style.background = 'rgb(231, 194, 73)'
        } else {
            //foto.src = 'img/noite.png'
            img.innerHTML = `<img src="img/noite.png" alt="noite">`
            document.body.style.background = 'rgb(120, 73, 231)'
        }
}