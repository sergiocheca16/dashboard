const nombreInput = document.getElementById("nombreInput");
const enlaceInput = document.getElementById("enlaceInput");
const linkBtn = document.getElementById("linkBtn");
const linksLista = document.getElementById("linksLista");

const linksGuardados = JSON.parse(localStorage.getItem("links")) || [];

function linksRenderizar() {
linksLista.innerHTML = "";

    linksGuardados.forEach(link => {
        const linkItem = createLinkItem(link.name, link.url);
        linksLista.appendChild(linkItem);
    });
}

function createLinkItem(name, url) {
    const linkItem = document.createElement("li");
    const linkElement = document.createElement("a");
    const eliminarBtn = document.createElement("button");

    linkElement.href = url;
    linkElement.target = "_blank";
    linkElement.textContent = name;

    eliminarBtn.textContent = "X";
    eliminarBtn.addEventListener("click", () => {
        const updatedLinks = linksGuardados.filter(link => link.name !== name || link.url !== url);
        localStorage.setItem("links", JSON.stringify(updatedLinks));
        linksGuardados.length = 0;
        linksGuardados.push(...updatedLinks);
        linksLista.removeChild(linkItem);
    });

    linkItem.appendChild(linkElement);
    linkItem.appendChild(eliminarBtn);

    return linkItem;
}

linkBtn.addEventListener("click", function() {
    const name = nombreInput.value;
    const url = enlaceInput.value;

    if (name && url) {
        linksGuardados.push({ name, url });
        localStorage.setItem("links", JSON.stringify(linksGuardados));
        linksRenderizar();
    }
});

linksRenderizar();
