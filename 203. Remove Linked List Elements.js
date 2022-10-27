var removeElements = function(head, val) {
    let prev = null 
    while(head){
        if(head.val === val){
            prev.next = head.next 
        }
        prev = head
        head = head.next
    }
    
};