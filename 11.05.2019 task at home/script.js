// task at home date
count = 0
var date1 = new Date("2019-5-10")
while (count < 100){
var date2 = new Date()
var date1_ms = date1.getTime();
  var date2_ms = date2.getTime();

  // Calculate the difference in milliseconds
  var difference_ms = date2_ms - date1_ms;
  //take out milliseconds
  difference_ms = difference_ms/1000;
  var seconds = Math.floor(difference_ms % 60);
  difference_ms = difference_ms/60; 
  var minutes = Math.floor(difference_ms % 60);
  difference_ms = difference_ms/60; 
  var hours = Math.floor(difference_ms % 24);  
  var days = Math.floor(difference_ms/24);

 console.log(days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, and ' + seconds + ' seconds');
 count++
}




var numbers = [2, 3, 5, 7, 8, 5, 78, 85, 58, 45, 65,];


function findDublicate(numbers) {
   var temp = []
    for (i = 0; i<numbers.length; i++){
        
         for(j = i+1; j<numbers.length; j++){
           
            if(numbers[i]===numbers[j]){
                
                   temp.push(numbers[j])
                   
            }
         }
     
   }
   return temp;
           
}
console.log(findDublicate(numbers));