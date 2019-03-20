<script>
import { mapMutations } from "vuex";
export default {
  computed: {
      list() {
          return this.$store.state.user.list
      }
  },
  onLoad() {},
  methods: {
    ...mapMutations(["CHANGE_USER"])
  }
};
</script>
<template>
  <div>
    <div>首页</div>
    <ul id="example-2">
        <li v-for="(item, index) in list" :key="index">
            <div>{{ item.username }} - {{ item.password }}</div>
            <button  @click="CHANGE_USER(index)">编辑</button>
        </li>
    </ul>
  </div>
</template>

