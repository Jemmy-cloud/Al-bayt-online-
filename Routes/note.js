const noteRouter = require("express").Router()
const noteController = require("../Controllers/note")
const AddressesController = require("../Controllers/Addresses")

noteRouter.get("/categories",noteController.NoteGetcategories)
noteRouter.get("/Addresses",noteController.NoteGetAddresses)

module.exports = noteRouter;