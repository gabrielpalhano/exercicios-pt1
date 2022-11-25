var agora = new Date();
var hora = agora.getHours();
var txt = document.querySelector('div#txt');
var img = document.querySelector('div#img');
var foto = document.querySelector('img#foto')
// var hora = 22

    function load() {  
        txt.innerHTML = `Agora são ${hora} horas`
            if (hora >= 5 && hora < 12) {
                img.innerHTML = `<img src="img/manha.png" alt="manhazinha">`
                document.body.style.background = 'rgb(220, 231, 73)'
            } else if (hora >= 12 && hora < 19) {
                foto.src = `img/tarde.png`
                // img.innerHTML = `<img src="img/tarde.png" alt="tardezinha">`
                document.body.style.background = 'rgb(231, 194, 73)'
            } else {
                img.innerHTML = `<img src="img/noite.png" alt="noitinha">`
                document.body.style.background = 'rgb(120, 73, 231)'
            }
    }
