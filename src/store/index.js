import { createStore } from "vuex";

export default createStore({
  state: {
    sections: [
      {
        id: "best-of-hogwarts",
        title: "Лучшие товары прямиком из Хогвартса",
        products: [
          {
            id: 1,
            name: "Кружки из Хогвартса",
            description: "В наличии",
            oldPrice: null,
            price: 70000,
            sectionTitle: "Лучшие товары прямиком из Хогвартса",
            hasDiscount: false,
            imageUrl: require("@/assets/product-catalog/hoghwarts-products/hogwarts-cups/hogwarts-cup-variant_1.png"),
            variants: [
              {
                color: "#dc2840",
                imageUrl: require("@/assets/product-catalog/hoghwarts-products/hogwarts-cups/hogwarts-cup-variant_1.png"),
              },
              {
                color: "#06d6a0",
                imageUrl: require("@/assets/product-catalog/hoghwarts-products/hogwarts-cups/hogwarts-cup-variant_2.png"),
              },
              {
                color: "#676767",
                imageUrl: require("@/assets/product-catalog/hoghwarts-products/hogwarts-cups/hogwarts-cup-variant_3.png"),
              },
              {
                color: "#dea220",
                imageUrl: require("@/assets/product-catalog/hoghwarts-products/hogwarts-cups/hogwarts-cup-variant_4.png"),
              },
            ],
          },
          {
            id: 2,
            name: "Письмо из Хогвартса",
            description: "В наличии",
            oldPrice: null,
            price: 15990,
            hasDiscount: false,
            sectionTitle: "Лучшие товары прямиком из Хогвартса",
            imageUrl: require("@/assets/product-catalog/hoghwarts-products/hogwarts-letter/hogwarts-letter_variant_1.png"),
            variants: [
              {
                color: "#dc2840",
                imageUrl: require("@/assets/product-catalog/hoghwarts-products/hogwarts-letter/hogwarts-letter_variant_1.png"),
              },
              {
                color: "#06d6a0",
                imageUrl: require("@/assets/product-catalog/hoghwarts-products/hogwarts-letter/hogwarts-letter_variant_2.png"),
              },
              {
                color: "#676767",
                imageUrl: require("@/assets/product-catalog/hoghwarts-products/hogwarts-letter/hogwarts-letter_variant_3.png"),
              },
              {
                color: "#dea220",
                imageUrl: require("@/assets/product-catalog/hoghwarts-products/hogwarts-letter/hogwarts-letter_variant_4.png"),
              },
            ],
          },
          {
            id: 3,
            name: "Галстуки факультетов",
            description: "В наличии",
            oldPrice: 8000,
            price: 5000,
            hasDiscount: true,
            sectionTitle: "Лучшие товары прямиком из Хогвартса",
            imageUrl: require("@/assets/product-catalog/hoghwarts-products/hogwarts-tie/hogwarts-tie_variant_1.png"),
            variants: [
              {
                color: "#dc2840",
                imageUrl: require("@/assets/product-catalog/hoghwarts-products/hogwarts-tie/hogwarts-tie_variant_1.png"),
              },
              {
                color: "#06d6a0",
                imageUrl: require("@/assets/product-catalog/hoghwarts-products/hogwarts-tie/hogwarts-tie_variant_2.png"),
              },
              {
                color: "#676767",
                imageUrl: require("@/assets/product-catalog/hoghwarts-products/hogwarts-tie/hogwarts-tie_variant_3.png"),
              },
              {
                color: "#dea220",
                imageUrl: require("@/assets/product-catalog/hoghwarts-products/hogwarts-tie/hogwarts-tie_variant_4.png"),
              },
            ],
          },
          {
            id: 4,
            name: "Шарфы факультетов",
            description: "Под заказ (2-4 недели)",
            oldPrice: null,
            price: 20000,
            hasDiscount: false,
            sectionTitle: "Лучшие товары прямиком из Хогвартса",
            imageUrl: require("@/assets/product-catalog/hoghwarts-products/hogwarts-scarf/hogwarts-scarf_variant_1.png"),
            variants: [
              {
                color: "#dc2840",
                imageUrl: require("@/assets/product-catalog/hoghwarts-products/hogwarts-scarf/hogwarts-scarf_variant_1.png"),
              },
              {
                color: "#06d6a0",
                imageUrl: require("@/assets/product-catalog/hoghwarts-products/hogwarts-scarf/hogwarts-scarf_variant_2.png"),
              },
              {
                color: "#676767",
                imageUrl: require("@/assets/product-catalog/hoghwarts-products/hogwarts-scarf/hogwarts-scarf_variant_3.png"),
              },
              {
                color: "#dea220",
                imageUrl: require("@/assets/product-catalog/hoghwarts-products/hogwarts-scarf/hogwarts-scarf_variant_4.png"),
              },
            ],
          },
          {
            id: 5,
            name: "Блокноты факультетов",
            description: "В наличии",
            oldPrice: null,
            price: 12000,
            hasDiscount: false,
            sectionTitle: "Лучшие товары прямиком из Хогвартса",
            imageUrl: require("@/assets/product-catalog/hoghwarts-products/hogwarts-notepad/hogwarts-notepad_variant_1.png"),
            variants: [
              {
                color: "#dc2840",
                imageUrl: require("@/assets/product-catalog/hoghwarts-products/hogwarts-notepad/hogwarts-notepad_variant_1.png"),
              },
              {
                color: "#06d6a0",
                imageUrl: require("@/assets/product-catalog/hoghwarts-products/hogwarts-notepad/hogwarts-notepad_variant_2.png"),
              },
              {
                color: "#676767",
                imageUrl: require("@/assets/product-catalog/hoghwarts-products/hogwarts-notepad/hogwarts-notepad_variant_3.png"),
              },
              {
                color: "#dea220",
                imageUrl: require("@/assets/product-catalog/hoghwarts-products/hogwarts-notepad/hogwarts-notepad_variant_4.png"),
              },
            ],
          },
        ],
      },
      {
        id: "best-of-cosmetics",
        title: "Лучшие товары косметика",
        products: [
          {
            id: 6,
            name: "Помада",
            description: "Нет в наличии",
            oldPrice: 38000,
            price: 33000,
            hasDiscount: true,
            sectionTitle: "Лучшие товары косметика",
            imageUrl: require("@/assets/product-catalog/cosmetics-products/pomade/pomade_variant_3.png"),
            variants: [
              {
                color: "#dc2840",
                imageUrl: require("@/assets/product-catalog/cosmetics-products/pomade/pomade_variant_1.png"),
              },
              {
                color: "#06d6a0",
                imageUrl: require("@/assets/product-catalog/cosmetics-products/pomade/pomade_variant_2.png"),
              },
              {
                color: "#676767",
                imageUrl: require("@/assets/product-catalog/cosmetics-products/pomade/pomade_variant_3.png"),
              },
              {
                color: "#dea220",
                imageUrl: require("@/assets/product-catalog/cosmetics-products/pomade/pomade_variant_4.png"),
              },
            ],
          },
          {
            id: 7,
            name: "Крем для рук",
            description: "Под заказ (1-3 недели)",
            oldPrice: null,
            price: 40000,
            hasDiscount: false,
            sectionTitle: "Лучшие товары косметика",
            imageUrl: require("@/assets/product-catalog/cosmetics-products/hands-cream/hands-cream_variant_3.png"),
            variants: [
              {
                color: "#dc2840",
                imageUrl: require("@/assets/product-catalog/cosmetics-products/hands-cream/hands-cream_variant_1.png"),
              },
              {
                color: "#06d6a0",
                imageUrl: require("@/assets/product-catalog/cosmetics-products/hands-cream/hands-cream_variant_2.png"),
              },
              {
                color: "#676767",
                imageUrl: require("@/assets/product-catalog/cosmetics-products/hands-cream/hands-cream_variant_3.png"),
              },
              {
                color: "#dea220",
                imageUrl: require("@/assets/product-catalog/cosmetics-products/hands-cream/hands-cream_variant_4.png"),
              },
            ],
          },
          {
            id: 8,
            name: "Тушь для ресниц",
            description: "В наличии",
            oldPrice: null,
            price: 18000,
            hasDiscount: false,
            sectionTitle: "Лучшие товары косметика",
            imageUrl: require("@/assets/product-catalog/cosmetics-products/mascara/mascara_variant_3.png"),
            variants: [
              {
                color: "#dc2840",
                imageUrl: require("@/assets/product-catalog/cosmetics-products/mascara/mascara_variant_1.png"),
              },
              {
                color: "#06d6a0",
                imageUrl: require("@/assets/product-catalog/cosmetics-products/mascara/mascara_variant_2.png"),
              },
              {
                color: "#676767",
                imageUrl: require("@/assets/product-catalog/cosmetics-products/mascara/mascara_variant_3.png"),
              },
              {
                color: "#dea220",
                imageUrl: require("@/assets/product-catalog/cosmetics-products/mascara/mascara_variant_4.png"),
              },
            ],
          },
          {
            id: 9,
            name: "Парфюм",
            description: "В наличии",
            oldPrice: null,
            price: "120000",
            hasDiscount: false,
            sectionTitle: "Лучшие товары minsiz.beyne",
            imageUrl: require("@/assets/product-catalog/cosmetics-products/perfume/perfume_variant_3.png"),
            variants: [
              {
                color: "#dc2840",
                imageUrl: require("@/assets/product-catalog/cosmetics-products/perfume/perfume_variant_1.png"),
              },
              {
                color: "#06d6a0",
                imageUrl: require("@/assets/product-catalog/cosmetics-products/perfume/perfume_variant_2.png"),
              },
              {
                color: "#676767",
                imageUrl: require("@/assets/product-catalog/cosmetics-products/perfume/perfume_variant_3.png"),
              },
              {
                color: "#dea220",
                imageUrl: require("@/assets/product-catalog/cosmetics-products/perfume/perfume_variant_4.png"),
              },
            ],
          },
          {
            id: 10,
            name: "Лаки",
            description: "В наличии",
            oldPrice: 25000,
            price: 15000,
            hasDiscount: true,
            sectionTitle: "Лучшие товары косметика",
            imageUrl: require("@/assets/product-catalog/cosmetics-products/nail-polish/nail-polish_variant_3.png"),
            variants: [
              {
                color: "#dc2840",
                imageUrl: require("@/assets/product-catalog/cosmetics-products/nail-polish/nail-polish_variant_1.png"),
              },
              {
                color: "#06d6a0",
                imageUrl: require("@/assets/product-catalog/cosmetics-products/nail-polish/nail-polish_variant_2.png"),
              },
              {
                color: "#676767",
                imageUrl: require("@/assets/product-catalog/cosmetics-products/nail-polish/nail-polish_variant_3.png"),
              },
              {
                color: "#dea220",
                imageUrl: require("@/assets/product-catalog/cosmetics-products/nail-polish/nail-polish_variant_4.png"),
              },
            ],
          },
        ],
      },
      {
        id: "best-of-books",
        title: "Лучшие сборники книг",
        products: [
          {
            id: 11,
            name: "Сборник 'Ведьмак'",
            description: "В наличии",
            oldPrice: null,
            price: 15000,
            hasDiscount: false,
            sectionTitle: "Лучшие сборники книг",
            imageUrl: require("@/assets/product-catalog/books-products/witcher-books/witcher-variant_2.png"),
            variants: [
              {
                color: "#dc2840",
                imageUrl: require("@/assets/product-catalog/books-products/witcher-books/witcher-variant_1.png"),
              },
              {
                color: "#06d6a0",
                imageUrl: require("@/assets/product-catalog/books-products/witcher-books/witcher-variant_2.png"),
              },
              {
                color: "#676767",
                imageUrl: require("@/assets/product-catalog/books-products/witcher-books/witcher-variant_3.png"),
              },
              {
                color: "#dea220",
                imageUrl: require("@/assets/product-catalog/books-products/witcher-books/witcher-variant_4.png"),
              },
            ],
          },
          {
            id: 12,
            name: "Сборник 'Гарри Поттер'",
            description: "В наличии",
            oldPrice: null,
            price: 30000,
            hasDiscount: false,
            sectionTitle: "Лучшие сборники книг",
            imageUrl: require("@/assets/product-catalog/books-products/harry-potter-books/harry-potter-book_variant_2.png"),
            variants: [
              {
                color: "#dc2840",
                imageUrl: require("@/assets/product-catalog/books-products/harry-potter-books/harry-potter-book_variant_1.png"),
              },
              {
                color: "#06d6a0",
                imageUrl: require("@/assets/product-catalog/books-products/harry-potter-books/harry-potter-book_variant_2.png"),
              },
              {
                color: "#676767",
                imageUrl: require("@/assets/product-catalog/books-products/harry-potter-books/harry-potter-book_variant_3.png"),
              },
              {
                color: "#dea220",
                imageUrl: require("@/assets/product-catalog/books-products/harry-potter-books/harry-potter-book_variant_4.png"),
              },
            ],
          },
          {
            id: 13,
            name: "Сборник 'Властелин колец'",
            description: "В наличии",
            oldPrice: 15000,
            price: 10000,
            hasDiscount: true,
            sectionTitle: "Лучшие сборники книг",
            imageUrl: require("@/assets/product-catalog/books-products/lord-of-the-rings-books/lord-of-the-rings-book_variant_2.png"),
            variants: [
              {
                color: "#dc2840",
                imageUrl: require("@/assets/product-catalog/books-products/lord-of-the-rings-books/lord-of-the-rings-book_variant_1.png"),
              },
              {
                color: "#06d6a0",
                imageUrl: require("@/assets/product-catalog/books-products/lord-of-the-rings-books/lord-of-the-rings-book_variant_2.png"),
              },
              {
                color: "#676767",
                imageUrl: require("@/assets/product-catalog/books-products/lord-of-the-rings-books/lord-of-the-rings-book_variant_3.png"),
              },
              {
                color: "#dea220",
                imageUrl: require("@/assets/product-catalog/books-products/lord-of-the-rings-books/lord-of-the-rings-book_variant_4.png"),
              },
            ],
          },
          {
            id: 14,
            name: "Сборник 'Мастер и Маргарита'",
            description: "Под заказ (2-4 недели)",
            oldPrice: 10000,
            price: 8000,
            hasDiscount: true,
            sectionTitle: "Лучшие сборники книг",
            imageUrl: require("@/assets/product-catalog/books-products/master-i-margarita-books/master-i-margarita-book_variant_2.png"),
            variants: [
              {
                color: "#dc2840",
                imageUrl: require("@/assets/product-catalog/books-products/master-i-margarita-books/master-i-margarita-book_variant_1.png"),
              },
              {
                color: "#06d6a0",
                imageUrl: require("@/assets/product-catalog/books-products/master-i-margarita-books/master-i-margarita-book_variant_2.png"),
              },
              {
                color: "#676767",
                imageUrl: require("@/assets/product-catalog/books-products/master-i-margarita-books/master-i-margarita-book_variant_3.png"),
              },
              {
                color: "#dea220",
                imageUrl: require("@/assets/product-catalog/books-products/master-i-margarita-books/master-i-margarita-book_variant_4.png"),
              },
            ],
          },
          {
            id: 15,
            name: "Сборник 'Шерлок Холмс",
            description: "В наличии",
            oldPrice: null,
            price: 12000,
            hasDiscount: false,
            sectionTitle: "Лучшие сборники книг",
            imageUrl: require("@/assets/product-catalog/books-products/sherlock-holmes-books/sherlock-holmes-book_variant_2.png"),
            variants: [
              {
                color: "#dc2840",
                imageUrl: require("@/assets/product-catalog/books-products/sherlock-holmes-books/sherlock-holmes-book_variant_1.png"),
              },
              {
                color: "#06d6a0",
                imageUrl: require("@/assets/product-catalog/books-products/sherlock-holmes-books/sherlock-holmes-book_variant_2.png"),
              },
              {
                color: "#676767",
                imageUrl: require("@/assets/product-catalog/books-products/sherlock-holmes-books/sherlock-holmes-book_variant_3.png"),
              },
              {
                color: "#dea220",
                imageUrl: require("@/assets/product-catalog/books-products/sherlock-holmes-books/sherlock-holmes-book_variant_4.png"),
              },
            ],
          },
        ],
      },
      {
        id: "best-of-furniture",
        title: "Лучшие товары мебель",
        products: [
          {
            id: 16,
            name: "Пафосное кресло",
            description: "В наличии",
            oldPrice: null,
            price: 150000,
            hasDiscount: false,
            sectionTitle: "Лучшие товары мебель",
            imageUrl: require("@/assets/product-catalog/furniture-products/armchair/armchair_variant_4.png"),
            variants: [
              {
                color: "#dc2840",
                imageUrl: require("@/assets/product-catalog/furniture-products/armchair/armchair_variant_1.png"),
              },
              {
                color: "#06d6a0",
                imageUrl: require("@/assets/product-catalog/furniture-products/armchair/armchair_variant_2.png"),
              },
              {
                color: "#676767",
                imageUrl: require("@/assets/product-catalog/furniture-products/armchair/armchair_variant_3.png"),
              },
              {
                color: "#dea220",
                imageUrl: require("@/assets/product-catalog/furniture-products/armchair/armchair_variant_4.png"),
              },
            ],
          },
          {
            id: 17,
            name: "Пафосный диван",
            description: "Под заказ (1-2 недели)",
            oldPrice: null,
            price: 750000,
            hasDiscount: false,
            sectionTitle: "Лучшие товары мебель",
            imageUrl: require("@/assets/product-catalog/furniture-products/sofa/sofa_variant_4.png"),
            variants: [
              {
                color: "#dc2840",
                imageUrl: require("@/assets/product-catalog/furniture-products/sofa/sofa_variant_1.png"),
              },
              {
                color: "#06d6a0",
                imageUrl: require("@/assets/product-catalog/furniture-products/sofa/sofa_variant_2.png"),
              },
              {
                color: "#676767",
                imageUrl: require("@/assets/product-catalog/furniture-products/sofa/sofa_variant_3.png"),
              },
              {
                color: "#dea220",
                imageUrl: require("@/assets/product-catalog/furniture-products/sofa/sofa_variant_4.png"),
              },
            ],
          },
          {
            id: 18,
            name: "Пафосный комод",
            description: "В наличии",
            oldPrice: null,
            price: 450000,
            hasDiscount: false,
            sectionTitle: "Лучшие товары мебель",
            imageUrl: require("@/assets/product-catalog/furniture-products/dresser/dresser_variant_4.png"),
            variants: [
              {
                color: "#dc2840",
                imageUrl: require("@/assets/product-catalog/furniture-products/dresser/dresser_variant_1.png"),
              },
              {
                color: "#06d6a0",
                imageUrl: require("@/assets/product-catalog/furniture-products/dresser/dresser_variant_2.png"),
              },
              {
                color: "#676767",
                imageUrl: require("@/assets/product-catalog/furniture-products/dresser/dresser_variant_3.png"),
              },
              {
                color: "#dea220",
                imageUrl: require("@/assets/product-catalog/furniture-products/dresser/dresser_variant_4.png"),
              },
            ],
          },
          {
            id: 19,
            name: "Пафосный шкаф",
            description: "Под заказ (2-4 недели)",
            oldPrice: 935000,
            price: 899900,
            hasDiscount: true,
            sectionTitle: "Лучшие товары мебель",
            imageUrl: require("@/assets/product-catalog/furniture-products/closet/closet_variant_4.png"),
            variants: [
              {
                color: "#dc2840",
                imageUrl: require("@/assets/product-catalog/furniture-products/closet/closet_variant_1.png"),
              },
              {
                color: "#06d6a0",
                imageUrl: require("@/assets/product-catalog/furniture-products/closet/closet_variant_2.png"),
              },
              {
                color: "#676767",
                imageUrl: require("@/assets/product-catalog/furniture-products/closet/closet_variant_3.png"),
              },
              {
                color: "#dea220",
                imageUrl: require("@/assets/product-catalog/furniture-products/closet/closet_variant_4.png"),
              },
            ],
          },
          {
            id: 20,
            name: "Пафосный торшер",
            description: "В наличии",
            oldPrice: null,
            price: 60000,
            hasDiscount: false,
            sectionTitle: "Лучшие товары мебель",
            imageUrl: require("@/assets/product-catalog/furniture-products/floor-lamp/floor-lamp_variant_4.png"),
            variants: [
              {
                color: "#dc2840",
                imageUrl: require("@/assets/product-catalog/furniture-products/floor-lamp/floor-lamp_variant_1.png"),
              },
              {
                color: "#06d6a0",
                imageUrl: require("@/assets/product-catalog/furniture-products/floor-lamp/floor-lamp_variant_2.png"),
              },
              {
                color: "#676767",
                imageUrl: require("@/assets/product-catalog/furniture-products/floor-lamp/floor-lamp_variant_3.png"),
              },
              {
                color: "#dea220",
                imageUrl: require("@/assets/product-catalog/furniture-products/floor-lamp/floor-lamp_variant_4.png"),
              },
            ],
          },
        ],
      },
    ],

    cart: [],
  },
  getters: {
    productById: (state) => (id) => {
      const numericId = parseInt(id, 10);
      for (let section of state.sections) {
        const found = section.products.find(
          (product) => product.id === numericId
        );
        if (found) return found;
      }
      return null;
    },
    cartTotal: (state) => {
      return state.cart.reduce((total, product) => {
        const actualPrice =
          product.hasDiscount && product.oldPrice
            ? product.price
            : product.price;
        return total + actualPrice * product.quantity;
      }, 0);
    },
    totalDiscount: (state) => {
      return state.cart.reduce((totalDiscount, product) => {
        if (product.hasDiscount && product.oldPrice) {
          const discountPerProduct =
            (product.oldPrice - product.price) * product.quantity;
          return totalDiscount + discountPerProduct;
        }
        return totalDiscount;
      }, 0);
    },
  },
  mutations: {
    addToCart(state, product) {
      const cartProduct = state.cart.find((p) => p.id === product.id);
      if (cartProduct) {
        cartProduct.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1, checked: false });
      }
    },
    removeFromCart(state, productId) {
      const index = state.cart.findIndex((p) => p.id === productId);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
    incrementQuantity(state, productId) {
      const cartProduct = state.cart.find((p) => p.id === productId);
      if (cartProduct) {
        cartProduct.quantity++;
      }
    },
    decrementQuantity(state, productId) {
      const cartProduct = state.cart.find((p) => p.id === productId);
      if (cartProduct && cartProduct.quantity > 1) {
        cartProduct.quantity--;
      }
    },
    toggleProductChecked(state, productId) {
      const product = state.cart.find((p) => p.id === productId);
      if (product) {
        product.checked = !product.checked;
      }
    },
    clearCart(state) {
      state.cart = [];
    },
    REMOVE_SELECTED_PRODUCTS(state, productIds) {
      state.cart = state.cart.filter(
        (product) => !productIds.includes(product.id)
      );
    },
    TOGGLE_PRODUCT_CHECKED(state, { id, checked }) {
      const product = state.cart.find((product) => product.id === id);
      if (product) {
        product.checked = checked;
      }
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit("addToCart", product);
    },
    removeFromCart({ commit }, productId) {
      commit("removeFromCart", productId);
    },
    incrementQuantity({ commit }, productId) {
      commit("incrementQuantity", productId);
    },
    decrementQuantity({ commit }, productId) {
      commit("decrementQuantity", productId);
    },
    clearCart({ commit }) {
      commit("clearCart");
    },
    removeSelectedProducts({ commit, state }) {
      const selectedProductIds = state.cart
        .filter((product) => product.checked)
        .map((product) => product.id);
      commit("REMOVE_SELECTED_PRODUCTS", selectedProductIds);
    },
    toggleProductChecked({ commit }, { id, checked }) {
      commit("TOGGLE_PRODUCT_CHECKED", { id, checked });
    },
  },
  modules: {},
});
