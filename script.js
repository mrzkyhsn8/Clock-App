const waktu = document.getElementById("displayClock");

// function tampil jam
function showClock() {

    // update setiap 1000m/s
    setTimeout(() => {
        console.log("tampilkan showclock")
        let date = new Date();
        // tahun = date.getFullYear();
        // bulan = date.getMonth();
        // hari = date.getDate();
        jam = date.getHours();
        menit = date.getMinutes();
        detik = date.getSeconds();
        
        waktu.innerHTML = `${jam} : ${menit} : ${detik}`;    
        showClock();
    }, 1000);
}

showClock();

// function tampil timer
// function showTimer() {
//     console.log("ini show timer");

//     waktu.innerHTML = `00 : 00 : 00`;
// }

