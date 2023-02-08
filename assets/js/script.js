var theme = document.getElementById("theme"),
    html = document.documentElement;

theme.onclick = () => {
    if (theme.checked) {
        html.setAttribute("theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        html.setAttribute("theme", "light");
        localStorage.setItem("theme", "light");
    }
}

if (localStorage.getItem("theme") == "light") {
    html.setAttribute("theme", "light");
} else {
    html.setAttribute("theme", "dark");
    theme.setAttribute("checked", "")
}