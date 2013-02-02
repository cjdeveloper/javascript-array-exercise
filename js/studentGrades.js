function calcAverage(gBook){
	var sum=0;
	var avg=0;

	for(var i=0;i<gBook.length;i++){
		sum+=gBook[i][1];
	}

	avg=(sum/gBook.length).toFixed(2);
	return avg;
}


function makeLetterGrade(grade){
	var result='F'; // default if no match in while loop
	var found=false;
	var index=0; // used to loop through elements in gradeScale array
	var gradeScale=[
		['A',90],
		['B',80],
		['C',70],
		['D',60]
	]; // maybe you want to change the grading scale in the future - just make that change here
    
    while(!found && index<gradeScale.length){
    
    	if (grade>=gradeScale[index][1]){
		result=gradeScale[index][0];
		found=true;
		}
		index++;
	}	

	return result;
}


var gradeBook=[
	['John',93],
	['Alice',84],
	['Bob',88],
	['Jack',73],
	['Jason',71],
	['Samantha',43],
	['Lisa',62],
	['Jake',30],
	['Beth',89],
	['Eric',65]
];



var classAvg=calcAverage(gradeBook);
output='Average grade: ' + classAvg + '<br />';
output+='Letter grade: ' + makeLetterGrade(classAvg);
document.write(output);

/* More test output */

var test='<br /> More test output: <br />';
test+='95: ' + makeLetterGrade(95) + '<br />';
test+='83: ' + makeLetterGrade(83) + '<br />';
test+='73: ' + makeLetterGrade(73) + '<br />';
test+='65: ' + makeLetterGrade(65) + '<br />';
test+='43: ' + makeLetterGrade(43) + '<br />';
document.write(test);