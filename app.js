
function downloadpdf(){
  var element = document.getElementById("document")
  opt = {
    filename: document.title + '.pdf',
    image: {type: 'jpeg',quality: 1},
  }
  
  var link = document.getElementById("id-css");
  
  var body = document.getElementById('id-body');
  link.setAttribute("href", "css/pdf.css");
  //change
  html2pdf(element, opt)
  body.style.color = "white";
  link.setAttribute("href", "css/html.css")
  const myTimeout = setTimeout(changeColor, 8);
}

function changeColor() {
var body = document.getElementById('id-body');

body.style.color = "black";
}

