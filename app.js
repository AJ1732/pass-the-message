const messageInput = document.querySelector("#messageInput");

function getMessage() {
  const messageOutputDiv = document.querySelector(".message-output-div");
  const messageOutput = document.createElement("p");
  messageOutput.classList.add("message-output");
  messageOutputDiv.append(messageOutput);



  messageOutput.innerHTML = messageInput.value

  // const messageOutput = document.querySelector("#messageOutput");
  // messageOutput.innerHTML = messageInput.value

};