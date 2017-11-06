
var otherDeli;
  var katzDeli=[];
function takeANumber(katzDeli,name){
  katzDeli.push(name);
  console.log( "Welcome, "+name+". You are number "+katzDeli.length+1+" in line.")
  return  "Welcome, "+name+". You are number "+katzDeli.length+1+" in line." ;


}

function katzDeliLine(name){


}

function nowServing(){
  var num=katzDeli.length;
  if(num===0){
    return "There is nobody waiting to be served!"
  }
  else{
    return "Currently serving "+katzDeli[0]+".";
  }


}

function currentLine(){}
