<template>
  <MainHeader />
  <div class="full-width-container">
    <div class="wrapper">
      <BreadCrumbs :items="breadcrumbsItems" />
      <div class="product-card-content">
        <div class="product-card-container">
          <div class="product-image-container">
            <img
              :src="selectedVariant.imageUrl"
              alt="product.name"
              class="product-image"
              @click="openModal(selectedVariant.imageUrl)"
            />
          </div>
          <div class="product-details-container">
            <h2 class="product-name">{{ product.name }}</h2>
            <p class="product-description">{{ product.description }}</p>
            <div v-if="product.hasDiscount" class="product-old-price">
              {{ product.oldPrice }} ₸
            </div>
            <div class="product-price">{{ product.price }} ₸</div>
            <div class="product-variants">
              <div
                v-for="variant in product.variants"
                :key="variant.color"
                class="product-variant"
                :style="{ backgroundColor: variant.color }"
                @click="selectVariant(variant)"
              ></div>
            </div>
            <button
              class="add-to-cart-btn"
              :class="{ 'in-cart': isInCart }"
              @click="toggleProductInCart"
            >
              {{ isInCart ? "Удалить из корзины" : "Добавить в корзину" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ImagesModalWindow
    v-if="isModalOpen"
    :image-url="modalImageUrl"
    @close="isModalOpen = false"
  />
  <MainFooter />
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import ImagesModalWindow from "@/components/ImagesModalWindow.vue";

export default {
  components: {
    MainHeader,
    MainFooter,
    BreadCrumbs,
    ImagesModalWindow,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedVariantIndex: 0,
      isModalOpen: false,
      modalImageUrl: "",
    };
  },
  computed: {
    ...mapGetters(["productById"]),
    ...mapState(["cart"]),
    product() {
      return this.productById(this.id);
    },
    breadcrumbsItems() {
      return [
        { text: "Главная", href: "/" },
        {
          text: this.product.sectionTitle,
          href: `/section/${this.product.sectionId}`,
        },
        { text: this.product.name, href: "" },
      ];
    },
    selectedVariant() {
      if (this.selectedVariantIndex !== null) {
        return this.product.variants[this.selectedVariantIndex];
      }
      return null;
    },
    displayImage() {
      if (
        this.selectedVariantIndex !== null &&
        this.product.variants &&
        this.product.variants.length > 0
      ) {
        return this.product.variants[this.selectedVariantIndex].imageUrl;
      }
      return this.product.imageUrl;
    },
    isInCart() {
      return this.cart.some((item) => item.id === this.product.id);
    },
  },

  methods: {
    ...mapActions(["addToCart", "removeFromCart"]),
    selectVariant(variant) {
      this.selectedVariantIndex = this.product.variants.indexOf(variant);
    },
    openModal(imageUrl) {
      this.modalImageUrl = imageUrl;
      this.isModalOpen = true;
    },
    toggleProductInCart() {
      if (this.isInCart) {
        this.removeFromCart(this.product.id);
      } else {
        this.addToCart(this.product);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.full-width-container {
  @include full-width-container;

  .wrapper {
    @include wrapper;
  }

  .product-card-container {
    display: flex;
    margin: 25px 0px 20px 0px;
    gap: 39px;

    .product-image-container {
      max-width: 300px;

      .product-image {
        width: 300px;
        height: 300px;
        border-radius: 8px;
        transition: transform 0.3s ease;
        object-fit: cover;

        &:hover {
          transform: scale(1.05);
          cursor: url("/src/assets/img/cursor-pic.png"), auto;
        }
      }
    }

    .product-details-container {
      display: flex;
      flex-direction: column;
      gap: 25px;

      .product-name {
        font-size: 35px;
        margin: 0 !important;
      }

      .product-price {
        font-weight: bold;
        justify-content: flex-start;
      }

      .product-old-price {
        text-decoration: line-through;
      }

      .product-description {
        color: $dark-grey-color;
        margin: 0;
        padding: 0;
      }

      .product-price {
        font-size: 20px;
        color: $black-color;
      }

      .add-to-cart-btn {
        background-color: $red-color;
        color: $white-color;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        font-size: 16px;
        border-radius: 4px;
        cursor: url("/src/assets/img/cursor-pic.png"), auto;
        transition: background-color 0.3s ease, transform 0.3s ease;

        &:hover {
          transform: scale(1.03);
        }

        &.in-cart {
          background-color: $green-color;
          &:hover {
            background-color: darken($green-color, 10%);
          }
        }
      }

      .product-variants {
        display: flex;
        gap: 5px;

        .product-variant {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          margin-right: 5px;
          cursor: url("/src/assets/img/cursor-pic.png"), auto;
          transition: background-color 0.3s ease, transform 0.3s ease;
          position: relative;

          &:hover {
            transform: scale(1.1);
            box-shadow: 0 0 2px black;
          }
        }
      }
    }
  }
}

@media (max-width: 1300px) {
  .full-width-container {
    background: none !important;
    padding: 0;
  }
}

@media (max-width: 768px) {
  .product-card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px 0px;

    .product-card-container {
      width: 80%;
      text-align: left;
      justify-content: space-around;
      padding: 15px 0px;
      font-size: 40px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
      padding: 70px 0px;
      border-radius: 20px;
      margin: 15px 0px;

      .product-name {
        margin: 0;
        font-size: 35px;
      }

      .product-description {
        font-size: 20px;
      }

      .product-price {
        font-size: 30px !important;
      }

      .product-old-price {
        font-size: 24px;
      }

      .add-to-cart-btn {
        width: 260px;
        height: 60px;
        font-size: 20px !important;
      }

      .product-details-container {
        width: 50%;
        padding: 0;
        gap: 15px;
      }

      .product-image {
        max-width: 300px !important;
        height: auto !important;
      }

      .product-variants {
        gap: 20px !important;
        .product-variant {
          width: 30px !important;
          height: 30px !important;
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .wrapper {
    @include wrapper;
  }

  .product-card-content {
    .product-card-container {
      flex-direction: column;
      align-items: center;
      width: 90%;
      text-align: center;

      .product-image-container {
        width: 100%;
        .product-image {
          width: 100%;
          max-width: 300px;
          height: auto;
        }
      }

      .product-details-container {
        width: 80%;
        padding: 20px;
        gap: 30px;

        .product-name {
          font-size: 65px;
        }

        .product-description {
          font-size: 50px;
        }

        .product-price {
          font-size: 60px !important;
        }

        .product-old-price {
          font-size: 40px;
        }

        .add-to-cart-btn {
          width: 100%;
          height: 120px;
          font-size: 40px !important;
          margin-top: 30px;
          border-radius: 20px;
        }

        .product-variants {
          display: flex;
          justify-content: center;
          gap: 40px;
          .product-variant {
            width: 70px !important;
            height: 70px !important;
          }
        }
      }
    }
  }
}
</style>
