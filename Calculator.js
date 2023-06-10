  function add(){
     var a=0, b=0;
     a=f.field.value;
     b=a.charAt(a.length-1);
     if(b=='+' || b=='-' || b =='/' || b=='*'){
           f.field.value = a.substring(0,a.length-1);
           f.field.value+='+'
   }else{
    f.field.value+='+'
}
}
function sub(){
     var a=0, b=0;
     a=f.field.value;
     b=a.charAt(a.length-1);
     if(b=='+' || b=='-' || b =='/' || b=='*'){
           f.field.value = a.substring(0,a.length-1);
           f.field.value+='-'
   }else{
    f.field.value+='-'
}
}
function div(){
     var a=0, b=0;
     a=f.field.value;
     b=a.charAt(a.length-1);
     if(b=='+' || b=='-' || b =='/' || b=='*'){
           f.field.value = a.substring(0,a.length-1);
           f.field.value+='/'
   }else{
    f.field.value+='/'
}
}
function mul(){
     var a=0, b=0;
     a=f.field.value;
     b=a.charAt(a.length-1);
     if(b=='+' || b=='-' || b =='/' || b=='*'){
           f.field.value = a.substring(0,a.length-1);
           f.field.value+='*'
   }else{
    f.field.value+='*'
}
}