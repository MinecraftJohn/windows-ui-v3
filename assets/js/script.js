var theme = document.getElementById("theme"),
    html = document.documentElement;

theme.onclick = () => {
    if (theme.checked) {
        html.setAttribute("theme", "dark");
    } else {
        html.setAttribute("theme", "light");
    }
}

const selects = document.getElementsByClassName("dropdown");

for (let i = 0; i < selects.length; i++) {
    const select = selects[i];
    const selected = select.getElementsByClassName("selected")[0];
    const options = select.getElementsByClassName("options")[0];

    select.addEventListener("click", () => {
        options.style.display = options.style.display === "block" ? "none" : "block";
    });

    options.addEventListener("click", (event) => {
        selected.innerHTML = event.target.innerHTML;
        options.style.display = "none";
    });

    document.addEventListener("click", (event) => {
        if (!select.contains(event.target)) {
            options.style.display = "none";
        }
    });
}
