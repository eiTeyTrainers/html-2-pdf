var percentage = 50;
var root = document.documentElement;
root.style.cssText = '--percentage : ' + percentage;
function loadPercentage(){
  document.getElementById("percentage").innerHTML = percentage;
}

async function downloadpdf(){
  const texts=document.querySelectorAll('#text')
  texts.forEach(text=>{
  text.innerHTML = text.innerText.replace(/\s/g,"\u00a0")
  })
  var css = document.getElementById("id-css");
  var element = document.getElementById("document")
  var body = document.getElementById('id-body');
  var downloadHider = document.getElementById('loading');
  opt = {
    filename: document.title + '.pdf',
    image: {type: 'jpeg',quality: 1},
    html2canvas:  { scale: 2 , useCORS: true},
    jsPDF: { format: 'A4', orientation: 'portrait' },
    pagebreak: {avoid: 'tr'}
  }

  css.setAttribute("href", "css/pdf.css");
  html2pdf().set(opt).from(element).then(function(){
    setTimeout(Loading, 0)
    
  }).save()

  function Loading(){
    css.setAttribute("href", "css/html.css");
  }
}


