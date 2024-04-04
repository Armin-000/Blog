



function showText(sectionId) {
    var textElement = document.getElementById(sectionId + 'Text');
    if (textElement) {
        textElement.style.display = 'block';
    }
}




function hideText(sectionId) {
    var textElement = document.getElementById(sectionId + 'Text');
    if (textElement) {
        textElement.style.display = 'none';
    }
}





// Kontakt

// Funkcija za prikazivanje/plutanje plutajućeg prozora s kontakt informacijama

function toggleContactInfo() {
    var floatingContactInfo = document.getElementById("floatingContactInfo");
    if (floatingContactInfo.style.display === "block") {
        floatingContactInfo.style.display = "none";
    } else {
        floatingContactInfo.style.display = "block";
    }
}



function toggleCollapse(id) {
    var answer = document.getElementById(id);
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}






// Gumb za vracanje na pocetni dio stranice

// Funkcija koja se poziva kada se klikne na gumb "Vrati se na početak"

function scrollToTop() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        // Animirano pomicanje stranice prema vrhu
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 10);
    }
}

// Prikazivanje/gašenje gumba na osnovu pozicije skrolovanja stranice

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}




// Funckija koja zatvara odgovor prilikom otvaranja drugog odgovora za 3 sekciju

function toggleCollapse(id) {
    var answer = document.getElementById(id);
    if (answer.classList.contains("active")) {
        answer.classList.remove("active");
    } else {
        // Zatvorite sve odgovore prije otvaranja novog
        var allAnswers = document.querySelectorAll('.collapse-answer');
        allAnswers.forEach(function(answer) {
            answer.classList.remove("active");
        });
        answer.classList.add("active");
    }
}




