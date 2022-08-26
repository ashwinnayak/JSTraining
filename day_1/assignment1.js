// based on mark of a student we need to find his grade
// if mark is 0-40, grade = D, 40-60: grade=C: 60-80 grade -B: 80 & above , grade =A
var a=80
if(a<=40){
    console.log('grade D')
}else if(a>40 && a<=60){
    console.log('grade C')
}else if(a>60 && a<=80){
    console.log('grade B')
}else if(a>80 && a<=100){
    console.log('grade A')
}else if(a>100 || a<=0){
    console.log('Invalid')
}