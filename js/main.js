var app = new Vue({
    el: "#app",
    data: {
        products: [
            { id: 1, title: "Supersweet", short_text: "Classic sweet-tart flavor of the Smooth Cayenne", image: "An1.png", desc: "Full desc" },
            { id: 2, title: "Red Spanish", short_text: "The Caribbean often evokes images of soft, sandy beaches and tropical fruit", image: "An2.png", desc: "Full desc" },
            { id: 3, title: "Pernambuco", short_text: "The Pernambuco variety of pineapple hails from Brazil", image: "An3.png", desc: "Full desc" },
            { id: 4, title: "Abacaxi", short_text: "Has a similar appearance to a regular Smooth Cayenne pineapple", image: "An4.png", desc: "Full desc" },
            { id: 5, title: "Honeyglow", short_text: "Pineapple that has a sweet indulgent flavor and juicy flesh", image: "An5.png", desc: "Full desc" }
        ],
        product: {},
        btnVisible: false
    },
    mounted: function () {
        this.getProduct();
        this.checkCart(); 
    },
    methods: {
        getProduct: function () {
            if (window.location.hash) {
                var id = parseInt(window.location.hash.replace("#", ""), 10);
                this.product = this.products.find(prod => prod.id === id) || this.products[0];
                this.checkCart(); 
            }
        },
        addToCart: function (id) {
            let cart = localStorage.getItem("cart") ? localStorage.getItem("cart").split(",") : [];
            if (!cart.includes(String(id))) {
                cart.push(id);
                localStorage.setItem("cart", cart.join(","));
            }
            this.btnVisible = true; 
            this.checkCart(); 
        },
        checkCart: function () {
            let cart = localStorage.getItem("cart") ? localStorage.getItem("cart").split(",") : [];
            this.btnVisible = cart.includes(String(this.product.id));
        }
    }
});
