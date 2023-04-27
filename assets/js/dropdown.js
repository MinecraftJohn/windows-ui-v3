const selects = document.getElementsByClassName("dropdown");

for (let i = 0; i < selects.length; i++) {
    const select = selects[i];
    const selected = select.getElementsByClassName("selected")[0];
    const options = select.getElementsByClassName("options")[0];

    select.onclick = () => {
        options.style.display = options.style.display === "block" ? "none" : "block";
    }

    options.onclick = (event) => {
        selected.innerHTML = event.target.innerHTML;
        options.style.display = "none";
    }

    document.addEventListener("click", (event) => {
        if (!select.contains(event.target)) {
            options.style.display = "none";
        }
    });
}