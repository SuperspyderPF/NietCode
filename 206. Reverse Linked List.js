var reverseList = function(head) {
    var itr = null
    while(head) [head.next, head, itr] = [itr, head.next, head]
    return itr
    
};