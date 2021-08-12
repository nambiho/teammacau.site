<template>
  <div class="navbar">
    <div class="logo">
      <router-link tag="span" to="/">
        TeamMacau
      </router-link>
    </div>

    <ul class="nav-list">
      <li><router-link to="/Member" @click="clickLink">Member</router-link></li>
      <li><router-link to="/Blog" @click="clickLink">Blog</router-link></li>
      <li><router-link to="/Article" @click="clickLink">Article</router-link></li>
      <li><router-link to="/Gallary" @click="clickLink">Gallary</router-link></li>
    </ul>

    <div class="toggle-menu" @click="toggle">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        id="Layer_1" 
        x="0px"
        y="0px"
        width="122.879px"
        height="103.609px"
        viewBox="0 0 122.879 103.609"
        enable-background="new 0 0 122.879 103.609"
        xml:space="preserve">
        <g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.368,0h102.144c5.703,0,10.367,4.665,10.367,10.367v0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,20.735,0,16.07,0,10.368v0C0,4.665,4.666,0,10.368,0L10.368,0z M10.368,82.875 h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0c0,5.702-4.664,10.367-10.367,10.367H10.368C4.666,103.609,0,98.944,0,93.242l0,0 C0,87.54,4.666,82.875,10.368,82.875L10.368,82.875z M10.368,41.438h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,62.173,0,57.507,0,51.805l0,0C0,46.103,4.666,41.438,10.368,41.438 L10.368,41.438z" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted } from 'vue'

  const menuFunctions = (function () {
    const getMedia = () => matchMedia( 'screen and (max-width: 480px)' )
    const getNav = () => document.querySelector('.nav-list')
    const remove = () => getNav()?.classList.remove('active') 
    const clickLink = () => remove()
    const toggle = () => getNav()?.classList.toggle('active')
    const menuOnMount = () => {
      let bMinimum = getMedia().matches

      window.addEventListener('resize', function ( /* e: UIEvent */ ) {
        // const w = e.target as Window
        const toggleSize = getMedia().matches
        if ( bMinimum != toggleSize ) {
          bMinimum = toggleSize
          if ( !bMinimum ) {
            remove()
          }
        }
      })
    }

    return {
      menuOnMount,
      toggle,
      remove,
      clickLink,
    }
  } ())

  export default defineComponent({
    name: 'TopMenu',
    setup () {
      const { menuOnMount, toggle, clickLink, } = menuFunctions

      onMounted( menuOnMount )

      return {
        toggle,
        clickLink,
      }
    },
  })
</script>

<style lang="scss">
.navbar {
  background: darkblue;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 500;

  .nav-list {
    list-style-type: none;

    li {
      display: inline-block;
      padding: 20px 10px;
    }
  }

  a {
    text-decoration: none;
    color: white;
  }
  
  a:hover {
    color: aqua;
  }

  .toggle-menu {
    display: none;
    width: 40px;
    height: 15px;

    svg {
      width: 100%;
      height: 100%;
      fill: white;
    }
  }
}

@media screen and (max-width: 480px) {
  .navbar {
    flex-direction: column;

    .logo {
      width: 100%;
      text-align: left;
      padding: 20px;
      height: 100%;
    }

    .nav-list {
      width: 100%;
      display: none;
      position: absolute;
      background: darkblue;
      top: 62px;
      // margin-top: 20px;

      li {
        display: block;
        padding: 10px;
        border-top: 1px solid white;
      }
    }

    .toggle-menu {
      display: block;
      position: absolute;
      right: 10px;
      top: 23px;
      cursor: pointer;
    }

    .active {
      display: block;
    }
  }
}
</style>
