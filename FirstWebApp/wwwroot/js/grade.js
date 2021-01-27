$("#gradeCalc").click(function () {
    //create variables
    const aWeight = 50;
    const gWeight = 10;
    const qWeight = 10;
    const eWeight = 20;
    const iWeight = 10;

    let assignment = parseInt($("assignment").val());
    let group = parseInt($("#group").val());
    let quiz = parseInt($("#quiz").val());
    let exam = parseInt($("#exam").val());
    let intex = parseInt($("#intex").val());

    //caluculate weighted average
    let finalGrade = ((assignment * aWeight + group * gWeight + quiz * qWeight + exam * eWeight + intex * iWeight) / 100).toFixed(2);

    //find letter grade
    let letterGrade = "";

    if (finalGrade >= 94) {
        letterGrade = "A";
    }
    else if (finalGrade >= 90) {
        letterGrade = "A-";
    }
    else if (finalGrade >= 87) {
        letterGrade = "B+";
    }
    else if (finalGrade >= 84) {
        letterGrade = "B";
    }
    else if (finalGrade >= 80) {
        letterGrade = "B-";
    }
    else if (finalGrade >= 77) {
        letterGrade = "C+";
    }
    else if (finalGrade >= 74) {
        letterGrade = "C";
    }
    else if (finalGrade >= 70) {
        letterGrade = "C-";
    }
    else if (finalGrade >= 67) {
        letterGrade = "D+";
    }
    else if (finalGrade >= 64) {
        letterGrade = "D";
    }
    else if (finalGrade >= 60) {
        letterGrade = "D-";
    }
    else {
        letterGrade = "E";
    }

    //display on page
    
    $("#finalGrade").text(letterGrade + " " + finalGrade);

});