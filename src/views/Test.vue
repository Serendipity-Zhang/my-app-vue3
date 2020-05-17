<template>
  <div class="test">
    <h1>test count: {{count}}</h1>
    <button @click="add">add</button>
     <div>count * 2 = {{doubleCount}}</div>
     <div>state from vuex {{a}}</div>

     <button @click="update">update a</button>
  </div>
</template>

<script>
  import { ref,computed, watch, getCurrentInstance } from 'vue'
  //通过 getCurrentInstance 方法获取当前组件的实例，然后通过 ctx 属性获得当前上下文，
  //ctx.$router 是 Vue Router 实例，里面包含了 currentRoute 可以获取到当前的路由信息
  export default {
    setup () { //初始化状态通过 setup 方法
      const count = ref(0) //定义状态需要调用 ref 方法。接下来我们定义一个事件，用来更新 count 状态
      const add = () => {
        count.value++
      }
      watch(() => count.value, val =>{
        //watch它包含 2 个参数，2 个参数都是 function：
        //第一个参数监听值，count.val 表示当count.val发生变化就会触发监听器的回调函数
        //即第二个参数，第二个参数可以执行监听时候的回调
        
        console.log(`count in ${val}`);
        
      })
      const doubleCount = computed(() => count.value *2)
      //computed 是一个方法，里面需要包含一个回调函数 ，当我们计算属性返回结果时，会自动获取回调函数的值
       //获取路由
       const {ctx } = getCurrentInstance()
       console.log(ctx.$router.currentRoute.value)

       //vueX获取值
       const a = computed(() =>ctx.$store.state.test.a)
       //更新 vueX状态
      const update = () => {
        ctx.$store.commit('setTestA', count)
      }
      return {
        count,
        add,
        doubleCount,
        a,
        update

      }
    }
  }
</script>