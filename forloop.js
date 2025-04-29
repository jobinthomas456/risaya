// 1.write a jscode to print numbers from 1 to 10
for(i=1;i<=10;i++)
    {
        console.log(i);
        
    } 

    // 2.write a js code to print 2d array
    
    //3 write a jscode to print even numbers  in a given array
    console.log("-------------------------");
    
    const a=[1,2,3,4,5,6,7,8,9,10]
    for(i=0;i<a.length;i++){
        if(a[i]%2==0){
            console.log(a[i]);  
        }
    }

    // 4 write a jscode to print the power of a number using forloop
    // 5 write a jscode to print a pattern using forloop
     console.log("--------------");
    
     for(i=0;i<7;i++){
        let row=" "
        for(j=1;j<i;j++){
            row+="*"
            
        }
        console.log(row);
        
     }
    //  6 write a js  to find the number of digits in a number
    var count=0
    num=parseInt(456)
    for(i=0;i<10;i++)
    {
        num=num/10
        count++;
    }
    console.log(num);
    
    console.log(count);
    


     

