window.onload = function () {
    const container = document.getElementById("container");
    const status = document.getElementById("status");
    let currentString = generateRandomString();
    let failCount = 0;
  
    container.textContent = currentString;
  
    window.addEventListener("keyup", function (e) {
      if (currentString.length > 0 && e.key === currentString[0]) {
        // 正確輸入
        currentString = currentString.slice(1);
        container.textContent = currentString;
        failCount = 0;
        status.textContent = "";
      } else {
        // 錯誤輸入
        failCount++;
        status.textContent = `錯誤次數：${failCount}`;
  
        if (failCount >= 3) {
          currentString += generateExtraChars(6); // 加 6 個字
          failCount = 0;
          status.textContent = "連錯三次！增加 6 個字元！";
        }
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
  
    function generateRandomString() {
      let randomString = '';
      const length = Math.floor(Math.random() * 3);
      for (let i = 0; i < length; i++) {
        const randomChar = String.fromCharCode(97 + Math.floor(Math.random() * 26));
        randomString += randomChar;
      }
      return randomString;
    }
  
    function generateExtraChars(num) {
      let extra = '';
      for (let i = 0; i < num; i++) {
        const char = String.fromCharCode(97 + Math.floor(Math.random() * 26));
        extra += char;
      }
      return extra;
    }
  };