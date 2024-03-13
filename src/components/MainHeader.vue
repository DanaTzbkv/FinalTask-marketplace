<template>
  <div class="wrapper">
    <header>
      <router-link to="/" class="logos">
        <ul class="logos">
          <li>
            <img
              class="header-logo"
              src="../assets/header/heart-logo.png"
              alt="header-logo"
            />
          </li>
          <li class="logo-text">ДариДобро</li>
          <li>
            <img src="../assets/header/divider-line.png" alt="divider-line" />
          </li>
          <li>
            <img
              class="beeline-logo"
              src="../assets/header/beeline-logo.png"
              alt="beeline-logo"
            />
          </li>
        </ul>
      </router-link>
      <button class="burger-menu-button" @click="toggleBurgerMenu">
        <img
          class="burger-menu-icon"
          src="../assets/img/burger-menu-button.png"
          alt="burger-menu-icon"
        />
      </button>
      <div
        class="burger-menu-content"
        v-if="isBurgerMenuOpen"
        @click.self="closeBurgerMenu"
      >
        <ul class="burger-menu-items">
          <a href="#">Продукция</a>
          <a href="#">Стать партнером</a>
          <a href="#">О проекте</a>
          <a href="#">Поиск</a>
          <a href="#">Профиль</a>
          <a @click="goToCart" href="#">Корзина</a>
        </ul>
      </div>
      <ul class="nav-links">
        <a href="#">Продукция</a>
        <a href="#">Стать партнером</a>
        <a href="#">О проекте</a>
      </ul>
      <ul class="profile-attributes">
        <li>
          <img
            class="search-icon"
            src="../assets/header/search-icon.png"
            alt="search-icon"
          />
        </li>
        <li>
          <img
            class="profile-icon"
            src="../assets/header/profile-icon.png"
            alt="profile-icon"
          />
        </li>
        <li @click="goToCart" class="cart-icon-container">
          <img
            class="cart-icon"
            src="../assets/header/cart-icon.png"
            alt="cart-icon"
          />
          <span v-if="cartItemCount" class="cart-item-count">{{
            cartItemCount
          }}</span>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBurgerMenuOpen: false,
    };
  },
  methods: {
    toggleBurgerMenu() {
      this.isBurgerMenuOpen = !this.isBurgerMenuOpen;
    },
    closeBurgerMenu() {
      if (this.isBurgerMenuOpen) {
        this.isBurgerMenuOpen = false;
      }
    },
    goToCart() {
      this.$router.push("/cart");
    },
  },
  computed: {
    cartItemCount() {
      return this.$store.state.cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  @include wrapper;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;

  .header-logo,
  .beeline-logo {
    width: 32px;
    height: 32px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .logo-text {
    font-weight: 700;
    font-size: 20px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .nav-links {
    a {
      color: $dark-grey-color;
      transition: color 0.3s ease, transform 0.3s ease;
      text-decoration: none;

      &:hover {
        font-weight: 700;
        color: $black-color;
        transform: scale(1.05);
        cursor: url("/src/assets/img/cursor-pic.png"), auto;
      }
    }
  }

  .profile-attributes {
    img {
      width: 25px;
      height: 25px;
      transition: color 0.3s ease, transform 0.3s ease;

      &:hover {
        transform: scale(1.2);
        cursor: url("/src/assets/img/cursor-pic.png"), auto;
      }
    }
  }

  .cart-icon-container {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .cart-item-count {
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: red;
    color: white;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
    min-width: 10px;
    text-align: center;
  }

  .burger-menu-button {
    display: none;
  }
}

@media (max-width: 768px) {
  header {
    display: flex;
    justify-content: space-around;
    gap: 300px;

    .logo-text {
      font-size: 30px;
    }

    .header-logo,
    .beeline-logo {
      width: 55px;
      height: 55px;
    }

    .burger-menu-button {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border: none;
      border-radius: 8px;
      height: 50px;
    }
  }

  .burger-menu-content {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    .burger-menu-items {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;

      a {
        color: white;
        font-size: 30px;
        text-decoration: none;
        padding: 10px;
      }
    }
  }

  .nav-links,
  .profile-attributes {
    display: none;
  }
}

@media (max-width: 600px) {
  header {
    padding: 20px 0px;
    .header-logo,
    .beeline-logo {
      width: 80px;
      height: 80px;
    }

    .logo-text {
      font-size: 40px;
    }

    .burger-menu-button {
      width: 75px;
      height: 75px;

      .burger-menu-icon {
        width: 60px;
        height: 60px;
      }
    }

    .burger-menu-items {
      a {
        font-size: 60px !important;
      }
    }
  }
}
</style>
