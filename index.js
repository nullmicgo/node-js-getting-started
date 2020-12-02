const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
.get("/setCookie", (req, res) => {
res
.status(302)
.cookie(
"amtoken",
"iwIIDe5qvxAFDR0Yvjf6bTAT84Q.*AAJTSQACMDIAAlNLABxlcTRZTEQ4bnZ1UGJubk01NzRRcjlWZWRoaW89AAR0eXBlAANDVFMAAlMxAAIwNA..*",
{ httpOnly: true, secure: true }
)
.send("set cookie successfully");
})
.listen(PORT, () => console.log(`Listening on ${ PORT }`))
