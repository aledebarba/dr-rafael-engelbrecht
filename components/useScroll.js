// add js scrolling capabilities to 
// <a href="#anchorname" class="scrolling"></a>
// where anchorname is the destination target

const useScroll = (scrollClass) => {
	if (typeof(document)!='undefined') {
		const links = document.querySelectorAll('.useScroll');
		links.forEach(each => (each.onclick = scrollAnchors));
	}
}

export default useScroll

function scrollAnchors(e, respond = null) {
	
	function distanceToTop(el) {
		return Math.floor(el.getBoundingClientRect().top);
	}

    e.preventDefault();
	var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
	
	const originalTop = distanceToTop(targetAnchor);
	window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
	const checkIfDone = setInterval(function() {
		const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
		if (distanceToTop(targetAnchor) === 0 || atBottom) {
			targetAnchor.tabIndex = '-1';
			targetAnchor.focus();
			window.history.pushState('', '', targetID);
			clearInterval(checkIfDone);
		}
	}, 100);
}
