function myQueueClass () {
	this.myQueue = [];



}
myQueueClass.prototype.EnQueue = function (element) {
	this.myQueue.push();
	}
myQueueClass.prototype.DeQueue = function () {
	if (this.myQueue.length !== 0){
		return this.myQueue.pop();
	}
	if (this.myQueue.length === 0){
		throw ("The queue is empty.");
	}


}
myQueueClass.prototype.Size = function() {
	return this.myQueue.length;

}
