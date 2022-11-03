function tombol() {
    // 
    const atm = document.getElementById('atm');
    atm.innerHTML = 'BANK CENTRAL ASIA';

    const elemenP = document.createElement('h2'); 
    const teksElementP = document.createTextNode('SELAMAT DATANG DI BANK CENTRAL ASIA'); 

    elemenP.appendChild(teksElementP); 

    const cetak = document.getElementById('body'); 

    cetak.appendChild(elemenP);
}
