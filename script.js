
/**
 *
 * @param {string} lightboxID The id of the lightbox pop-up to show
 */
function unhideLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.remove('hidden');
	document.getElementById(lightboxID).classList.remove('hidden');

}

function unhideLightbox1() {
	unhideLightbox("iconicity")
}

document.getElementById("work-img1").onclick = unhideLightbox1;


function unhideLightbox2() {
	unhideLightbox("amity")
}

document.getElementById("work-img2").onclick = unhideLightbox2;



function unhideLightbox3() {
	unhideLightbox("OskiRun")
}

document.getElementById("work-img3").onclick = unhideLightbox3;



function unhideLightbox4() {
	unhideLightbox("NextGenZine")
}

document.getElementById("work-img4").onclick = unhideLightbox4;



function unhideLightbox5() {
	unhideLightbox("Meskies")
}

document.getElementById("work-img5").onclick = unhideLightbox5;

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
