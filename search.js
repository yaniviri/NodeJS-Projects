var fs = require('fs');

searchForFrase();

function searchForFrase() {

  var ext = process.argv[2];
  var text = process.argv[3];
  var filesToPrint = [];

  if (ext == undefined)
  {
    console.log("Usage: node search.js [EXT] [TEXT]");
  }
  else
  {
  fs.readdir(__dirname, function(err, filenames) {
    if (err) {
      console.log("1");
      return;
    }
    filenames.forEach(function(filename) {
      var filenamLength = filename.length;
      var extLength = ext.length;
      if (filename.toLowerCase().indexOf("."+ext.toLowerCase()) + 1 == (filenamLength - extLength) && text != undefined && filename.toLowerCase().indexOf(text.toLowerCase()) < (filenamLength - extLength) && filename.toLowerCase().indexOf(text.toLowerCase()) >= 0) // text.ext
        {
          filesToPrint.push(filename);
        }
      else if (filename.toLowerCase().indexOf("."+ext.toLowerCase()) + 1 == (filenamLength - extLength) && text == undefined)
      {
        filesToPrint.push(filename);
      }
      })
      if(filesToPrint.length == 0)
      {
        console.log("No file was found");
      }
      filesToPrint.forEach(function(file) {console.log(file)}
    )
  });
  }
}
