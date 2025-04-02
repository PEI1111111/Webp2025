let count = 1;

function addFunction() {
    let btn = document.createElement("button");
    btn.innerHTML = `CLICK ME (${count})`;
    btn.className = "btn btn-outline-danger m-2"; 
    btn.id = `btn_${count}`;
    btn.onclick = function () { removeById(this.id); };

    document.getElementById("buttonContainer").appendChild(btn);
    count++;
}

function delFunction() {
    let container = document.getElementById("buttonContainer");
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    }
}

function removeById(id) {
    let btn = document.getElementById(id);
    if (btn) {
        btn.remove();
    }
}