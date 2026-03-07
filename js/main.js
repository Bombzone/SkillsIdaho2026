class NavBar extends HTMLElement {
    constructor() {
        super()

        this.innerHTML = `
        <nav>
            <a href="./index.html">
                <img class="logo" src="images/Logo.svg" alt="">
            </a>
            <span>
                <a href="./index.html">Home</a>
                <a href="./contact.html">Contact Us</a>
            </span>
        </nav>
        <button class="cart">
            <img src="./images/shopping_cart.svg" alt="Shopping Cart">
            Cart
        </button>
        `
    }
}

class Footer extends HTMLElement {
    constructor() {
        super()

        this.innerHTML = `
        <footer>
            <p>&copy; 2026 Aurora Coffee Roasters. All rights reserved.</p>
            <div class="socials">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src="./images/Facebook_Logo_Primary.png" alt="Facebook">&nbsp;Facebook</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src="./images/Instagram_Glyph_Gradient.png" alt="Instagram">&nbsp;Instagram</a>
            </div>
            <address>
                <p>123 Coffee Street, Beanville, ID 12345</p>
            </address>
        </footer>
        `
    }
}

class ProductCard extends HTMLElement {
    static observedAttributes = ["title", "description", "image", "link"]
    constructor() {
        super()

        const title = this.getAttribute("title")
        const quote = this.getAttribute("quote")
        const description = this.getAttribute("description")
        const image = this.getAttribute("image")
        let link = this.getAttribute("link")
        if (!link) {
            link = "#"
        }

        this.innerHTML = `
        <a href="${link}" class="product-content">
                <img src="${image}" alt="${title}">
                <div class="product-text">
                    <h2>${title}</h2>
                    <h4>${quote}</h4>
                    <p>${description}</p>
                </div>
            <a/>
    
        `
    }
}

customElements.define("product-card", ProductCard)
customElements.define("nav-bar", NavBar)
customElements.define("custom-footer", Footer)