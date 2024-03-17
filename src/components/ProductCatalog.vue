<template>
  <div class="full-width-container">
    <div class="wrapper">
      <div
        v-for="(section, index) in sections"
        :key="index"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="2000"
        data-aos-offset="200"
      >
        <h2 id="product-catalog-title">{{ section.title }}</h2>
        <div id="product-catalog">
          <div
            class="product"
            v-for="product in section.products"
            :key="product.id"
          >
            <img
              class="product-image"
              :src="product.imageUrl"
              :alt="product.name"
              @click="openModal(product.imageUrl)"
            />
            <div class="product-info">
              <router-link
                :to="`/product/${product.id}`"
                class="product-name-link"
              >
                <h3 class="product-name">{{ product.name }}</h3>
              </router-link>
              <div class="product-description">{{ product.description }}</div>
              <div class="product-pricing">
                <div class="price-container">
                  <div v-if="product.hasDiscount" class="product-old-price">
                    {{ product.oldPrice }}
                  </div>
                  <div
                    class="product-price"
                    :class="{ 'discount-price': product.hasDiscount }"
                  >
                    {{ product.price }} ₸
                  </div>
                </div>
                <button
                  class="product-add-btn"
                  :class="{ 'in-cart': isInCart(product.id) }"
                  @click="toggleProductInCart(product)"
                >
                  <span v-if="!isInCart(product.id)">+</span>
                  <span v-else>✔</span>
                </button>
              </div>
            </div>
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
</template>

<script>
import { mapState, mapActions } from "vuex";
import ImagesModalWindow from "@/components/ImagesModalWindow.vue";

export default {
  components: {
    ImagesModalWindow,
  },

  computed: {
    ...mapState(["sections", "cart"]),
  },

  data() {
    return {
      isModalOpen: false,
      modalImageUrl: "",
    };
  },

  methods: {
    ...mapActions(["addToCart", "removeFromCart"]),
    openModal(imageUrl) {
      this.modalImageUrl = imageUrl;
      this.isModalOpen = true;
    },
    toggleProductInCart(product) {
      if (this.isInCart(product.id)) {
        this.removeFromCart(product.id);
      } else {
        this.addToCart(product);
      }
    },
    isInCart(productId) {
      return this.cart.some((product) => product.id === productId);
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: $black-color;
}
.full-width-container {
  @include full-width-container;
  width: 100%;
  box-sizing: border-box;

  .wrapper {
    @include wrapper;

    #product-catalog {
      padding: 15px 0;
      display: flex;
      gap: 30px;

      .product {
        width: calc(20% - 20px);
        border-radius: 8px;

        .product-image {
          max-width: 100%;
          height: auto;
          margin-bottom: 10px;
          border-radius: 8px;
          transition: transform 0.3s ease;

          &:hover {
            transform: scale(1.1);
            cursor: url("/src/assets/img/cursor-pic.png"), auto;
          }
        }

        .product-info {
          display: flex;
          flex-direction: column;
        }

        .product-name {
          font-size: 0.7em;
          margin-bottom: 5px;
          position: relative;
          display: inline-block;
          cursor: url("/src/assets/img/cursor-pic.png"), auto;
          color: $black-color;
          transition: color 0.3s ease;

          &::after {
            content: "";
            position: absolute;
            bottom: -2px;
            left: 50%;
            width: 0;
            height: 2px;
            background-color: $black-color;
            transition: width 0.3s ease, transform 0.3s ease,
              background-color 0.3s ease;
            transform: translateX(-50%);
          }

          &:hover {
            color: $red-color;

            &::after {
              width: 100%;
              background-color: $red-color;
              transform: translateX(-50%);
            }
          }
        }

        .product-description {
          font-size: 0.7em;
          color: $dark-grey-color;
          margin-bottom: 10px;
        }

        .product-pricing {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .price-container {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            .product-old-price {
              text-decoration: line-through;
              color: $dark-grey-color;
              font-weight: normal;
              margin-bottom: 5px;
              font-size: 13px;
            }

            .product-price {
              font-weight: bold;
              color: $black-color;
            }

            .discount-price {
              color: $red-color;
            }
          }

          .product-add-btn {
            background-color: $light-grey-color;
            color: $black-color;
            font-weight: bold;
            border: none;
            border-radius: 4px;
            padding: 5px 10px;
            cursor: url("/src/assets/img/cursor-pic.png"), auto;
            transition: background-color 0.3s ease, transform 0.3s ease;

            &:hover {
              background-color: $red-color;
              transform: scale(1.2);
            }
          }

          .in-cart {
            background-color: $green-color;
            color: white;

            &:hover {
              background-color: darken($green-color, 10%);
              transform: none;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1300px) {
  .full-width-container {
    background: none !important;
  }
}

@media (max-width: 768px) {
  .full-width-container {
    .wrapper {
      #product-catalog {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        .product-add-btn {
          background-color: $red-color !important;
          color: $white-color;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          font-size: 16px;
          border-radius: 8px !important;
          cursor: url("/src/assets/img/cursor-pic.png"), auto;
          transition: background-color 0.3s ease, transform 0.3s ease;
          width: 350px;
          height: 60px;
          font-size: 30px;

          &:hover {
            transform: scale(1.03);
          }

          &.in-cart {
            background-color: $green-color !important;
            &:hover {
              background-color: darken($green-color, 10%);
            }
          }
        }

        .product {
          width: 70%;
          align-items: center;
          text-align: center;
          gap: 20px;
          padding: 15px 0px;
          font-size: 40px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
          padding: 70px 0px;
          border-radius: 20px;
          margin: 15px 0px;

          .product-name {
            font-size: 35px;
          }

          .product-image {
            max-width: 100%;
            height: auto;
            object-fit: contain;
            border-radius: 12px;
          }

          .product-info,
          .product-pricing {
            align-items: center;
            gap: 20px;
          }

          .product-pricing {
            flex-direction: column;
            align-items: center;

            .product-old-price {
              font-size: 30px !important;
            }
          }
        }
      }

      h2 {
        text-align: center;
        font-size: 40px;
      }
    }
  }
}

@media (max-width: 500px) {
  .full-width-container {
    .wrapper {
      h2 {
        font-size: 65px;
      }
      #product-catalog {
        .product {
          width: 90%;
          font-size: 20px;
          padding: 100px 0px;

          .product-name {
            font-size: 55px;
          }

          .product-description {
            font-size: 45px;
          }

          .product-image {
            border-radius: 24px;
          }

          .product-pricing {
            .product-price {
              font-size: 60px;
            }

            .product-old-price {
              font-size: 40px !important;
            }

            .product-add-btn {
              width: 250%;
              height: 120px;
              font-size: 60px;
              margin-top: 30px;
            }
          }
        }
      }
    }
  }
}
</style>
