import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    test:{
     a:1  //state 中创建了一个 test.a 状态
    }
  },
  mutations: {
    setTestA(state,value){ //在 mutations 中添加了修改 state.test.a 状态的方法： setTestA
      state.test.a = value
    }
  },
  actions: {
  },
  modules: {
  }
});
