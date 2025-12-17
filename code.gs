function doGet() {
  return HtmlService.createHtmlOutputFromFile("index")
  return htmlOutput.evaluate()
}

function saveData(ตัวแปร1,ตัวแปร2){
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  ss.appendRow([new Date(),ตัวแปร1,ตัวแปร2,"'"]);
}
function getSheetData() {
//หลายบรรทัด
  var ss = SpreadsheetApp.openById('xxxxxxxxxxxxxxx');
  var sheet = ss.getSheetByName('xxx');
  var datarange = sheet.getDataRange();
  var value = datarange.getValues();
  
  return value;
}
