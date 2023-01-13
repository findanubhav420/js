primeNumber(let n){
    for(let i=2;i*i<=n;i++){
        if(n%i===0)
        return true;
    }

    return false;
}

armstrongNumber(let n){
    let temp=n;
    let res=0;
    while(temp){
        let rem=temp%10;
        res+=rem*rem*rem;
        temp=temp/10;
    }

    return (res===n);
    
}