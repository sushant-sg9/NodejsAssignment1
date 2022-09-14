const fs = require("fs/promises");

const myFileWriter = async (fileName, fileContent) => {
  fs.writeFile(fileName, fileContent);
}; 

const myFileReader = async (fileName) => {
  // write code here
  // dont chnage function name
  const data = await fs.readFile(fileName);
  console.log(data.toString());
};

const myFileUpdater = async (fileName, fileContent) => {
  // write code here
  // dont chnage function name44
  fs.appendFile(fileName, fileContent);
};

const myFileDeleter = async (fileName) => {
  // write code here
  // dont chnage function name
  fs.rm(fileName);
};

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
