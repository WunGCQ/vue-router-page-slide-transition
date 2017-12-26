<template>
  <div id="app">
    <div class="m-body-wrap">
      <transition :name="transitionName">
        <router-view class="router-view" />
      </transition>
    </div>
  </div>
</template>

<script>


  export default {
    components: { TpHeader },
    name: 'app',
    data() {
      return {
        transitionName: 'forward'
      };
    },
    watch: {
      '$route'(to, from) {
        const toDepth = to.meta.index;
        const fromDepth = from.meta.index;
        this.transitionName = toDepth < fromDepth ? 'slide-down' : 'slide-up';
      }
    }
  };
</script>

<style lang="scss">
  body {
    height: 100vh;
    overflow: hidden;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
    text-align: center;
    color: #2c3e50;
  }

  .router-view {
    position: absolute;
    transition: all ease 1s;
    top: 0;
    left: 0;
    margin: 0;
  }
  .slide-up-enter-active {

  }
  .slide-up-leave-active {

  }

  //up
  .slide-up-enter {
    transform: translateY(100vh);
    opacity: 0;
  }
  .slide-up-enter-to {
    transform: translateY(0);
    opacity: 1;
  }
  .slide-up-leave {
    transform: translateY(0);
    opacity: 1;
  }
  .slide-up-leave-to {
    transform: translateY(-100vh);
    opacity: 1;
  }
  //
  .slide-down-enter {
    transform: translateY(-100vh);
    opacity: 0;
  }
  .slide-down-enter-to {
    transform: translateY(0);
    opacity: 1;
  }
  .slide-down-leave {
    transform: translateY(0);
    opacity: 1;
  }
  .slide-down-leave-to {
    transform: translateY(100vh);
    opacity: 1;
  }
</style>
