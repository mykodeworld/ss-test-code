<script> 
    // 1st function 
    function fac(n) { 
        let fact = 1; 
        for (let i = 1; i <= 4; i++) 
        fact *= i; 
        console.log("Factorial of 4 is:", fact); 
    } 
      
    // 2nd function 
    function fibo() { 
        let fab = 0; 
        let j = 1; 
        for (let i = 2; i <= 6; i++) { 
        let temp = fab; 
        fab += j; 
        j = temp; 
        } 
        console.log("6th fibonacci no is:", fab); 
    } 
      
    // 3rd function 
    function binpow() { 
        let j = 2; 
        let k = 22; 
        for (let i = 0; i < k; i++) 
        j = ((j * j) % 1e9) + 7; 
        console.log( 
        "Power 2 to 22 mod 1e9+7 is:", j 
        ); 
    } 
      
    // Function to check time required 
    // by each function 
    function findTime(f) { 
      
        // Storing initial time in start 
        var start = performance.now(); 
      
        // Calling the function 
        f(); 
      
        // Storing time after running the function 
        var end = performance.now(); 
      
        // Return time taken by function 
        return end - start; 
    } 
      
    function findMinTime() { 
      
        // Initializing array of functions 
        var fun = [fac, fibo, binpow]; 
      
        // Initialising array of time 
        // taken by function 
        var ans = []; 
      
        // Iterating over all the functions 
        // and storing time taken by them 
        for (var i = 0; i < 3; i++) { 
        var n = findTime(fun[i]); 
        ans[i] = n; 
        console.log(ans[i]); 
        } 
      
        // Finding the minimum time in array 
        var answer = Math.min.apply(null, ans); 
        c = ans.indexOf(answer); 
      
        // Return index of fastest array 
        return c; 
    } 
      
    var minTime = findMinTime(); 
    console.log("Index of fastest function:", 
                minTime); 
</script>
