<template>
    <div class="ds-main">
      <div class="content-main">
        <div class="ds-router">
          <router-link to="/tab/all">全部</router-link>
          <router-link to="/tab/good">精华</router-link>
          <router-link to="/tab/ask">问答</router-link>
          <router-link to="/tab/job">找坑</router-link>
        </div>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
export default {
  name: 'dsMain'
}
</script>

<style lang="scss" scoped>
.ds-main {
  background-color: #ccc;
  display: flex;
  justify-content: center;
.content-main{
  margin-top: 48px;
  .ds-router{
  }
}}
</style>
