let storeArea = document.getElementById("hidden");
let inputArea = document.getElementById("inputId");

storeArea.innerText = "";

const clickEventHandler = (id) => {
  if (id !== "back" && id !== "clear" && id !== "equal") {
    storeArea.innerText += id;
    inputArea.value = storeArea.innerText;
  } else if (id == "back") {
    storeArea.innerText = storeArea.innerText.slice(0, -1);
    inputArea.value = storeArea.innerText;
  } else if (id == "clear") {
    storeArea.innerText = "";
    inputArea.value = storeArea.innerText;
  } else if (id == "equal") {
    let toCount = document.getElementById("inputId");
    toCount = eval(toCount.value);
    storeArea.innerText = toCount;
    inputArea.value = storeArea.innerText;
  }
};
