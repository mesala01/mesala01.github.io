
function LadderFunc() {
    var data = getData();

    if(data.error) {
        if(data.error == "EQUAL") {
            data.error = "Your starting Word and your ending word cannot be the same. Please check again!";
        }
        if(data.error == "NOT_THE_SAME_LENGTH") {
            data.error = " Your starting word and your ending word should be the same length as your length choice "; 
                          
        }
        if(data.error == "EMPTY") {
            data.error = " One or more of the word fields is empty. Please enter a starting and ending word";
        }
   }
    else {

        data.usedWords.add(data.startWord); 
    
        var stack = new Stack();
        stack.push(data.startWord);

        NextSteps(data, stack);
        var ladder = iterate(data);
        if(!ladder) { 
            data.error = "The program failed to find a valid ladder between " + data.startWord + " and " + data.endWord + "." + "Please try other words";
        }
        else {
            data.error = undefined;
            data.ladder = ladder;
        }
    }
    DisplayResults(data);
}

function NextSteps(data, stack) {
    for(var i=0; i<data.dict.length; i++) {
        if(findNumberOfDifferences(stack.peek(), data.dict[i]) == 1) {
            if(!data.usedWords.contains(data.dict[i])) { 
                var st = cloneStack(stack);
                st.push(data.dict[i]); 
                data.queue.enqueue(st);
                data.usedWords.add(data.dict[i]);
            }
        }
    }
    return true;
}

function iterate(data) {

    while (!data.queue.isEmpty()) {
        var current_stack = data.queue.dequeue(); 
        var top_word = current_stack.peek();

        if(top_word == data.endWord) { return current_stack; } 
        else {
            NextSteps(data, current_stack);       
        }
    }
    return false; 
}

function findNumberOfDifferences(w1, w2) {
    var v = 0;
    for(var i=0; i<w1.length; i++) {
        if (w1[i] != w2[i]) { v++; }
    }
    return v;
}

function getData() {
    var data = {}
    data.startWord = document.getElementById("startWord").value;
    data.endWord = document.getElementById("endWord").value;
    data.Wordlen = parseInt(document.getElementById("length").value);
    if((data.startWord == "") || (data.endWord == "")) {
        data.error = "EMPTY";
        return data;
    }
    else if(data.startWord == data.endWord) {
        data.error = "EQUAL";
        return data;
    }
    else if ((data.startWord.length != data.Wordlen) || (data.endWord.length != data.Wordlen)) {
        data.error = "NOT_THE_SAME_LENGTH";
        return data;
    }
   
    if(data.Wordlen == 3) { 
        data.dict = threeLetterWords; }
    else if(data.Wordlen == 4) {
     data.dict = fourLetterWords; } 
    else {
     data.dict = fiveLetterWords; }
    data.queue = new Queue();
    data.usedWords = new Set();

    return data;
}

function cloneStack(originalStack) {
    var newStack = new Stack();
    newStack.setArray(originalStack.asArray());
    return newStack;
}

function DisplayResults(data) {
    if(data.error) {
        document.getElementById("DisplayResults").innerHTML = data.error;
    }
    else {
        var ul = document.createElement("ul"); 
        while(!data.ladder.isEmpty()) {    
            var li = document.createElement("li");
            li.innerHTML = data.ladder.pop()
            ul.appendChild(li);
        }
        var li = document.createElement("li");
        li.innerHTML = "This is the result of your search"
        ul.appendChild(li);
        document.getElementById("DisplayResults").innerHTML = ""; 
        document.getElementById("DisplayResults").appendChild(ul);
    }
}
