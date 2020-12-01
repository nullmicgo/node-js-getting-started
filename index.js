const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
.get('/setCookie', (req, res) => {
  res.status(302)
    .cookie('amtoken','12341252423423', {
        expires: new Date(Date.now() + 8 * 3600000)})
    .send('set cookie successfully')
    
})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
