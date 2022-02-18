var percentage = 50;
var root = document.documentElement;
root.style.cssText = '--percentage : ' + percentage;
function loadPercentage(){
  document.getElementById("percentage").innerHTML = percentage;
}

function downloadpdf(){
  var element = document.getElementById("document")
  var css = document.getElementById("id-css");
  var body = document.getElementById('id-body');
  var downloadHider = document.getElementById('hide-download');
  opt = {
    filename: document.title + '.pdf',
    image: {type: 'jpeg',quality: 1},
    html2canvas:  { scale: 2 , useCORS: true},
    jsPDF: { format: 'A4', orientation: 'portrait' },
    
  }
  
  css.setAttribute("href", "css/pdf.css");
  html2pdf().set(opt).from(element).then(function(){
    css.setAttribute("href", "css/html.css");

  }).save()

  
}


