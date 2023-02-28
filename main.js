var student=[]

function submit(){
    var name_1=document.getElementById("student_1").value
    student.push(name_1)
    var name_2=document.getElementById("student_2").value
    student.push(name_2)
    var name_3=document.getElementById("student_3").value
    student.push(name_3)
    var name_4=document.getElementById("student_4").value
    student.push(name_4)
    var name_5=document.getElementById("student_5").value
    student.push(name_5)

    document.getElementById("display_name").innerHTML=student
}

function sort(){
    student.sort()
    document.getElementById("sorted_elements").innerHTML=student
}