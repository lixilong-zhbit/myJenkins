<template>
  <div id="myMenu">
    <nav v-bind:class="active">
      <!-- 使用on直接绑定事件只能绑定自定义的事件，即在组件内部使用emit('name')的方式抛出的事件,
      在子组件实例上绑定原生的事件，需要使用.native的事件修饰符-->
    </nav>

    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <router-link to="/helloWorld" class="helloworld">helloworld</router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">
          <router-link to="/search" class="search">search</router-link>
        </el-menu-item>
        <el-menu-item index="2-2">
          <router-link to="/editData" class="editData">editData</router-link>
        </el-menu-item>
        <el-menu-item index="2-3">
          <a href="#" target="_blank">选项3</a>
        </el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4">
        <router-link to="/services" tag="li" class="services">订单表单</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script >
import Vue from "vue";
export default {
  name: "myMenu",
  data() {
    return {
      active: "",
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    makeActive(item) {
      // 模型改变，视图会自动更新
      this.active = item;
      console.log(item);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style >
a {
  text-decoration: none;
}
a:link {
  color: blue;
}
 /* 未被访问的链接 蓝色 */
a:visited {
  color: blue;
}
  /* 已被访问过的链接 蓝色 */
a:hover {
  color: red;
}
  /* 鼠标悬浮在上的链接 蓝色 */
a:active {
  color: blue;
} /* 鼠标点中激活链接 蓝色 */

.services {
  padding: 0;
}
</style>