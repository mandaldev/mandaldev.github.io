function dirname(url) {
	let end = url.lastIndexOf('/')
	let start = url.lastIndexOf('/', end - 1)
	return url.substr(start + 1, end - start - 1)
}

var imgs = document.getElementsByTagName('img')
for (let img of imgs) {
	let src = img.attributes.src.nodeValue
	if (src.length > 0 && src[0] != '/') {
		let realsrc = '/image/' + dirname(img.baseURI) + '/' + src
		img.attributes.src.nodeValue = realsrc
	}
}

var figcaps = document.getElementsByTagName('figcaption')
for (let figcap of figcaps) {
	let figure = figcap.parentElement
	let imgsrc = figure.getElementsByTagName('img')[0].src
	figcap.innerHTML = `${figcap.innerHTML} <a href="${imgsrc}" target=blank title="新标签页查看大图" class="new-tab-sym-link">↗</a>`
}
