window.onload = () => {
    const form1 = document.querySelector("#addForm");

    let items = document.getElementById("items");
    let completedItems = document.getElementById("completedItems");
    let submit = document.getElementById("submit");

    let editItem = null;

    form1.addEventListener("submit", addItem);
    items.addEventListener("click", handleTaskAction);
    completedItems.addEventListener("click", handleTaskAction);
};

function addItem(e) {
    e.preventDefault();

    if (submit.value != "Submit") {
        editItem.target.parentNode.childNodes[0].data = document.getElementById("item").value;

        submit.value = "Submit";
        document.getElementById("item").value = "";

        document.getElementById("lblsuccess").innerHTML = "Text edited successfully";
        document.getElementById("lblsuccess").style.display = "block";

        setTimeout(function() {
            document.getElementById("lblsuccess").style.display = "none";
        }, 3000);

        return false;
    }

    let newItem = document.getElementById("item").value;
    if (newItem.trim() == "" || newItem.trim() == null) return false;
    else document.getElementById("item").value = "";

    let li = document.createElement("li");
    li.className = "list-group-item";

    let deleteButton = document.createElement("button");
    deleteButton.className = "btn-danger btn btn-sm float-right delete";
    deleteButton.appendChild(document.createTextNode("Delete"));

    let editButton = document.createElement("button");
    editButton.className = "btn-success btn btn-sm float-right edit";
    editButton.appendChild(document.createTextNode("Edit"));

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox float-left"; // Added some margin

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(deleteButton);
    li.appendChild(editButton);

    items.appendChild(li);
}

function handleTaskAction(e) {
    e.preventDefault();

    // Handle delete button
    if (e.target.classList.contains("delete")) {
        if (confirm("Are you Sure?")) {
            let li = e.target.parentNode;
            let parent = li.parentNode;
            parent.removeChild(li);

            document.getElementById("lblsuccess").innerHTML = "Text deleted successfully";
            document.getElementById("lblsuccess").style.display = "block";

            setTimeout(function() {
                document.getElementById("lblsuccess").style.display = "none";
            }, 3000);
        }
    }

    // Handle edit button
    if (e.target.classList.contains("edit")) {
        document.getElementById("item").value = e.target.parentNode.childNodes[1].data;
        submit.value = "EDIT";
        editItem = e;
    }

    // Handle checkbox click to mark task as completed
    if (e.target.classList.contains("checkbox")) {
        let li = e.target.parentNode;
        let parent = li.parentNode;
        
        // Move the task to the completed section
        completedItems.appendChild(li);
        
        // Style to show completed tasks (strike-through)
        li.style.textDecoration = "line-through";
    }
}

function toggleButton(ref, btnID) {
    document.getElementById(btnID).disabled = false;
}
