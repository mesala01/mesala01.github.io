function Set() {
    var set = []
    this.add = function(word) {
        if(!this.contains(word)) {
            set.push(word);
            return true;
        } else {
            console.log("ERROR: Set already contains object " + String(word));
            return false;
        }
    }
    this.size = function() {
        return set.length;
    }

    this.contains = function(word) {
        if(set.indexOf(word) != -1) { 
            return true; 
        }
        else { 
            return false; 
        }
    }

    
}

