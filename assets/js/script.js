var theme = document.getElementById("theme"),
html = document.documentElement;

theme.onclick = () => {
    if (theme.checked) {
        html.setAttribute("theme", "dark");
    } else {
        html.setAttribute("theme", "light");
    }
}