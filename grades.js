console.log("assign student grades")
let marks=95
if(marks>=90 && marks<=100){
    grade="a";}
else if(marks>=75){
    grade="b";
}
else if(marks>=60){
    grade="c";
}else if(marks>50){
    grade="d";
}
else{
    grade="f";
}
console.log("marks:"+ marks);
console.log("grade:"+grade)
