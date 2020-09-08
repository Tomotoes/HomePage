window.hiddenProperty =
	'hidden' in document
		? 'hidden'
		: 'webkitHidden' in document
			? 'webkitHidden'
			: 'mozHidden' in document
				? 'mozHidden'
				: null

window.DIRECTIONS = {
	UP: 'UP',
	DOWN: 'DOWN',
	LEFT: 'LEFT',
	RIGHT: 'RIGHT',
	UNDIRECTED: 'UNDIRECTED'
}
window.isPhone =
	/Mobile|Android|iOS|iPhone|iPad|iPod|Windows Phone|KFAPWI/i.test(
		navigator.userAgent
	)

function getMoveDirection(startx, starty, endx, endy) {
	if (!isPhone) {
		return
	}

	const angx = endx - startx
	const angy = endy - starty

	if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
		return DIRECTIONS.UNDIRECTED
	}

	const getAngle = (angx, angy) => (Math.atan2(angy, angx) * 180) / Math.PI

	const angle = getAngle(angx, angy)
	if (angle >= -135 && angle <= -45) {
		return DIRECTIONS.UP
	} else if (angle > 45 && angle < 135) {
		return DIRECTIONS.DOWN
	} else if (
		(angle >= 135 && angle <= 180) ||
		(angle >= -180 && angle < -135)
	) {
		return DIRECTIONS.LEFT
	} else if (angle >= -45 && angle <= 45) {
		return DIRECTIONS.RIGHT
	}

	return DIRECTIONS.UNDIRECTED
}

function loadIntro() {
	if (document[hiddenProperty] || loadIntro.loaded) { return }
	
	setTimeout(() => {
		$('.wrap').classList.add('in')
		setTimeout(() => {
			$('.content-subtitle').innerHTML = `<span>${[...subtitle].join(
				'</span><span>'
			)}</span>`
		}, 270)
	}, 0)
	loadIntro.loaded = true
}

function switchPage() {
	if (switchPage.switched) {
		return
	}
	const DOM = {
		intro: $('.content-intro'),
		path: $('.shape-wrap path'),
		shape: $('svg.shape')
	}
	DOM.shape.style.transformOrigin = '50% 0%'

	anime({
		targets: DOM.intro,
		duration: 1100,
		easing: 'easeInOutSine',
		translateY: '-200vh'
	})

	anime({
		targets: DOM.shape,
		scaleY: [
			{
				value: [0.8, 1.8],
				duration: 550,
				easing: 'easeInQuad'
			},
			{
				value: 1,
				duration: 550,
				easing: 'easeOutQuad'
			}
		]
	})
	anime({
		targets: DOM.path,
		duration: 1100,
		easing: 'easeOutQuad',
		d: DOM.path.getAttribute('pathdata:id'),
		complete: function (anim) {
			if (canvas) {
				cancelAnimationFrame(animationID)
				canvas.parentElement.removeChild(canvas)
				canvas = null
			}
		}
	})

	switchPage.switched = true
}


function loadMain() {
	if (loadMain.loaded) {
		return
	}
	setTimeout(() => {
		$('.card-inner').classList.add('in')
	}, 400)
	loadMain.loaded = true
}

function loadAll() {
	if (loadAll.loaded) {
		return
	}
	switchPage()
	loadMain()
	loadAll.loaded = true
}

window.visibilityChangeEvent = hiddenProperty.replace(
	/hidden/i,
	'visibilitychange'
)
window.addEventListener(visibilityChangeEvent, loadIntro)
window.addEventListener('DOMContentLoaded', loadIntro)

const enterEl = $('.enter')
enterEl.addEventListener('click', loadAll)
enterEl.addEventListener('touchenter', loadAll)

document.body.addEventListener('mousewheel', loadAll, { passive: true })
$('.arrow').addEventListener('mouseenter', loadAll)

if (isPhone) {
	document.addEventListener(
		'touchstart',
		function (e) {
			window.startx = e.touches[0].pageX
			window.starty = e.touches[0].pageY
		},
		{ passive: true }
	)
	document.addEventListener(
		'touchend',
		function (e) {
			let endx, endy
			endx = e.changedTouches[0].pageX
			endy = e.changedTouches[0].pageY

			const direction = getMoveDirection(startx, starty, endx, endy)
			if (direction !== DIRECTIONS.UP) {
				return
			}
			loadAll()
		},
		{ passive: true }
	)
}
