// =========================
// BASIC INIT
// =========================
console.log("JS loaded OK");

// =========================
// HAMBURGER MENU
// =========================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}

// =========================
// REVEAL ANIMATION
// =========================
const revealEls = document.querySelectorAll(".reveal");

function reveal() {
    revealEls.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 120) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();


// =========================
// GALLERY SYSTEM
// =========================
let albums = {};
let currentAlbum = null;

const gallery = document.getElementById("gallery");

window.addEventListener("load", () => {
    const saved = localStorage.getItem("albums");

    if (saved) {
        try {
            albums = JSON.parse(saved);
        } catch {
            albums = {};
        }
    }

    const keys = Object.keys(albums);
    if (keys.length > 0) currentAlbum = keys[0];

    renderAlbums();
    renderGallery();
});

// SAVE
function saveAlbums() {
    localStorage.setItem("albums", JSON.stringify(albums));
}

// CREATE ALBUM
function createAlbum() {
    const input = document.getElementById("albumNameInput");
    if (!input) return;

    const name = input.value.trim();
    if (!name) return alert("Zadej název alba");
    if (albums[name]) return alert("Album už existuje");

    albums[name] = [];
    currentAlbum = name;

    input.value = "";

    saveAlbums();
    renderAlbums();
    renderGallery();
}

// SELECT ALBUM
function selectAlbum(name) {
    currentAlbum = name;
    renderAlbums();
    renderGallery();
}

// DELETE ALBUM
function deleteAlbum(name) {
    if (!albums[name]) return;

    if (!confirm(`Smazat album "${name}"?`)) return;

    delete albums[name];

    const keys = Object.keys(albums);
    currentAlbum = keys.length ? keys[0] : null;

    saveAlbums();
    renderAlbums();
    renderGallery();
}

// RENDER ALBUMS
function renderAlbums() {
    const container = document.getElementById("albumsContainer");
    const select = document.getElementById("albumSelect");

    if (!container || !select) return;

    container.innerHTML = "";
    select.innerHTML = "";

    Object.keys(albums).forEach(name => {

        const div = document.createElement("div");
        div.className = "album";

        if (name === currentAlbum) div.classList.add("active");

        const title = document.createElement("span");
        title.textContent = name;

        const del = document.createElement("button");
        del.className = "album-delete";
        del.textContent = "✖";

        del.onclick = (e) => {
            e.stopPropagation();
            deleteAlbum(name);
        };

        div.appendChild(title);
        div.appendChild(del);

        div.onclick = () => selectAlbum(name);

        container.appendChild(div);

        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;

        select.appendChild(option);
    });

    select.value = currentAlbum || "";

    select.onchange = () => selectAlbum(select.value);
}

// UPLOAD IMAGE
function uploadImage() {
    const input = document.getElementById("imageInput");
    if (!input) return;

    const file = input.files[0];
    if (!file) return alert("Vyber fotku");
    if (!currentAlbum) return alert("Vyber album");

    const reader = new FileReader();

    reader.onload = (e) => {
        albums[currentAlbum].push(e.target.result);
        saveAlbums();
        renderGallery();
    };

    reader.readAsDataURL(file);
}

// RENDER GALLERY
function renderGallery() {
    if (!gallery) return;

    gallery.innerHTML = "";
    if (!currentAlbum) return;

    albums[currentAlbum].forEach((src, index) => {

        const wrap = document.createElement("div");
        wrap.className = "img-wrap";

        const img = document.createElement("img");
        img.src = src;

        img.onclick = () => {
            const lightbox = document.getElementById("lightbox");
            const lightboxImg = document.getElementById("lightboxImg");

            if (lightbox && lightboxImg) {
                lightbox.style.display = "flex";
                lightboxImg.src = src;
            }
        };

        const del = document.createElement("button");
        del.className = "delete-img";
        del.textContent = "✖";

        del.onclick = () => {
            albums[currentAlbum].splice(index, 1);
            saveAlbums();
            renderGallery();
        };

        wrap.appendChild(img);
        wrap.appendChild(del);
        gallery.appendChild(wrap);
    });
}

// LIGHTBOX CLOSE
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    if (lightbox) lightbox.style.display = "none";
}
