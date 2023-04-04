let round = prompt(" ฝึกสมองก่อนเริ่มเรียน:เล่นกี่รอบ")
for(var i = 0 ; i < round ; i++) {
    var answer = prompt("หัว หรือ ก้อย ทายมาซิ:")
    var random_answer = ""
    if(Math.floor(Math.random () *11) >= 4)  {
        random_answer = "หัว"
    }

    else
    {
        random_answer = "ก้อย"
    }

    if(answer == random_answer)
    {
        alert("ตอบถูก ! ยินดีด้วย")
    }

    else
    {
        alert("ตอบไม่ถูก ! เสียใจด้วย")
    }
    console.log(random_answer+" : "+answer)

}