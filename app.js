var percentage = 50;
var root = document.documentElement;
root.style.cssText = '--percentage : ' + percentage;
function loadPercentage(){
  document.getElementById("percentage").innerHTML = percentage;
}

function downloadpdf(){
  var element = document.getElementById("document")
  opt = {
    filename: document.title + '.pdf',
    image: {type: 'jpeg',quality: 1},
    html2canvas:  { scale: 1 },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
  }
  
  var link = document.getElementById("id-css");
  
  var body = document.getElementById('id-body');
  var downloadHider = document.getElementById('hide-download');
  //change
  html2pdf(element, opt)

  
  const myTimeout = setTimeout(changeColor, 200);
}


