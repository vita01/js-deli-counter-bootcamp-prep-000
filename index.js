
var otherDeli;
  var katzDeli=[];
function takeANumber(katzDeli,name){
  katzDeli.push(name);
  console.log( "Welcome, "+name+". You are number "+katzDeli.length+" in line.")
  return  "Welcome, "+name+". You are number "+katzDeli.length+1+" in line." ;


}

function katzDeliLine(name){


}

function nowServing(line){
  var num=line.length;
  if(num===0){
    return "There is nobody waiting to be served!"
  }
  else{
    return "Currently serving "+line.shift()+".";
  }


}

function currentLine(){}
