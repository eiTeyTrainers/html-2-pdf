
function downloadpdf(){
    var element = document.getElementById("document")
    opt = {
      filename: 'myfile.pdf',
      image: {type: 'jpeg',quality: 1},
    }
    
    var link = document.getElementById("id-css");
    link.setAttribute("href", "css/test-pdf.css");
    //change
    html2pdf(element)
    
     //change back
    link.setAttribute("href", "css/test.css");
    //change back
}

