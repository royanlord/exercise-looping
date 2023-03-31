# exercise-looping

Nama : Royan Farid Fathurrahman<br/>
Kelompok : FE-24

1. File soal1 diminta menampilkan teks "User ke-1 ... User ke-100" pada halaman HTML
Step : pertama buat variabel let i = 1 yang artinya looping dimulai dari angka 1. i <= 10 merupakan condition dimana looping kurang dari atau sama dngan 100.          sedangkan i++ merupakan iterasi agar program terus melakukan looping sampai condition yang telah ditentukan. Saat terjadi perulangan, akan menampilkan teks "User ke-..." dari code document.write("...") yang ada di dalam statement

2. File soal2 diminta untuk melakukan penambahan 2 nilai setiap pengulangan sebanyak 10 kali.
Step : pertama saya deklarasi variabel nilaiAwal dengan value 0 dan variabel loop dengan value 10. Lalu saya buat perulangan for loop dengan i bervalue 0, i < loop, dan i++ melakukan iterasi. Saat terjadi perulangan, value dari variabel nilaiAwal yang semula 0 akan terus ditambah dengan 2 sampai program mencapai batas looping yang telah ditentukan yaitu 10.

3. File soal3 diminta untuk membuat iterasi dari 0 sampai 20 lalu setiap nilai akan dicek dalam setiap looping dan di outputkan keterangan bilangan ganjil atau genap sesuai nilai tersebut
Step : pertama saya membuat for loop dengan nilai awal i adalah 0 dan i kurang dari atau sama dengan 20. Lalu dalam proses looping, terdapat condition if jika i modulus 2 == 0 maka akan meng-outputkan keterangan "i adalah bilangan genap". Jika tidak maka akan meng-outputkan "i adalah bilangan ganjil".

4. File soal4 diminta untuk menampilkan konfirmasi popup.
Step : pertama saya deklarasi 2 variabel yaitu say dengan value "Apakah anda mau mengulang?" dan count dengan value 0. Variabel count ini nantinya untuk menghitung jumlah klik tombol "Ok". Lalu saya membuat perulangan dengan while dimana parameternya true. Di dalam perulangan itu terdapat condition if dengan condition confirm() dan statement count++ untuk melakukan iterasi jika user klik tombol "Ok". Sedangkan di dalam else terdapat code document.write() yang berfungsi untuk menampilkan teks berapa kali jumlah tombol "Ok" di klik setelah user klik tombol "Cancel"


5. File soal5 diminta untuk menampilkan prompt()
Step : pertama saya deklarasi 3 buah variabel yaitu correct dengan value "Impact Byte", result dengan value null, dan say dengan value "Jelaskan kepanjangan dari nama IB?". Setelah itu saya membuat perulangan dengan while dimana di dalamnya terdapat condition jika value dari variabel result tidak sama dengan value dari variabel correct maka akan melakukan looping prompt("Jelaskan kepanjangan dari nama IB?") terus menerus hingga jawabannya sesuai dengan value variabel correct. Jika jawaban yang dimasukkan sesuai, maka akan menampilkan alert("Selamat jawaban kamu benar!")
