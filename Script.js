const downloadBtn = document.querySelector(".buttonDownload");
// google drive  file link
const fileLink = "https://drive.google.com/file/d/1ileKocKk6IZ5syZCvT71iAOFU4LT5Gxa/view?usp=drive_link";

const initTimer = () => {

    // if downloadBtn contains disable-timer class then only if conditional code will run
    if(downloadBtn.classList.contains("disable-timer")){
        return (location.href = fileLink);
    }

    // getting data timer atttibute from html
    let timer = downloadBtn.dataset.timer;
    downloadBtn.classList.add("timer");
    downloadBtn.innerHTML = `Cv Will download in  <b>${timer}</b> seconds`

    // creating initcounter variable with setInterval function
    const initcounter = setInterval(() =>{
        if(timer >0){
            timer--
            return downloadBtn.innerHTML = `Cv Will download in  <b>${timer}</b> seconds`
        }
        clearInterval(initcounter)
        location.href = fileLink;
        downloadBtn.textContent = " Cv is Downloading..";

        setTimeout(() =>{
            downloadBtn.classList.replace("timer","disable-timer");
            downloadBtn.innerHTML = ` <a href="" class="btn downloadcv" download>Download Again  <i class="fa-solid fa-cloud-arrow-down"></i> </a>`
        },3000)
    },1000)//1000 milli seconds
}




downloadBtn.addEventListener("click", initTimer);


