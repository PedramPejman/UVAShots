reference = setInterval(fuckYouShots,1000);
//clearInterval(reference);
function httpGet(theUrl)
{
    var xmlHttp = null;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function timeStamp() {
  var now = new Date();
  var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];
  var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];
  var suffix = ( time[0] < 12 ) ? "AM" : "PM";
  time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;
  time[0] = time[0] || 12;
  for ( var i = 1; i < 3; i++ ) {
    if ( time[i] < 10 ) {
      time[i] = "0" + time[i];
    }
  }
  return date.join("/") + " " + time.join(":") + " " + suffix;
}

function fuckYouShots() {
var x = httpGet("https://www.ticketreturn.com/UVA/SelectEvent.aspx?Link=SelectEvent.aspx&EventID=119711");
var n = x.search("no more tickets");
if (n > 0) console.log(timeStamp() + " : No tickets found");
else {
	console.log(timeStamp() + " : GOT EM");
	alert("TICKETS AVAILABLE");
	clearInterval(reference);
	}
}
