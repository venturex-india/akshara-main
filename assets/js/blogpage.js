const walist = [
    ["01 Aug 2025","My Akshara Story", "My_Akshara_Story.html","A Journey of Growth"],
    ["09 Aug 2025","Happy Schooling", "happy_schooling.html","Why We Love Learning Here"],
  ];
  
  window.onload = function () {
    let divv = '';
    for (let loop_card = 0; loop_card < walist.length; loop_card++) {
      divv += '<div class="newsletter-drive-card">';
      divv += '<div class="image-wrapper">';
      divv += '<img src="assets/images/bgart.jpg" class="image1">';
      divv += '<div class="overlay-text"><b>' + walist[loop_card][1] + '</b></div>';
      divv += '</div>';
      divv += '<div class="orgname">';
      divv += '<p style="color: black;padding-top: 15px;">' + walist[loop_card][3] + '</p>';
      divv += '<span class="titlecard"> Date : ' + walist[loop_card][0] + '</span>';
      divv += '</div>';
  
      divv += '<div class="orgbut">';
      divv += '<a href="' + walist[loop_card][2] + '" target="_blank">';
      divv += '<button class="viewprofilebutton menubutt">View</button></a>';
      divv += '</div>';
      divv += '</div>';
    }
    console.log(divv);
  
    document.getElementById("newsletter-drive-grid").innerHTML = divv;
  };
  