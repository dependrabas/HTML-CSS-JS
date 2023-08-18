const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const bgcolors = ["brown", 'seagreen', "orange", "LightGray", 'Gray'];
const addBtn = document.querySelector("#addBtn")
const main = document.querySelector("#main")

//setInterval(function() {
//	document.getElementById("main").style = `background-color:${bgcolors[Math.floor(Math.random()*bgcolors.length)]}`;

//}, 5000)

function changebg() {
    console.log("Hello")
    document.getElementById("main").style = `background-color:${bgcolors[Math.floor(Math.random() * bgcolors.length)]}`;
}



addBtn.addEventListener(
    "click",
    function () {
        addNote()
    }
)
//here to herre
// const d = new Date();
// d.setDate(d.getDate() + 50);
// document.getElementById("demo").innerHTML = d;
//here
const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    // console.log(data)
    if (data.length === 0) {
        localStorage.removeItem("notes")
    } else {
        localStorage.setItem("notes", JSON.stringify(data))
    }
}

const addNote = (text = "") => {
    const note = document.createElement("div");

    note.classList.add("note")
    note.innerHTML = `
    <div class="tool" style="display:flex;justify-content:space-between;align-items:center">
	
	<p>${new Date(Date.now()).getDate()} ${months[new Date(Date.now()).getMonth()]} ${new Date(Date.now()).getHours()}:${new Date(Date.now()).getMinutes()} ${new Date(Date.now()).getHours() >= 12 ? "PM" : "AM"}</p>
	<div>

       <i class="fa fa-share-alt"></i>
		<i class="save fas fa-save"></i>
        	<i class="trash fas fa-trash"></i> 
	</div>
	
    </div>
    <textarea>${text}</textarea>
    `;

    note.querySelector(".trash").addEventListener(
        "click",
        function () {
            note.remove()
            saveNotes()
        }
    )
    note.querySelector(".save").addEventListener(
        "click",
        function () {
            saveNotes()
        }
    )
    note.querySelector("textarea").addEventListener(
        "focusout",
        function () {
            saveNotes()
        }
    )
    main.appendChild(note);
    saveNotes()
}

(
    function () {
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        if (lsNotes === null) {
            addNote()
        } else {
            lsNotes.forEach(
                (lsNote) => {
                    addNote(lsNote)
                }
            )
        }

    }
)()
