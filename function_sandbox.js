<html lang="en-us">
    <head>
        <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Password Generator</title>
    <link rel="stylesheet" href="style.css">
    </head>
    <body>


    <script type = "text/javascript">
function getInteger(){
    while(true){   	  
        let input = prompt("Input number: ");
        
        if (input == null) {
            // user hit cancel
        		alert("I'm out of here.")
            return true;
        } else{
        	  if (input.length<=0 || isNaN( input ) ) {
                // user pressed OK, but input invalid or does not input anything
                alert("Invalid input.");
            } else {
                // user typed something valid and hit OK
                return parseInt(input);
            }
         }                    
        }                     
}

getInteger()
</script>
</body>
</html>