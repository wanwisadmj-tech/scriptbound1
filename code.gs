function doGet() {
  return HtmlService.createHtmlOutputFromFile("index")
  }

function saveData(ตัวแปร 1,ตัวแปร 2){
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  ss.appendRow([new Date(),ตัวแปร 1,ตัวแปร 2,"'"]);
}

