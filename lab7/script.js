window.onload = function() {

    const container = document.getElementById("container");
    
    function generateRandomString() {
        let randomString = '';
        const length = Math.floor(Math.random() * 3);  
        for (let i = 0; i < length; i++) {
            const randomChar = String.fromCharCode(97 + Math.floor(Math.random() * 26));  
            randomString += randomChar;
        }
        return randomString;
    }

    let currentString = generateRandomString();
    container.textContent = currentString;

    window.addEventListener("keyup", function(e) {
        console.log(e.key);
        
        if (currentString.length > 0 && e.key === currentString[0]) {
            currentString = currentString.slice(1);
            container.textContent = currentString;
        }
        
        addNewChars();
    });

    function addNewChars() {
        const numNewChars = Math.floor(Math.random() * 3) + 1;  
        for (let i = 0; i < numNewChars; i++) {
            const randomChar = String.fromCharCode(97 + Math.floor(Math.random() * 26));  
            currentString += randomChar;
        }
        container.textContent = currentString;
    }
};