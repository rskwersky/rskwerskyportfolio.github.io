
/**
 *
 *@param {string} lightboxID The id of the lightbox pop-up to show
 */
 function unhideLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.remove('hidden');
	document.getElementById(lightboxID).classList.remove('hidden');

}

/*scrapbook*/
function unhideLightbox15() {
	unhideLightbox("shakespeare-img")
}

document.getElementById("shakespeare").onclick = unhideLightbox15;


function unhideLightbox16() {
	unhideLightbox("eiffel-img")
}

document.getElementById("eiffel").onclick = unhideLightbox16;

function unhideLightbox17() {
	unhideLightbox("palace-img")
}

document.getElementById("palace").onclick = unhideLightbox17;

function unhideLightbox18() {
	unhideLightbox("brekkie-img")
}

document.getElementById("brekkie").onclick = unhideLightbox18;

function unhideLightbox19() {
	unhideLightbox("london-img")
}

document.getElementById("london").onclick = unhideLightbox19;

function unhideLightbox20() {
	unhideLightbox("city-img")
}

document.getElementById("city").onclick = unhideLightbox20;

function unhideLightbox21() {
	unhideLightbox("mont-img")
}

document.getElementById("mont").onclick = unhideLightbox21;

function unhideLightbox22() {
	unhideLightbox("canal-img")
}

document.getElementById("canal").onclick = unhideLightbox22;










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