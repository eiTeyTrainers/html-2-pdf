var percentage = 1;
var root = document.documentElement;
root.style.cssText = '--percentage : ' + percentage;
function loadPercentage(){
  document.getElementById("percentage").innerHTML = percentage;
}

function downloadpdf(){
  var element = document.getElementById("document")
  opt = {
    filename: 'myfile.pdf',
    image: {type: 'jpeg',quality: 1},
  }
  
  var link = document.getElementById("id-css");
  
  var body = document.getElementById('id-body');
  var downloadHider = document.getElementById('hide-download');
  link.setAttribute("href", "css/pdf.css");
  //change
  html2pdf(element, opt)
  body.style.color = "white";
  downloadHider.style.display = 'block'
  
  link.setAttribute("href", "css/html.css")
  const myTimeout = setTimeout(changeColor, 200);
}

function changeColor() {
  var body = document.getElementById('id-body');
  var downloadHider = document.getElementById('hide-download');
  
  downloadHider.style.display = 'none'
  body.style.color = "black";
}

