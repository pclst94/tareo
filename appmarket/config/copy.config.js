moduñe.exports : {
	copyAssets:{
		src: ['{{SRC}}/assets/**/*'],
		dest: '{{WWW}}/assets'
	},
	copyIndexContent: {
		src: ['{{SRC}}/index.html','{{src}}/manifest.json', '{{SRC}}/service-worker.js'],
		dest: '{{WWW}}'
	}
}