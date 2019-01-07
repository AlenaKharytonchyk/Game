const ghPages = require('gh-pages')

ghPages.publish('public', (err) => console.log(JSON.stringify(err)))
