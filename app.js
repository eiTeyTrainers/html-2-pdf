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
  opt = {
    filename: document.title + '.pdf',
    image: {type: 'jpeg',quality: 1},
    html2canvas:  { scale: 1 , useCORS: true},
    jsPDF: { format: 'A4', orientation: 'portrait' },
    
  }
  
  var downloadHider = document.getElementById('hide-download');
  //change
  html2pdf().set(opt).from(element).then(function(){

  }).save()

  
}


