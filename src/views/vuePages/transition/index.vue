<template>
  <div class="pageCon">
    <div class="box">
      <h2>v-if:条件渲染的过渡</h2>
      <Button @click="show1 = !show1">执行</Button>
      <transition name="transition1">
        <p v-if="show1">简单的显示隐藏</p>
      </transition>
    </div>

    <div class="box">
      <h2>CSS过渡</h2>
      <Button @click="show2 = !show2">执行</Button>
      <transition name="transition2">
        <p v-if="show2">带有过渡的显示隐藏</p>
      </transition>
    </div>

    <div class="box">
      <h2>CSS动画</h2>
      <Button @click="show3 = !show3">执行</Button>
      <transition name="transition3">
        <p v-if="show3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus</p>
      </transition>
    </div>

    <div id="box">
      <h2>结合Animation.css使用</h2>
      <Button @click="show4 = !show4">
        执行
      </Button>
      <transition name="custom-classes-transition"
        enter-active-class="animated tada"
        leave-active-class="animated bounceOutRight">
        <p v-if="show4">自定义类名用了animate.css动画</p>
      </transition>
    </div>

    <div class="box">
      <h2>结合Velocity使用</h2>
      <Button @click="show5 = !show5">
        执行
      </Button>
      <transition v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
        v-bind:css="false">
        <p v-if="show5">
          结合Velocity使用
        </p>
      </transition>
    </div>

  </div>
</template>

<script>
import Velocity from 'velocity-animate'
export default {
  data() {
    return {
      show1: true,
      show2: true,
      show3: true,
      show4: true,
      show5: false
    }
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.transformOrigin = 'left'
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
    }
  }
}
</script>

<style lang="scss" scoped>
.pageCon {
  width: 100%;
  max-width: 1200px;
  height: 100%;
  padding: 10px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(1px);
}
.box {
  margin: 15px 0;
}

.transition1-enter-active,
.transition1-leave-active {
  transition: opacity 0.5s;
}
.transition1-enter,
.transition1-leave-to {
  opacity: 0;
}

.transition2-enter-active {
  transition: all 0.3s ease;
}
.transition2-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.transition2-enter,
.transition2-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.transition3-enter-active {
  animation: bounce-in 0.5s;
}

.transotion3-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>