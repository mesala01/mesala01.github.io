function myFunction(){ 
	/*Take the starting word input, the ending input and the length 
	when the user click on the button*/
	var startWord =document.getElementById("startWord").value.trim().toLowerCase().toString();
	var endWord = document.getElementById("endWord").value.trim().toLowerCase().toString();
	var WordLength = document.getElementById("length").value;
	var ThreeWordsArray = threeLetterWords;
	var FourWordsArray = fourLetterWords;
	var FiveWordsArray = fiveLetterWords;
	
	
	/*var choice = WordLength.options[WordLength.selectedIndex].value;*/
	
       /* check if the startin word and the ending word has the same length. */
	   if (startWord.length != WordLength ||  endWord.length != WordLength ) {   
	   
	     alert(" START WORD and END WORD must be the same length as your chosen length. Please verify");
		 return;
	     } 
	     /* if the user's choice is 3. We check if the startin word and the ending word are both in the threeletterWords arraylist.
	     if not a pop-up box  will show an error message.*/
	   else if (WordLength == "3"){
	          if (ThreeWordsArray.indexOf(startWord) < 0 || ThreeWordsArray.indexOf(endWord) < 0 ) {
	          	 alert("Sorry, your words could not be found in the dictionary. Please choose other words");
	          	/*console.log(ThreeWordsArray.indexOf(startWord));*/
	          	
	          }
	             
	              }
          /* if the user's choice is 4. We check if the startin word and the ending word are both in the fourletterWords arraylist.
	     if not a pop-up box  will show an error message.*/
        else if (WordLength == "4"){
	          if (FourWordsArray.indexOf(startWord) < 0 || FourWordsArray.indexOf(endWord) < 0 ) {
	          	 alert("Sorry, your words could not be found in the dictionary. Please choose other words");
	          	/*console.log(FourWordsArray.indexOf(startWord));*/
	          	
	          }
	             
	              }

         /* if the user's choice is 5. We check if the startin word and the ending word are both in the fiveletterWords arraylist.
	     if not a pop-up box  will show an error message.*/
        else if (WordLength == "5"){
	          if (FiveWordsArray.indexOf(startWord) > -1 || FiveWordsArray.indexOf(endWord) > -1 ) {
	          	 alert("Sorry, your words could not be found in the dictionary. Please choose other words");
	          	 return;
	          	/*console.log(FourWordsArray.indexOf(startWord));*/
	          	
	          }
	          	 
	          }
	             
	              
	    /* if everything is ok, the startWord search for word ladder.*/
         var stack = new myStackClass();
         stack.push(starWord);
         ladderWords(starWord, stack);
         var ladderWords = findWords (starWord);
         if (!ladderWords) {
         	alert("Unfortunately, we could not find a ladder for your chosen words. Please, try different words.")
         }
         else {
         	startWord.ladderWords = ladderWords;
         }

         }


         Printoutput ()
            
             }



function WordLadder (startWord, stack ) {
	for (var i =0; i < startWord.)

}
		    
		   
				
		        	
				     
	/*for (var i=0; i< startWord.length; i++) {
	          	 	for (var letters = "a".charCodeAt(0); letters <= "z".charCodeAt(0); letters++ ) {
	          	 		var NewWord = startWord.substring(0, i) +  String.fromCharCode(letters) +  startWord.substring(i, 1);

	          	 		if (NewWord == endWord){
	          	 			alert( "we have found" + " " + NewWord);
	          	 		
	          	 	}
	          	 } */
	       
		   
	   
	

	   
	   
		 
	
	
	




