/**
 * Special function that handles HTTP GET requests to the published web app.
 * @return {HtmlOutput} The HTML page to be served.
 */
function doGet(request) {
  var action=request.parameters.action;
  var gssid=request.parameters.gssid;
  if("get-header"==action){
    var result =  getHeader(gssid);
    return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
  }else if("get-all"==action){
    var result = getAllData(gssid);
    return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
  }

}

function isEmpty(data) {
  return (typeof data === "undefined")  || ( typeof(data) == "string" && data.trim() == "" );
}

// Returns true if the cell where cellData was read from is empty.
// Arguments:
//   - cellData: string
function isCellEmpty(cellData) {
  return typeof(cellData) == "string" && cellData.trim() == "";
}

Array.prototype.repeat= function(what, L){
 while(L) this[--L]= what;
 return this;
}

Date.prototype.format = function(format) //author: meizz
{
  var o = {
    "M+" : this.getMonth()+1, //month
    "d+" : this.getDate(),    //day
    "h+" : this.getHours(),   //hour
    "m+" : this.getMinutes(), //minute
    "s+" : this.getSeconds(), //second
    "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
    "S" : this.getMilliseconds() //millisecond
  }

  if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
    (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  for(var k in o)if(new RegExp("("+ k +")").test(format))
    format = format.replace(RegExp.$1,
      RegExp.$1.length==1 ? o[k] :
        ("00"+ o[k]).substr((""+ o[k]).length));
  return format;
}


         
function stripPunctuation(str){
  return str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
}
 
function dasherize(str) {
      return str.trim().replace(/[_\s]+/g, '-').replace(/([A-Z])/g, '-$1').replace(/-+/g, '-').toLowerCase();
}
      
function slugify(str){
  var sl = dasherize(str.replace(/[^\w\s-]/g, '').toLowerCase());
  if (sl.charAt(0) === '-')
    sl = sl.substr(1);
  return sl;
}

function replaceAll(str,ss, r) {
  return str.split(ss).join(r);
}

function normalizeName(str){
  return replaceAll(slugify(stripPunctuation(str)),"-","_");
}
         
function numToChar(number){
        var numeric = (number - 1) % 26;
        var letter = chr(65 + numeric);
        var number2 = parseInt((number - 1) / 26);
        if (number2 > 0) {
            return numToChar(number2) + letter;
        } else {
            return letter;
        }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
function chr(codePt) {
        if (codePt > 0xFFFF) { 
            codePt -= 0x10000;
            return String.fromCharCode(0xD800 + (codePt >> 10), 0xDC00 + (codePt & 0x3FF));
        }
        return String.fromCharCode(codePt);
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function getHeader(gssid){
  var masterSheet = SpreadsheetApp.openById(gssid);
  var sheet= masterSheet.getSheets()[0];
  var values = sheet.getDataRange().getValues();
  return getHeaders(values,sheet.getLastColumn());
}

function getHeaders(values,lastColumn){
  var headers=[];
  for( var col = 0; col<=lastColumn; col++){
    var cellval=values[0][col];
    if(cellval==null || isCellEmpty(cellval)){
      headers.push("column_"+numToChar(col+1));
    }else{
      headers.push(normalizeName(cellval+""));
    }
  }
  return headers;
}

function getAllData(gssid){
  var masterSheet = SpreadsheetApp.openById(gssid);
  var sheet= masterSheet.getSheets()[0];
  var values = sheet.getDataRange().getValues();
  var headers=getHeaders(values,sheet.getLastColumn());
  var alldata=[];
  for( var row = 1; row<=sheet.getLastRow(); row++){
    var children={};
    for (var col = 0; col < headers.length; col++) {
      var header=headers[col];
      var r=values[row];
      if(r!=null){
        children[header]=r[col];
      }
    }
    alldata.push(children);
  }
  return alldata;
}

