
// document.addEventListener('DOMContentLoaded', (event) => {
//     setTimeout(() => new Audio("sounds/starting.mp3").play(), 800)
// });



let btn = document.querySelector("#start")
let con = document.querySelector(".container")


btn.addEventListener("click", () => {
    
    let repeatNtimes = 10
   function test(i=0, counter=0) {
    if (i==0){
        setTimeout(() => {
            con.innerHTML = `
            <div class="result_table">
            <h1>Правильных - ${counter}/${repeatNtimes}</h1>
            <div class="outer" >
                <div class="inner">
                    <h1 id="percent"></h1>
                </div>
            </div>
            
            <button type="submit" id="forward">Дальше</button>
            </div>
            `
            let percent = document.querySelector("#percent")
            let inner = document.querySelector(".inner")
            let t = 0
            let interval = setInterval(() => {
                
                let s = `${t}%`
                inner.style.width = s
                percent.innerHTML = `${t}%`
                t++
                if (t > Math.floor((counter/repeatNtimes)*100)){
                    new Audio("sounds/theend.mp3").play()
                    clearInterval(interval)
                }
            }, 10)


            let btn = document.querySelector("button")
            btn.onclick = function() {
                location.reload()
            }
        }, 1300)
    }
    if (i > 0) {
    con.innerHTML = ""

    let num1 = Math.ceil(Math.random()*10)
    let num2 = Math.ceil(Math.random()*10)+1
    let result = num1 * num2
    let task = `
        <form>
            <h3 style="font-size: 120px; margin-top: 5%; margin-bottom:0">
                ${num1} X ${num2}
                <br>
                 =
            </h3>
            <input type="text" name="answer" autocomplete="off" required/>
            <button type='submit'>Ответить</button>
        </form>
    `
    con.innerHTML = task
    let form = document.querySelector("form")
    document.querySelector("input").focus()
    
    form.onsubmit= function(e){
        e.preventDefault()
        if (form.answer.value == result ) {
            new Audio("sounds/success2.mp3").play()
            test(i-1, counter+1)

        }
        else{
            new Audio("sounds/failure2.mp3").play()
            test(i-1, counter)
        }
    }}
        
    }
    test(repeatNtimes)

})
