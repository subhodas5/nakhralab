
// NAKHRA LAB - INTERACTIVE WEBSITE

const products = [
    {
        name: "Miniature World",
        category: "miniatures",
        description: "Little creations with big personality."
    },
    {
        name: "Desk Essentials",
        category: "desk",
        description: "Creative objects for your workspace."
    },
    {
        name: "Home Decor",
        category: "decor",
        description: "Make your space a little different."
    },
    {
        name: "Custom Creations",
        category: "custom",
        description: "Personalised ideas and unique designs."
    }
];

// Select the product container
const productGrid = document.getElementById("productGrid");

// Display products on the website
function displayProducts(category = "all") {

    productGrid.innerHTML = "";

    const filteredProducts = products.filter(product => {
        return category === "all" ||
               product.category === category;
    });

    filteredProducts.forEach(product => {

        const card = document.createElement("article");

        card.className = "product-card";

        card.innerHTML = `
            <div class="product-placeholder">
                <span>NAKHRA LAB</span>
            </div>

            <h3>${product.name}</h3>

            <p>${product.description}</p>

            <button class="interest-button">
                I'm interested
            </button>
        `;

        const button = card.querySelector(".interest-button");

        button.addEventListener("click", () => {

            const message = encodeURIComponent(
                `Hi Nakhra Lab! I'm interested in ${product.name}.`
            );

            window.open(
                `https://www.instagram.com/nakhralab.in/`,
                "_blank"
            );

        });

        productGrid.appendChild(card);
    });
}

// Category filter buttons
document.querySelectorAll(".filter-button").forEach(button => {

    button.addEventListener("click", () => {

        const category = button.dataset.category;

        displayProducts(category);

        document.querySelectorAll(".filter-button").forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");
    });

});

// Display all products initially
displayProducts();
