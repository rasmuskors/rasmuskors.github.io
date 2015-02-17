window.onload = function () {
    document.getElementById('close1').onclick = function () {
        document.getElementById('work1').style.display='none';
         document.getElementById('close1').style.display='none';
        
        document.getElementById('work2').style.display='block';
         document.getElementById('close2').style.display='block';
        document.getElementById('work3').style.display='block';
         document.getElementById('close3').style.display='block';
        return false;
    };
    document.getElementById('close2').onclick = function () {
        document.getElementById('work2').style.display='none';
         document.getElementById('close2').style.display='none';
        
                                    document.getElementById('work1').style.display='block';
         document.getElementById('close1').style.display='block';
        document.getElementById('work3').style.display='block';
         document.getElementById('close3').style.display='block';
        return false;
    };
    document.getElementById('close3').onclick = function () {
        document.getElementById('work3').style.display='none';
         document.getElementById('close3').style.display='none';
        
                document.getElementById('work1').style.display='block';
         document.getElementById('close1').style.display='block';
        document.getElementById('work2').style.display='block';
         document.getElementById('close2').style.display='block';
        return false;
    };
};






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
    
