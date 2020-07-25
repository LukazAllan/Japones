function tudo(){
    window.document.getElementById("gram").innerText = data.estruturas[Math.floor(Math.random() * data.estruturas.length)];
    let rd = 1;//Math.floor(Math.random() * 4);
    let plv = [data.palavras[Math.floor(Math.random() * data.palavras.length)],data.palavras[Math.floor(Math.random() * data.palavras.length)],data.palavras[Math.floor(Math.random() * data.palavras.length)]]
    if (rd === 1){
        window.document.getElementById("pls").innerHTML = `<div class="resp"><div class="inner"><ruby onmousedown="sig()" onmouseup="kanji()">${plv[0][0]}<rt>${plv[0][1]}</rt></ruby></div><div class="inner"><p>${plv[0][2]}</p></div></div>`;
    } else if (rd === 2){
        window.document.getElementById("pls").innerHTML = `<div class="resp"><div class="inner"><ruby onmousedown="sig()" onmouseup="kanji()">${plv[0][0]}<rt>${plv[0][1]}</rt></ruby></div><div class="inner"><p>${plv[0][2]}</p></div></div><div class="resp"><div class="inner"><ruby onmousedown="sig()" onmouseup="kanji()">${plv[1][0]}<rt>${plv[1][1]}</rt></ruby></div><div class="inner"><p>${plv[1][2]}</p></div></div>`;
    } else if (rd === 3){
        window.document.getElementById("pls").innerHTML = `<div class="resp"><div class="inner"><ruby onmousedown="sig()" onmouseup="kanji()">${plv[0][0]}<rt>${plv[0][1]}</rt></ruby></div><div class="inner"><p>${plv[0][2]}</p></div></div><div class="resp"><div class="inner"><ruby onmousedown="sig()" onmouseup="kanji()">${plv[1][0]}<rt>${plv[1][1]}</rt></ruby></div><div class="inner"><p>${plv[1][2]}</p></div></div><div class="resp"><div class="inner"><ruby onmousedown="sig()" onmouseup="kanji()">${plv[2][0]}<rt>${plv[2][1]}</rt></ruby></div><div class="inner"><p>${plv[2][2]}</p></div></div>`;
    }

}
function est() {
    window.document.getElementById("gram").innerText = data.estruturas[Math.floor(Math.random() * data.estruturas.length)];
}
function pal() {
    let rd = 1; //Math.floor(Math.random() * 3) + 1;
    let plv = [data.palavras[Math.floor(Math.random() * data.palavras.length)],data.palavras[Math.floor(Math.random() * data.palavras.length)],data.palavras[Math.floor(Math.random() * data.palavras.length)]]
    if (rd === 1){
        window.document.getElementById("pls").innerHTML = `<div class="resp"><div><ruby onmousedown="sig()" onmouseup="kanji()">${plv[0][0]}<rt>${plv[0][1]}</rt></ruby></div><div>${plv[0][2]}<div></div>`;
    } else if (rd === 2){
        window.document.getElementById("pls").innerHTML = `<div class="resp"><ruby">${plv[0][0]}<rt>${plv[0][1]}</rt></ruby></div><div class="resp"><ruby>${plv[1][0]}<rt>${plv[1][1]}</rt></ruby></div>`;
    } else if (rd === 3){
        window.document.getElementById("pls").innerHTML = `<div class="resp"><ruby">${plv[0][0]}<rt>${plv[0][1]}</rt></ruby></div><div class="resp"><ruby>${plv[1][0]}<rt>${plv[1][1]}</rt></ruby></div><div class="resp"><ruby>${plv[2][0]}<rt>${plv[2][1]}</rt></ruby></div>`;
    }
}
function sig(qm, plv) {
    if (qm === '1') {
        window.document.getElementById("rb1").innerText = plv[0][2]
    }
}
function kanji(qm, plv) {
    if (qm === '1') {
        window.document.getElementById("rb1").innerText = plv[0][0]
    }
}
