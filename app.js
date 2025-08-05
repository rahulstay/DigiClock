let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
setInterval(function () {
    let timenow = new Date();

    hr.innerHTML = (timenow.getHours() < 10 ? "0" : "") + timenow.getHours();
    min.innerHTML = (timenow.getMinutes() < 10 ? "0" : "") + timenow.getMinutes();
    sec.innerHTML = (timenow.getSeconds() < 10 ? "0" : "") + timenow.getSeconds();

}, 1000)
