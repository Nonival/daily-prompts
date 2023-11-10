function chooseRandomPrompt() {

    randomIndex = Math.floor(Math.random() * propmt_list.length)
    document.getElementById("main_prompt").innerHTML = propmt_list[randomIndex];
  }

 propmt_list = [
     ""Source" (Pg #) Test 1"
     ""Source" (Pg #) Test 2"
     ""Source" (Pg #) Test 3"
  ]
