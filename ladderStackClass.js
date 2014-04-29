function Stack() {
    
    var stack = []

    this.push = function(word) { 
    	stack.push(word); }

    this.pop = function() { 
        if(!this.isEmpty()) { 
        	return stack.pop(); } 
        else {
            console.log("CANNOT POP AN EMPTY STACK");
            return false;
        }
    }

    this.peek = function() { 
    	return stack[stack.length - 1]; }

    this.isEmpty = function() { 
    	return (stack.length == 0); }

    this.size = function() { 
    	return stack.length; }

    this.asArray = function(word) {

        return stack.slice(word);
    }

    this.setArray = function(new_array) {
        stack = new_array;
    }

    this.toString = function() {
        str = "BOTTOM \n";
        for(var i=0; i<stack.length; i++) {
            str += stack[i] + "\n"
        }
        return str += "TOP";
    }
}

