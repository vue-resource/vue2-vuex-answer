(function(doc,win){
	var docELe = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange':'resize',
		recalc = function() {
            var clientWidth = docELe.clientWidth;
            if (!clientWidth) return;
            docELe.style.fontSize = 20 * (clientWidth / 320) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document,window)