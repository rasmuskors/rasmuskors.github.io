

function textFunction() {
    document.getElementById('text1').style.display='block';
    validate();
    anotherFunction();
    YetAnotherFunction();
}




				<a href="javascript:;" onClick="textFunction()">
					Reveal hidden content</a>
				
				<a href="javascript:;" onClick="document.getElementById('text1').style.display='none';">
					Hide content again</a>
				
				<a href="javascript:;" onClick="textFunction2()">
					Reveal hidden content</a>
				
				<a href="javascript:;" onClick="document.getElementById('text2').style.display='none';">
					Hide content again</a>