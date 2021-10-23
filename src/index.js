// console.log("test");

// const title1 = document.getElementById("title");
// console.log(title1);

// const title2 = document.querySelector("#title");
// console.log(title2);

// const divEl = document.createElement("div");

// const pEl = document.createElement("p");

// divEl.appendChild(pEl);
// console.log(divEl);

// const buttonEl = document.createElement("button");

// buttonEl.textContent = "ぼたん";

// const div1El = document.querySelector(".container");

// div1El.appendChild(buttonEl);

// const bodyEl = document.querySelector("body");

// bodyEl.textContent = null;

const onClickAdd = () => {
  const textEl = document.getElementById("add-text");
  const text = textEl.value;
  textEl.value = "";
  const li = document.createElement("li");
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.textContent = text;
  const button = document.createElement("button");
  button.textContent = "削除";
  
  button.addEventListener("click",()=>{
    const deleteTarget = button.closest("li");
    document.getElementById("memo-list").removeChild(deleteTarget);
  } );

  div.appendChild(p);
  div.appendChild(button);

  li.appendChild(div);

  document.getElementById("memo-list").appendChild(li);

};

document.getElementById("add-button")
.addEventListener("click", ()=>onClickAdd() );

