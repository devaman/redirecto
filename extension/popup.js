document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');


   document.getElementById('analytics').addEventListener('click',function analytics() {
    var newURL = "http://stackoverflow.com/";
        chrome.tabs.create({ url: newURL });
   })


   document.getElementById('generate').addEventListener('submit', function(e){
   var URL = document.getElementById('longURL').value;
   console.log("url: "+URL)
e.preventDefault();
   
loadDoc(URL);    
   })

   function loadDoc(URL) {

   console.log("url2: "+URL)

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var respData=JSON.parse(this.responseText)
      document.getElementById("shortURL").innerText=respData.url;
      document.getElementById("code").innerText=respData.token;
     console.log(this.responseText);
    }
  };
  xhttp.open("POST", "https://redirecto.herokuapp.com/short");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhttp.send(JSON.stringify({ url: URL}));
}
   


  document.getElementById('copyToClipboard').addEventListener('click',function (event) {
    CopyToClipboard();
  })

function CopyToClipboard(containerid) {
if (document.selection) { 
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById("urli"));
    range.select().createTextRange();
    document.execCommand("copy"); 

} else if (window.getSelection) {
    var range = document.createRange();
     range.selectNode(document.getElementById("urli"));
     window.getSelection().addRange(range);
     document.execCommand("copy");
     alert("text copied") 
}}
  chrome.tabs.getSelected(null, function(tab) {
    document.getElementById('longURL').value=tab.url;
});
});


