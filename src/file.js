const fileData = require("./index");
var path = require("path");
const fileName = "file1";
fileData.myFileWriter(fileName, "hsvbfjafhjHFVhgV");
fileData.myFileReader(path.join(__dirname, fileName));
fileData.myFileUpdater(path.join(__dirname, fileName), "HABVHABFGAGFVAJHBV");
fileData.myFileDeleter(path.join(__dirname, fileName));
