export function pressButtonEnter(textId, buttonId){
    document.addEventListener("keyup", function(e){
        if(e.key === 'Enter'){
          var textArea = document.querySelector(textId);
          if(textArea.value != ""){        
            var btn = document.querySelector(buttonId);
            btn.click();
            textArea.value = "";
          }
        }
    });
}