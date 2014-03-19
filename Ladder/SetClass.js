function SetClass() {
    var mySet = []

    this.Add = function() {
        if(!this.Contain()) {
            mySet.push();
            return true;} 

        else {
            return false;
        }
    }

    this.Contain = function() {
        if(mySet.indexOf() != -1) {
         return true; }
        else {
         return false; 
     }
    }

    this.LengthSet = function() {
        return mySet.length;
    }
}
