function doPost(e) {
  // if you ever run this manually, bail out gracefully
  if (!e || !e.parameter) {
    return ContentService
      .createTextOutput(JSON.stringify({error: "No parameters received"}))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*");
  }

  const params = e.parameter;
  const ss     = SpreadsheetApp.openById("Theta Sound Waitlist");
  const sh     = ss.getSheetByName("Sheet1");

  // append a timestamp plus whatever fields your form sends
  sh.appendRow([ new Date(), params.email, params.name ]);

  return ContentService
    .createTextOutput(JSON.stringify({status: "success", data: params}))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader("Access-Control-Allow-Origin", "*");
}

function doGet(e) {
  return doPost(e);
}

function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
    .setHeader("Access-Control-Allow-Headers", "Content-Type");
}