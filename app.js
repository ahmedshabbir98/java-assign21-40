// CHAPTER 21-25 TASKS


// var firstname =prompt("enter your fist name")
// var lastname =prompt("enter your last name")
// var fullName= firstname + lastname
// alert("wlecome to the page "+" "+ fullName)



// var favMob=prompt("enter your fav mob")
// var lengthString  = favMob.length
// document.write(favMob+"<br>")
// document.write("length of string is" +" "+ lengthString)
    


// var text="pakistani"
// var letter = text.indexOf("n")
// document.write(text + "<br>")
// document.write("the index of 'n' is"+" " +letter )


// var string ="hello world"
// var text=string.lastIndexOf("l")
// document.write(string + "<br>")
// document.write("the index of 'l' is"+" " + text )


// var name="pakistani"
// var string=name.charAt(3)
// document.write(name + "<br>")
// document.write("Character at index 3 is " +" " + string)

// var text="hyderabad"
// var find=text.indexOf("hyder")
// if(find!==-1){
//     text=text.slice(0,find) + "islam" + text.slice(find+5)
// }
// document.write(text)


// var msg="Ali and Sami are best friends. They play cricket and football together"
// var rep= msg.replace(/and/g, "&")
// document.write(rep)

// var num = "472"
// var numb = Number(num)
// document.write(typeof num + "<br> ")
// document.write(typeof numb)


// var userInput = prompt("enter anything")
// var input = userInput.toUpperCase()
// document.write(input)


// var userInput=prompt("enter any thing")
// var firstchar=userInput.slice(0,1)
// firstchar=firstchar.toUpperCase()
// var laststring=userInput.slice(1)
// laststring=laststring.toLowerCase()
// var final = firstchar + laststring
// document.write(final)


// var username=prompt("enter yiur user name")
// var input=username
// for(i=0;i<input.length;i++)
// if(input.charAt(i)==="@" ||input.charAt(i)===","||input.charAt(i)==="."){
//     alert("enter valid username ")

// }


// var password=prompt("enter password")
// if(password.slice(0,1)==="1"){
//     alert("enter valid pass")

// }else if(password.length>=6){
//     alert("enter valid pass")
// }



// var msg="University of sir syed university"
// var res=msg.split("  ","3")
// res=msg.indexOf("u")
// for(i=0;i<=msg.length;i++){
//     document.write(res.indexOf)
// }

// var msg = "the quick brown fox jumps over the lazy dog"
// var arr=[]
// for(i=0;i<=msg.length;i++){
//     if(msg.slice(i,i+3)==="the"){
//         var a=msg.slice(i,i+3)
//     }

// }
// console.log(a)
// arr.push(a)
// console.log(arr)
// // document.write(a)
// document.write(arr.length)



    // CHAPTER NO 26-30



// var number=+prompt("enter any number")
// document.write("your number is "+ " " + number +"<br>")
// var num =Math.round(number)
// document.write("your rounded no is"+ " " +num +"<br>")    
// var num1 =Math.ceil(number)
// document.write("your ceil no is"+ " " +num1 +"<br>")   
// var num2 =Math.floor(number)
// document.write("your floor no is"+ " " +num2 )     


// var num=+prompt("enter the number")
// num=Math.abs(num)
// document.write(num)


// var dice=Math.random(dice)*6
// dice=Math.round(dice)
// document.write(dice)


// var num=Math.random(num)*2
// num=Math.round(num)
// if(num===0){
//     document.write("Heads")
// }else{
//     document.write("Tails")
// }

// var num=Math.random(num)*100
// num=Math.round(num)
// document.write(num)


// var weight=+prompt("enter your weight")
// alert(weight+"kgs")

// var num=Math.random(num)*10
// num=Math.round(num)
// var num1=+prompt("enter your num")
// if(num1===num){
//     document.write("you guess it right")
// }else{
//     document.write("try again!")
// }


// var time=new Date()
// document.write(time+"<br>")
// var arr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",]
// var mon=time.getMonth()
// var name=arr[mon]

// document.write("current month is"+" "+name+"<br>")
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var din=time.getDay()
// var nam=dayNames[din]
// document.write("today is "+" "+ nam +"<br>")
// if(nam==="Sun"||nam==="Sat"){
//     document.write("its fun day")
// }else{
//     document.write("its week day"+"<br>")
// }
//  var tareeq=time.getDate()
//  if(tareeq<=15){
//      document.write("its first fifteen days of month")
//  }else{
//      document.write("last days of month"+"<br>")
//  }
// var t=time.getTime()
// document.write(t)


// var currentDate = new Date()
// // console.log(currentDate)
// var pretime =currentDate.getTime()
// // console.log(pretime)
// var pretimeMinu = pretime/(1000*60*60)
// document.write(pretimeMinu)


// var newTime = new Date()
// var hours = newTime.getHours()
// if (hours<=11){
//     document.write("its AM")
// }else{
//     document.write("its PM")
// }


// var lastDate = new Date("Apr 1,2020")
// var lastDatemili = lastDate.getTime()
// var currentDate=new Date()
// var currentDatemili =currentDate.getTime()
// var diff=currentDatemili - lastDatemili
// var days = diff/(1000*60*60*24)
// days=Math.floor(days)
// document.write(days + " "+ "days since 1 RAMZAN")


// var newDate = new Date("Dec 31, 2020")
// var newDatemili = newDate.getTime()
// var currentDate = new Date()
// var currentDatemili = currentDate.getTime()
// var diff = newDatemili -currentDatemili 
// var seconds =diff/(1000*60*60)
// document.write(seconds)

// var date = new Date()
// date.toString()
// alert(date)
// date.setFullYear(1925)

// alert(date)

// Chapter 35-38

// function currentDate(){
// var date = new Date()
// date.toString()
// alert(date)
// }
// currentDate()


// function greet(){
//     var firstname=prompt("enter your first name")
//     var lastname=prompt("enter your last name")
//     var fullName=firstname +" "+ lastname
//     alert("Welcome to this page"+" "+ fullName)
// }
// greet()


// function add(){
//     var num1=+prompt("enter no")
//     var num2=+prompt("enter no")
//     var total = num1 + num2
//     return total
// }

// document.write("total is"+" "+ add())

// function calc(num1,num2){
//     var result=num1 -num2
//     return result
// }
// document.write(calc(7,2))

// function square(a){
//     var result=a*a
//     return result
// }
// document.write(square(+prompt("enter no")))
    // function A(a=7,b=5){
    //     var result = a*b 
    //     return result
    // }
    // document.write(A())
    // function A(a,b){
    //     var result = a*b 
    //     return result
    // }
    // document.write(A(5,5))

//     var arr=prompt("enter any string")
//     arr.length
//     var arr1=[]
//     for(i=arr.length;i>=0;i--){
//     arr1.push(arr[i])    
//     }
// var a=arr1.slice(0,arr1.length)
// a=a.toString()
// console.log(a)


// function calcCircumferrence(r){
//     var result=2*(22/7)*r
//     return result

// }
// document.write( calcCircumferrence(7)+"<br>")
// function square(a){
//         var result=a*a
//         return result
//     }
// function calcArea(){
//     var re9sult1 = 3.142*(square(7))
//     return result1
// }
// document.write(calcArea())


// var msg =prompt("enter any message")
// var str=msg.length
// var con =msg.slice(0,msg.indexOf(" "))
// console.log(con)
// var firstletter=con.charAt(0)
//  firstletter= firstletter.toUpperCase()
// console.log(firstletter + con.slice(1))


// function coounting(){
//     var start=+prompt("enter start no")
// var end=+prompt("enter end no")
// for(i=start;i<=end;i++){
//     document.write(i+"<br>")
// }

// }
// document.write(coounting())

