// gpaCalculator.js
// used with calculateGPA.html to calculate the gpa

// current number of courses
var counter = 3;

// calculates the GPA
function computeGPA(){
    //initialize the variables to 0
    var totalCredits = 0;
    var totalGrades = 0;

    var k = 1;
    while(k <= counter){
        // get the credits and grades from the table
        var id = "credits" + k;
        var credits = document.getElementById(id);
        id = "grade" + k;
        var grades = document.getElementById(id);

        var i = grades.selectedIndex;
        var j = credits.selectedIndex;
        
        totalCredits += parseFloat(credits.options[j].value);
        totalGrades += parseFloat(grades.options[i].value) * parseFloat(credits.options[j].value);
        k++;
    }
    // calculate the gpa
    var gpa = totalGrades / totalCredits;
    // round to 2 decimal places and display on screen
    document.getElementById("gpa").value = Math.round(gpa * 100) / 100 ;
}

// Adds a new course
function addCourse(){
    var grades = {"A":"4.0", "A-":"3.7", "B+":"3.3", "B":"3.0", "B-":"2.7", "C+":"2.3", "C":"2.0", "C-":"1.7", "D+":"1.3", "D":"1.0", "F":"0.0"};
    var table = document.getElementById("table1");
    if (counter < 99){
        // increment the counter
        counter++;
        // new row in the table
        var rowCount = table.rows.length - 1;
        var row = table.insertRow(rowCount);
        // the first cell (Course)
        var cell1 = row.insertCell(0);
        var element1 = document.createElement("input");
        element1.type = "text";
        element1.className="course";
        element1.name="course";
        element1.value="Course" + counter;
        cell1.appendChild(element1);
        // the second cell (Credits)
        var cell2 = row.insertCell(1);
        var element2 = document.createElement("select");
        element2.className="credits";
        element2.id = "credits" + counter;
        for(var i=1; i<=4; i++){
            var option = document.createElement("option");
            option.value = i;
            option.text = i;
            element2.appendChild(option);
        }
        cell2.appendChild(element2);
        // the third cell (Grade)
        var cell3 = row.insertCell(2);
        var element3 = document.createElement("select");
        element3.className="grade";
        element3.id = "grade" + counter;
        for (var grade in grades)
        {
            var option = document.createElement("option");
            option.value = grades[grade];
            option.text = grade;
            element3.appendChild(option);
        }
        cell3.appendChild(element3);
    }
    else{
		alert('Maximum number of courses reached');
	}
}

// removes the last course in the table
function removeCourse(){
    var table = document.getElementById('table1');
	var rowCount = table.rows.length;
    // if there are at least 2 courses
	if(rowCount > '3'){
		table.deleteRow(rowCount-2);
        // decrement the counter
        counter--;
	}
    // if the user tries to remove the last course
	else{
		alert('There should be at least one course');
	}
}