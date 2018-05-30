<template>
    <div class="list-item">
      <p class="item-img">
        <img :src="itemImg">
      </p>
      <p class="num"><span style="color: red;">{{reply}}</span>/<span style="color: deepskyblue;">{{visit}}</span></p>
      <span class="tab">{{tab}}</span>
      <p class="title">{{title}}</p>
      <!--<p class="author-img">-->
        <!--<img :src="authorImg" :alt="authorText">-->
      <!--</p>-->
      <p class="time">{{time}}</p>
    </div>
</template>

<script>
export default {
  name: 'list-item',
  props: {
    itemImg: {
      required: true
    },
    reply: {
      required: true
    },
    visit: {
      required: true
    },
    tab: {
      required: true
    },
    title: {
      required: true
    },
    authorImg: {
      required: true
    },
    authorText: {
      required: true
    },
    time: ''
  }
}
</script>

<style lang="scss" scoped>
.list-item{
  display: flex;
  align-items: center;
  padding: 0 8px;
  &:hover{
    background-color: #d1d1d1;
  }
  img{
    width: 30px;
    height: 30px;
  }
  .item-img{
    margin-right: 8px;
  }
  .num{
    width: 80px;
    margin-right: 8px;
    span{
      &:first-child {
        color: red;
      }
      &:last-child{
        color: deepskyblue;
      }
    }
  }
  .tab{
    color: white;
    margin-right: 8px;
    padding: 2px 4px;
    border: 1px solid deepskyblue;
    background-color: deepskyblue;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }
  .title{
    font-size: 14px;
    font-weight: 900;
  }
}
</style>
