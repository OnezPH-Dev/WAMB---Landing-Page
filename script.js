const dropCon = document.getElementById("dropDown");
const btn = document.getElementById("btnDrop");
dropCon.style.display = "none";
dropCon.style.visibility = "hidden";


// Navigation Bar IT Solution Dropdown Menu
function btnDrop(){
    if(dropCon.style.display == "none"){
        dropCon.style.display = "block";
        dropCon.style.visibility = "visible";
    }else{
        dropCon.style.display = "none";
        dropCon.style.visibility = "hidden";
    }
}

function requestSolutions(){
    alert("Under Maintenance!");
}
function getSolutions(){
    alert("Under Maintenance!");
}


// Scroll Reveal Function
window.addEventListener('scroll', reveal)
let aboutNavBtn = document.getElementById('aboutBTN');
let servicesNavBtn = document.getElementById('servicesBTN');
let successstoriesNavBtn = document.getElementById('successstoriesBTN');
let homeNavBtn = document.getElementById('homeBTN');

// Nav Menu btn
let btnmenu1 = document.getElementById('home-active');
let btnmenu2 = document.getElementById('about-active');
let btnmenu3 = document.getElementById('services-active');
let btnmenu4 = document.getElementById('successstories-active');
let btnmenu5 = document.getElementById('contact-active');

// Nav Menu li
let homeLi = document.getElementById('home-li');
let aboutLi = document.getElementById('about-li');
let servicesLi = document.getElementById('services-li');
let successstoriesLi = document.getElementById('successstories-li');
let contactLi = document.getElementById('contact-li');
function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){
        var windowInnerhigh = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 200;
        var totalHigh = windowInnerhigh - revealpoint;

        // Sec 2 Element
        var sstext = document.getElementById('sstxt');
        var ssimage = document.getElementById('ssimage');

        // Sec 3 Element
        var tscontent = document.getElementById('tscontent');
        var tsheader = document.getElementById('tsh');

        // Sec 4 Element
        var f2sec = document.getElementById('f2secReveal');

        // Sec 5 Element
        var f3scontent = document.getElementById('f3scontent');
        var f3sheader = document.getElementById('f3sh');

        // Sec 6 Element
        var s2scontent = document.getElementById('s2secTeam');
        var section6Header = document.getElementById('headerSec6');
        if(reveals[i] == reveals[0]){
            btnmenu1.style.color = "#FFC40E";
            btnmenu2.style.color = "#222";
            btnmenu3.style.color = "#222";
            btnmenu4.style.color = "#222";
            btnmenu5.style.color = "#222";


            homeLi.classList.add('activeNavMenu');
            aboutLi.classList.remove('activeNavMenu');
            servicesLi.classList.remove('activeNavMenu');
            successstoriesLi.classList.remove('activeNavMenu');
            contactLi.classList.remove('activeNavMenu');
        }
        else if(reveals[i] == reveals[1]){
            if(revealtop < totalHigh){
                sstext.classList.add('sstxtactive');
                ssimage.classList.add('ssimageactive');

                btnmenu1.style.color = "#222";
                btnmenu2.style.color = "#FFC40E";
                btnmenu3.style.color = "#222";
                btnmenu4.style.color = "#222";
                btnmenu5.style.color = "#222";

                homeLi.classList.remove('activeNavMenu');
                aboutLi.classList.add('activeNavMenu');
                servicesLi.classList.remove('activeNavMenu');
                successstoriesLi.classList.remove('activeNavMenu');
                contactLi.classList.remove('activeNavMenu');
            }
            else{
                sstext.classList.remove('sstxtactive');
                ssimage.classList.remove('ssimageactive');
            }
        }
        else if(reveals[i] == reveals[2]){
            if(revealtop < totalHigh){
                tscontent.classList.add('tscontentactive');
                tsheader.classList.add('tsheaderactive');

                btnmenu1.style.color = "#222";
                btnmenu2.style.color = "#222";
                btnmenu3.style.color = "#FFC40E";
                btnmenu4.style.color = "#222";
                btnmenu5.style.color = "#222";

                homeLi.classList.remove('activeNavMenu');
                aboutLi.classList.remove('activeNavMenu');
                servicesLi.classList.add('activeNavMenu');
                successstoriesLi.classList.remove('activeNavMenu');
                contactLi.classList.remove('activeNavMenu');
            }
            else{
                tscontent.classList.remove('tscontentactive');
                tsheader.classList.remove('tsheaderactive');
            }
            
        }
        else if(reveals[i] == reveals[3]){
            if(revealtop < totalHigh){
                f2sec.classList.add('f2secRevealTop');

                btnmenu1.style.color = "#222";
                btnmenu2.style.color = "#222";
                btnmenu3.style.color = "#222";
                btnmenu4.style.color = "#FFC40E";
                btnmenu5.style.color = "#222";

                homeLi.classList.remove('activeNavMenu');
                aboutLi.classList.remove('activeNavMenu');
                servicesLi.classList.remove('activeNavMenu');
                successstoriesLi.classList.add('activeNavMenu');
                contactLi.classList.remove('activeNavMenu');
            }
            else{
                f2sec.classList.remove('f2secRevealTop');
            }
        }
        else if(reveals[i] == reveals[4]){
            if(revealtop < totalHigh){
                f3scontent.classList.add('f3scontentactive');
                f3sheader.classList.add('f3sheaderactive');

                btnmenu1.style.color = "#222";
                btnmenu2.style.color = "#222";
                btnmenu3.style.color = "#222";
                btnmenu4.style.color = "#222"
                btnmenu5.style.color = "#222";

                homeLi.classList.remove('activeNavMenu');
                aboutLi.classList.remove('activeNavMenu');
                servicesLi.classList.remove('activeNavMenu');
                successstoriesLi.classList.remove('activeNavMenu');
                contactLi.classList.remove('activeNavMenu');
            }
            else{
                f3scontent.classList.remove('f3scontentactive');
                f3sheader.classList.remove('f3sheaderactive');
            }
        }
        else if(reveals[i] == reveals[5]){
            if(revealtop < totalHigh){
                s2scontent.classList.add('teamshow');
                section6Header.classList.add('headerteamshow');

                btnmenu1.style.color = "#222";
                btnmenu2.style.color = "#222";
                btnmenu3.style.color = "#222";
                btnmenu4.style.color = "#222"
                btnmenu5.style.color = "#FFC40E";

                homeLi.classList.remove('activeNavMenu');
                aboutLi.classList.remove('activeNavMenu');
                servicesLi.classList.remove('activeNavMenu');
                successstoriesLi.classList.remove('activeNavMenu');
                contactLi.classList.add('activeNavMenu');
            }else{
                s2scontent.classList.remove('teamshow');
                section6Header.classList.remove('headerteamshow');
            }
        }
    }
}




function checkAllServices(){
    alert('Under Maintenance!');
}
function viewProjects(){
    alert('Under Maintenance!');
}