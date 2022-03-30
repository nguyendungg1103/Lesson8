function kq() {
    let numberA = document.getElementById('number1').value;
    let numberB = document.getElementById('number2').value;
    let numberC = document.getElementById('number3').value;
    let denta = numberB * numberB - 4 * numberA * numberC;
    if (numberA == 0) {
        document.getElementById('ketqua').innerText =parseFloat((-numberC) / numberB);

    }
    if (denta < 0) {
        document.getElementById('ketqua').innerText = "vo nghiem"
    } else if (denta == 0) {
        document.getElementById('ketqua').innerText =parseFloat((-numberB )/ (2 * numberA));
    } else {
        document.getElementById('ketqua').innerText = parseFloat((-numberB + Math.sqrt(denta)) / (2 * numberA) ) + "" +parseFloat(((-numberB - Math.sqrt(denta)) / (2 * numberA)))
    }

}