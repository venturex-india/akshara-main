const walist = [
    ["Edition: June 2025", "newsletter/JUNE-2025.pdf"],
    ["Edition: July 2025", "newsletter/JULY-2025.pdf"],
  ];
  
  window.onload = function () {
    let divv = '';
    for (let loop_card = 0; loop_card < walist.length; loop_card++) {
      divv += '<div class="newsletter-drive-card">';
      divv += '<div class="image-wrapper">';
      divv += '<img src="assets/images/bgart.jpg" class="image1">';
      divv += '<div class="overlay-text"><b>NEWSLETTER</b></div>';
      divv += '</div>';
      divv += '<div class="orgname">';
      divv += '<span class="titlecard">' + walist[loop_card][0] + '</span>';
      divv += '</div>';
  
      divv += '<div class="orgbut">';
      divv += '<a href="' + walist[loop_card][1] + '" target="_blank">';
      divv += '<button class="viewprofilebutton menubutt">View</button></a>';
  
      divv += '<a href="' + walist[loop_card][1] + '" download="' + walist[loop_card][1].replace(/\s+/g, '-') + '.pdf">';
      divv += '<button class="downloadprofilebutton menubutt">Download</button></a>';

      divv += '</div>';
      divv += '</div>';
    }
    console.log(divv);
  
    document.getElementById("newsletter-drive-grid").innerHTML = divv;
  };
  