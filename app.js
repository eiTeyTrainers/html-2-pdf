var percentage = 30;
var root = document.documentElement;
root.style.cssText = '--percentage : ' + percentage
function downloadpdf(){
  var element = document.getElementById("document")
  opt = {
    filename: 'myfile.pdf',
    image: {type: 'jpeg',quality: 1},
  }
  
  var link = document.getElementById("id-css");
  
  var body = document.getElementById('id-body');
  link.setAttribute("href", "css/test-pdf.css");
  //change
  body.style.color = "white";
  html2pdf(element)
  link.setAttribute("href", "css/test.css")
  const myTimeout = setTimeout(changeColor, 5);
}

function changeColor() {
var body = document.getElementById('id-body');

body.style.color = "black";
}

