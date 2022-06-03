"use strict";

const addTask = (text, form, input, list) => {
    if(text !== "") {

        const task = document.createElement("div");
        task.classList.add("task");

        const content = document.createElement("div");
        content.classList.add("content");

        task.appendChild(content);

        const t_input = document.createElement("input");
        t_input.type = "text";
        t_input.value = text;
        t_input.classList.add("text");
        t_input.setAttribute("readonly", "readonly");

        content.appendChild(t_input);

        const actions = document.createElement("div");
        actions.classList.add("actions");

        const edit = document.createElement("button");
        edit.classList.add("edit");
        edit.innerText = "Edit";

        const remove = document.createElement("button");
        remove.classList.add("remove");
        remove.innerText = "Remove";

        const done = document.createElement("button");
        done.classList.add("done");
        done.innerText = "Set as done";

        actions.appendChild(edit);
        actions.appendChild(remove);
        actions.appendChild(done);

        task.appendChild(actions);

        const date_content = document.createElement("div");
        date_content.classList.add("date-content");

        const date = document.createElement("p");
        date.innerHTML = "";

        date_content.appendChild(date);

        task.appendChild(date_content);

        list.appendChild(task);

        edit.addEventListener("click", (e) => {
            if(edit.innerText === "Edit") {
                edit.innerText = "Save";
                t_input.removeAttribute("readonly");
                t_input.focus();
            }
            else {
                edit.innerText = "Edit";
                t_input.setAttribute("readonly", "readonly");
            }    
        });

        remove.addEventListener("click", (e) => {
            $(task).remove();
        });

        done.addEventListener("click", (e) => {
            if (done.innerText === "Set as done") {
                done.innerText = "Set as not done";
                t_input.style.textDecoration = "line-through";
                t_input.style.color = "#888";

                date_content.style.display = "block";
                const today = new Date();
                const today_date_string = "Completed on: " + today.toISOString().slice(0, 10);
                date.innerHTML = today_date_string;
            }
            else {
                done.innerText = "Set as done";
                t_input.style.textDecoration = "none";
                t_input.style.color = "#f5f5f5";
                date_content.style.display = "none";
            }
        });
    }
    else {
        console.log("No input detected");
    }
}

window.addEventListener("load", () => {
    const form = document.getElementById("new-task");
    const input = document.getElementById("task-input");
    const list = document.getElementById("tasks");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        addTask(input.value, form, input, list);
    });
});