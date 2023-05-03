var figcaps = document.getElementsByTagName('figcaption')
for (let figcap of figcaps) {
	let figure = figcap.parentElement
	let imgsrc = figure.getElementsByTagName('img')[0].src
	figcap.innerHTML = `${figcap.innerHTML} <a href="${imgsrc}" target=blank title="新标签页查看大图" class="new-tab-sym-link">↗</a>`
}
