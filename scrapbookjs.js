
/**
 *
 *@param {string} lightboxID The id of the lightbox pop-up to show
 */
function unhideLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.remove('hidden');
	document.getElementById(lightboxID).classList.remove('hidden');

}

/*scrapbook*/
function unhideLightbox6() {
	unhideLightbox("bookstore-img")
}

document.getElementById("bookstore").onclick = unhideLightbox6;


function unhideLightbox7() {
	unhideLightbox("zondag-img")
}

document.getElementById("zondag").onclick = unhideLightbox7;



function unhideLightbox8() {
	unhideLightbox("antique-img")
}

document.getElementById("antique").onclick = unhideLightbox8;



function unhideLightbox9() {
	unhideLightbox("lilypad-img")
}

document.getElementById("lilypad").onclick = unhideLightbox9;



function unhideLightbox10() {
	unhideLightbox("pie-img")
}

document.getElementById("pie").onclick = unhideLightbox10;

function unhideLightbox11() {
	unhideLightbox("buns-img")
}

document.getElementById("buns").onclick = unhideLightbox11;



function unhideLightbox12() {
	unhideLightbox("architectura-img")
}

document.getElementById("architectura").onclick = unhideLightbox12;

function unhideLightbox13() {
	unhideLightbox("pride-img")
}

document.getElementById("pride").onclick = unhideLightbox13;

function unhideLightbox14() {
	unhideLightbox("haus-img")
}

document.getElementById("haus").onclick = unhideLightbox14;






function closeLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.add('hidden');
	document.getElementById(lightboxID).classList.add('hidden');

}



function closeAllLightboxes() {
	var lightboxElements = document.getElementsByClassName('lightbox');

	for (var i = 0; i < lightboxElements.length; i++) {
		var id = lightboxElements[i].id;
		closeLightbox(id);
	}
}

document.getElementById("lightbox-overlay").onclick = closeAllLightboxes;