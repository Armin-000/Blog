function expandContent(element) {
    element.classList.add('expanded');
}

function collapseContent(element) {
    element.classList.remove('expanded');
}


// Funkcija za prikazivanje opisa i slike na temelju države
function prikaziOpisISliku(drzava) {
    // Sakrij sve opise i slike
    var opisiISlike = document.querySelectorAll('.opisISlika');
    opisiISlike.forEach(function(opisISlika) {
        opisISlika.style.display = 'none';
    });
    // Pronađi odgovarajući opis i sliku i prikaži ih
    var odabraniOpisISlika = document.querySelector('#sadrzajWrapper .sadrzaj#' + drzava + ' .opisISlika');
    if (odabraniOpisISlika) {
        odabraniOpisISlika.style.display = 'block';
    }
}


