function productExceptSelf(n,sol = [],jzx = 1){
    for(i = 0; i < n.length; i++) sol[i] = jzx, jzx *= n[i]
    jzx = 1
    for(j = n.length-1; j >= 0; j--) sol[j] *= jzx, jzx *= n[j]
    return sol
};