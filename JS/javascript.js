





function textFunction() {
     document.getElementById('text1').style.display='block';
     document.getElementById('text2').style.display='none';
     document.getElementById('text3').style.display='none';
    document.getElementById('text4').style.display='none';
           YetAnotherFunction();
}
         
function textFunction2() {
     document.getElementById('text2').style.display='block';
     document.getElementById('text1').style.display='none';
     document.getElementById('text3').style.display='none';
     document.getElementById('text4').style.display='none';
    YetAnotherFunction();
}
         
         
function textFunction3() {
           document.getElementById('text3').style.display='block';
         document.getElementById('text1').style.display='none';
          document.getElementById('text2').style.display='none';
           document.getElementById('text4').style.display='none';
           YetAnotherFunction();
         }
         
function textFunction4() {
           document.getElementById('text4').style.display='block';
         document.getElementById('text1').style.display='none';
          document.getElementById('text2').style.display='none';
           document.getElementById('text3').style.display='none';
           YetAnotherFunction();
         }
         
function textFunction5() {
           document.getElementById('text4').style.display='none';
         document.getElementById('text1').style.display='none';
          document.getElementById('text2').style.display='none';
           document.getElementById('text3').style.display='none';
           YetAnotherFunction();
         }



 // FOR THE BUTTON TO RETURN BACK UP
//browser window scroll (in pixels) after which the "back to top" link is shown
var offset = 300,
	//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
	offset_opacity = 1200,
	//duration of the top scrolling animation (in ms)
	scroll_top_duration = 700;
   

 
 