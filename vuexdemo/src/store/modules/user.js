/* eslint-disable no-console */
const user = {
  state: {
      list:[],
      userInfo:{}
  },

  mutations: {
    SET_USER: (state, userInfo) => {
        state.userInfo = userInfo

        state.list.push({username:userInfo.username,password:userInfo.password})
    },
    CHANGE_USER: (state,index) => {
        console.log('触发了此方法')
        state.userInfo = state.list[index]
    }
  }
}

export default user
