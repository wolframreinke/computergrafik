var THREEx = THREEx || {}

/**
 * Grab camera
 * @constructor
 */
THREEx.VideoGrabbing = function(){

	var domElement	= document.createElement('video')
	domElement.setAttribute('autoplay', true)
	domElement.setAttribute('loop', true)
	domElement.setAttribute('muted', true)
	this.domElement = domElement

	domElement.src = 'videos/marker5.mp4'

	domElement.style.zIndex = -1;
        domElement.style.position = 'absolute'

				domElement.style.top = '0'
				domElement.style.left = '0'
				domElement.style.width = '100%'
				domElement.style.height = '100%'
/*	domElement.style.top = '50%'
	domElement.style.left = '50%'
	domElement.style.width = '100%'
	domElement.style.height = '480px'
domElement.style.margin = "-240px 0 0 -320px"*/


}
