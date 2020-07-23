
//chap 38-42
//quesno1

function  powr(a,b){
    var a=2
    var b=3
    var c=Math.pow(a,b)
    alert(c)
}

// //quesno2
function leapyear(year){
    // var year=document.getElementById("year").value;
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);

}
console.log(leapyear(2016));
console.log(leapyear(2012));
console.log(leapyear(2020));
console.log(leapyear(2016));
console.log(leapyear(2019));

// //quesno3

function area(a,b,c){
    // var a=5
    // var b=6
    // var c=7
    var s=(a+b+c)/2
    var area1=Math.sqrt(s*(s-a)*(s-b)*(s-c))

    document.write("<br>"+"The Area of triangles is:"+area1)
}
 area(5,6,7)

// //quesno4
function mainFunction(){

var sub1=prompt("enter n0")
var sub2=prompt("enter n0")
var sub3=prompt("enter n0")
var total=sub1+sub2+sub3
 var average=avarage(total)
 var percentage2=percentage(total)

 alert("Average:"+average+"\nPercentage:"+percentage2)
}


function avarage(a){
  var keya=a/3
  return keya;
  document.write("<br>"+a)
}

function percentage(a){
  var b=a/300*100
  return b;

}
mainFunction()
// //quesno5

var str = "Hello world";
  function findMe(x){
  	for(var i = 0; i < str.length; i++){
    	if(str[i] != x){
        	continue;
        }
        else {    	
	    	document.write("<br>"+i);
            break;
        }
    }
  }
  findMe("d")
//quesno6
function disemvowel(string) {

    var vowels = {
      'a': true,
      'e': true,
      'i': true,
      'o': true,
      'u': true
    };
  
    var result = "";
  
    for (var i = 0; i < string.length; i++) {
      var letter = string[i].toLowerCase();
      if (!vowels[letter]) {
        result += string[i];
      }
    };
    return result;
  };
console.log(disemvowel('OVAL'))


// //quesno7
function findOccurrences() {
  var str = "Pleases read this application and give me gratuity";
  var count = 0;
let flag=false;
str=str.toLowerCase()
for(letter of str){
   switch(letter){
    case 'a':
      case 'e':
       case 'i':
        case 'o':
          case 'u':
    {
      if(flag){
        count++;
        flag=false;
      }else {
        flag=true;
      }
      break;
    }
    default:
    flag=false;
  }
  
}
alert("number of occurrences of any two vowels is:"+ count)
   }
  


// //quesno8
var a=prompt("enter no")
function meter(){
  
  var m=a*1000
  console.log(m)
}
meter(alert)



function centimeter(){
  
  var m=a*1000*100
  console.log(m)
}
centimeter(alert)

function feet(){
  
  var m=a*3280.84;
  console.log(m)
}
feet(alert)

function inches(){
  
  var m=a*39370.08;
  console.log(m)
}
inches(alert)


// //quesno9
function workingHours(){
  var workinghours=prompt("Enter hours")

  if(workinghours>40){
  over_time = workinghours - 40;
  overtime_pay =  (12 * over_time);
  alert(workinghours+"your overtime paid is:"+overtime_pay);
  }
  else if(workinghours<40){
    alert("working hours should be more then 40 hours")
       
  }
}
workingHours()

var time=prompt("enter hour")
overtime=0;
function hour(){
  i=1;
  while(i<=time)
  {
   overtime=i*12;
   i++;
   document.write("<br>"+overtime)
  }
}
hour(alert)

//quesno10

function currency(){
  var cash=+prompt("enter cash")
  var hundered=   (cash / 100); //cash/100;
var fifty=   ((cash % 100) / 50);    //cash/50;
var ten=((cash % 100) % 50) / 10;      //cash/10;
alert(cash+"the no of 100: "+hundered+ "the no of 50: "+fifty+"the no of 10: "+ten)
}
currency()

//chap 43-48
//ques no1

function link(){
  alert("Welcome to javascript")
}

//ques no2

function Mobile(){

  var image1=document.getElementById("phn1")
  image1.src='images/img1.jfif','img3.png','img4.jfif','img2.jfif"';
  
  alert("Thanks for purchashing phone from us")
}
//quesno3
 function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
   document.getElementById("tableData").deleteRow(i);
 }

//quesno4
function over(){
  var flo=document.getElementById('flower1')
  flo.src='images/flower3.png'
}
function out(){
  var flo=document.getElementById('flower1')
  flo.src='images/flower1.jfif'
}

//quesno5
var clicks = 0;
    function onClick() {
        clicks += 1;
     var a=   document.getElementById("clicks").innerHTML;
     
        console.log("increase:"+clicks)
    };

     var clicks = 0;
    function ofClick() {
        clicks -= 1;
        document.getElementById("clicks").innerHTML= clicks;
        console.log("decrease"+clicks)

    };

    //chap49-52

    //quesno1

    function  form1(){

      var Form=document.getElementById("fname").value;
      var Form2=document.getElementById("lname").value;
      var Form3=document.getElementById("age").value;

      alert("Firtname:"+Form+"\nLastname:"+Form2+"\nAge:"+Form3)



    }

    //quesno 2
    function readMore(){

      var text="<ul><li>Foggy</li><li>400rs</li><li>For men & women</li></ul>"

      var ul1=document.getElementById("readme")
    
      ul1.innerHTML=text;
    }

   
//ques no3
  function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name_row"+no);
 var country=document.getElementById("country_row"+no);
 var age=document.getElementById("age_row"+no);
	
 var name_data=name.innerHTML;
 var country_data=country.innerHTML;
 var age_data=age.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
 age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
}
function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var country_val=document.getElementById("country_text"+no).value;
 var age_val=document.getElementById("age_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("country_row"+no).innerHTML=country_val;
 document.getElementById("age_row"+no).innerHTML=age_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}
function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

  

  //chap 53-57

  //quesno 1

  function addImage(r){
    // console.log(r.src)
     var img1=document.getElementById("mdImage");
     img1.src= r.src
  }

  //ques no2
  var fontSize ='1';

  function ZoomIn() { 
     var a = document.getElementById("para"); 
    // var currentsize='16px'
  fontSize +='10';
    // var b=document.getElementById("
// a.style.fontSize =font+"px";
a.style.fontSize = fontSize + "px";
}



function ZoomOut(){
  var a = document.getElementById("para"); 

  fontSize -='10';
  a.style.fontSize = fontSize + "px";

}



//chap 58-67
//quesno 1
//ques no i

var element;
element=document.getElementById("main-content")
console.log(element)

//quesno ii

var a=document.getElementById("main-content");
var b=a.children;
console.log(b)

//quesno iii
var element1;
element1=document.getElementsByClassName("render");
console.log(element1)
console.log(element1[0].innerHTML)

//quesno iv

var a=document.getElementById("first-name").value="Kashaf"

//quesno v

var a=document.getElementById("last-name").value="Zehra"
var b=document.getElementById("email").value="kashaf032@gmail.com"

//ques no2
//ques no i

    var a=document.getElementById("form-content").nodeType;
    console.log(a)
    //ques no ii
    var a=document.getElementById("lastName").nodeType;
    console.log(a)

    var b=document.getElementById("lastName").childNodes;
    console.log(b)


//ques no iii
var b=document.getElementById("lastName").childNodes;
    console.log(b)

 //quesno iv
 var a=document.getElementById("main-content").firstChild;
 console.log(a)   
 var a=document.getElementById("main-content").lastChild;
 console.log(a) 

 //quesno v

 var a=document.getElementById("lastName").previousSibling;
 console.log(a)

 var a=document.getElementById("lastName").nextSibling;
 console.log(a)

 //ques no vi

 var a=document.getElementById("email").parentNode;
 console.log(a)

 var a=document.getElementById("email").nodeValue="kashafz23@gmail.com"
  console.log(a)
 
 

