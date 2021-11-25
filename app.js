const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const cors = require("cors")
const note = require("./routes/note")
const app = express()

app.use(morgan())
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

app.use("/api",note)

module.exports = app