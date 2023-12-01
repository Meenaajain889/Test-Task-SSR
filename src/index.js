const express = require("express");
const cors = require("cors")
const helmet = require("helmet")
const path = require("path")
const routes = require("./routes/routes")

const app = express();
const port = process.env.PORT || 3000;

const viewFolderPath = path.join(__dirname, '../templates/views')
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'ejs')

app.set('views', viewFolderPath)

app.use(express.static(publicDirectoryPath))
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(routes)

app.listen(port, () => console.log(`server is running at ${port}`))