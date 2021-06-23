<template>
  <div class="circle loading"></div>
</template>
<script>
export default {
  name: 'Loading',
  data () {
    return {}
  },
  created () {
  },
  activated () {
  },
  methods: {
    text (type) {
      console.log(type)
    }
  }
}
</script>
<style scoped lang="less">
.circle {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 3px solid #aaa;
  border-top: 3px solid red;
}

@keyframes loading-360 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading {
  animation: loading-360 0.8s infinite linear;
}
</style>