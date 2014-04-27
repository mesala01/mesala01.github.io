

function wordLadder() {
    var findladder = getStartingData();

    if(findLadder.error) {
        if(findladder.error == "EQUAL") {
            alert(alert("ERROR: starting word and ending word cannot be the same")
        }
        else if(findLadder.error == "NOT_THE_SAME_LENGTH") {
            alert("Starting word and ending word should be the same length as your chosen length")
        }
        else if(findLadder.error == "EMPTY_FIELDS") {
            alert("You have to choose a starting word and an ending Word. Fields cannot be empty")
        }
   }
    else if{

        findLadder.usedWords.add(findLadder.startWord); 
    
        var Newstack = new myStackClass();
        Newstack.push(findladder.start);

      NextWords(findLadder, Newstack);
        var ladder = iterate(findLadder); // this should find us a valid ladder
        if(!ladder) { 
           alert("The program failed to find a valid ladder for " + starWord + "and" + endWord)
        }
        else {
           findLadder.error = undefined;
            findLadder.ladder = ladder
        }
    }
    DisplayLadder(findLadder);
}

function NextWords(findLadder, Newstack) {
    for(var i=0; i<findLadder.dictionary.length; i++) {
        if(Differences(Newstack.peek(), findLadder.dictionary[i]) == 1) {
            if(!findLadder.usedWords.isInSet(findLadder.dictionary[i])) { 
                var v = cloneStack(Newstack);
                v.push(findLadder.dictionary[i]); // add the new word (that only has 1 letter difference)
                findLadder.NewQueue.enQueue(v);
                findLadder.usedWords.add(findLadder.dictionary[i]);
            }
        }
    }
    return true;
}

function iterate(findLadder) {

    while (!findLadder.NewQueue.isEmpty()) {
        var stack = findLadder.NewQueue.deQueue(); 
        var topStack = stack.peek();

        if(topStack == findLadder.end) { 
            return stack; } 
        else {
            NextWords(findLadder, stack);       
        }
    }
    return false;
}

function Differences(w1, w2) {
    var v = 0;
    for(var i=0; i<word1.length; i++) {
        if (w1[i] != w2[i]) { 
        	v++; }
    }
    return v;
}

function getStartingData() {
    var data = {}

    // get form data
    findLadder.start = document.getElementById("starWord").value;
   findLadder.end = document.getElementById("endWord").value;
    findLadder.len = parseInt(document.getElementById("length").value);
    
    // validate the inputs
    if((findLadder.start == "") || (findLadder.end == "")) {
        findLadder.error = "EMPTY_FIELDS";
        return data;
    }
    else if(findLadder.start == FindLadder.end) {
        FindLadder.error = "EQUAL";
        return data;
    }
    else if ((findLadder.start.length != findladder.len) || (data.findLadder.length != findLadder.len)) {
        findLadder.error = "NOT_THE_SAME_LENGTH";
        return data;
    }
   
    
    if(findLadder.len == 3) { 
    	findLadder.dictionary = threeLetterWords; }
    else if(findladder.len == 4) {
    	findLadder.dictionary = fourLetterWords; } 
    else if(findladdder,len == 5){ 
    	findLadder.dictionary = fiveLetterWords; }

   
    findLadder.NewQueue = new myQueueClass();
    findLadder.usedWords = new mySet();

    return data;
}

function cloneStack(Newstack) {

    var Stack1 = new myStackClass();
    Stack1.setArray(Newstack.asArray());
    return Stack1;
}

function showResults(findladder) {
    if(findladder.error) {
        document.getElementById("DisplayWords").innerHTML = findLadder.error;
    }
    else {
        var ul = document.createElement("ul"); 
        while(!findladder.ladder.isEmpty()) {    
            var li = document.createElement("li");
            li.innerHTML = findLadder.ladder.pop()
            ul.appendChild(li);
        }
        var li = document.createElement("li");
        ul.appendChild(li);
        document.getElementById("display").innerHTML = ""; 
        document.getElementById("display").appendChild(ul);
    }
}
