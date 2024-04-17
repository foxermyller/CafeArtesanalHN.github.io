document.addEventListener("DOMContentLoaded", function() {
    const gallerySection = document.querySelector(".gallery");

    // Array con las rutas de las imágenes
    const imagePaths = [
        "../src/img-products/latte.webp",
        "../src/img-products/Affogato.webp",
        "../src/img-products/Macchiato.webp",
        "../src/img-products/Frappé de Café.webp",
        "../src/img-products/Mocha.webp",
        "../src/img-products/cappuccino.webp",
    ];

    imagePaths.forEach(path => {
        const img = document.createElement("img");
        img.src = path;
        img.alt = "Imagen de la galería";
        const figure = document.createElement("figure");
        const figcaption = document.createElement("figcaption");
        figure.appendChild(img);
        figure.appendChild(figcaption);
        gallerySection.appendChild(figure);
    });
});
