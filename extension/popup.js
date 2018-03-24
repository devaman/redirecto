document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  // checkPageButton.addEventListener('click', function() {

    // chrome.tabs.getSelected(null, function(tab) {
    //   d = document;

    //   var f = d.createElement('form');
    //   f.action = 'http://gtmetrix.com/analyze.html?bm';
    //   f.method = 'post';
    //   var i = d.createElement('input');
    //   i.type = 'text';
    //   i.name = 'url';
    //   i.value = tab.url;

    //   f.appendChild(i);
    //   d.body.appendChild(f);
    //   f.submit();
    // });
  // }, false);
  chrome.tabs.getSelected(null, function(tab) {
    document.getElementById('inp').value=tab.url;
    // myFunction(tab.url);
});
}, false);
// chrome.tabs.getCurrent(function(tab){
//         console.log(tab.url);
//     }
// );