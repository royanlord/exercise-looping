// soal 4
let say = "Apakah anda mau mengulang?"
let count = 0;

while(true) {
    if (confirm(say)) {
        count++
    } else {
        document.write(`Perulangan sudah dilakukan sebanyak ${count} kali`)
        break;
    }
}