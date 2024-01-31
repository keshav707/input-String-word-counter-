let btn = document.querySelector(".input");
btn.addEventListener("keyup", () => {
    let id = document.querySelector(".input");

    let str = id.value;
    let small = "abcdefghijklmnopqrstuvwxyz0123456789";
    let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let word = 0;
    let count = 0;
    
    let output = document.querySelector(".output");
    
    console.log(str.length);
    for (let i = 0; i < str.length; i++) {
        let ch = str.charAt(i);
        
        if (small.indexOf(ch) !== -1 || capital.indexOf(ch) !== -1) {
            count++;
        }
        else {
            if (count != 0) {
                word += 1;
            }
            count = 0;
        }
        output.value = `words ${word} and letters ${count}`;
    }
});