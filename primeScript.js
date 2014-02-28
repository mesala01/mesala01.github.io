function myFunction(){
  var inp= document.getElementById("myButton").value;
  if (isNaN(inp) || !isFinite(inp) || inp==0){
       alert("You should enter a number")
  }
  else {
  	var primeFactors = new Array();
  	var k =2;
  	for (i=k; i<=inp; i++){
  		if (inp % i==0){
  			primeFactors.push(i);
  			inp/=i;
  		}
  	}
}
  
  
	var myList = document.getElementById("items");
  	for (var t = 0; t < primeFactors.length; t++) {
  		var li = document.createElement("li")
  		li.innerHTML =primeFactors[t]
  		myList.appendChild(li)
  
  }

  	



    
}



  
 




