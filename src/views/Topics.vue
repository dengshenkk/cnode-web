<template>
    <div class="topics">
      <div v-if="!detail" class="topics-item" v-for="(item, index) of topics" :key="index">
        <list-item
          @click.native="getDetail(item.content)"
          :item-img="item.author.avatar_url"
          :reply="item.reply_count"
          :visit="item.visit_count"
          :tab="item.tabName"
          :author-img="item.authorImg"
          :author-text="item.loginname"
          :time="item.time"
          :title="item.title">
        </list-item>
      </div>
      <div class="detail" v-else v-html="html"></div>
    </div>
</template>

<script>
import {topicsGet} from '../api/topics'
import {idToImg, timeaGo} from '@/util/translate'
import ListItem from '@/components/list-item'

export default {
  name: 'Topics',
  components: {ListItem},
  data () {
    return {
      html: '',
      detail: false,
      topics: []
    }
  },
  watch: {
    '$route' () {
      this.init()
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      console.log(this.$route.meta.tab)
      topicsGet({page: 1, tab: this.$route.meta.tab, limit: 20, mdrender: false}).then(res => {
        console.log(res.data, '====')
        for (const item of res.data.data) {
          // tab转中文
          switch (item.tab) {
            case 'share':
              item.tabName = '精华'
              break
            case 'ask':
              item.tabName = '问答'
              break
            case 'all':
              item.tabName = '全部'
              break
            case 'job':
              item.tabName = '找坑'
              break
            default:
              item.tabName = item.tab
              break
          }
          item.authorImg = idToImg(item.id)
          item.time = timeaGo(item.last_reply_at)
        }
        this.topics = res.data.data
      })
    },
    getDetail (val) {
      this.detail = true
      this.html = val
    }
  }
}
</script>

<style lang="scss" scoped>
.topics{
  background-color: #fff;
  width: 960px;
  margin: 0 auto;
  .topics-item{
    cursor: pointer;
    border-bottom: 1px solid #ccc;
  }
  .detail{
    img{
      width: 960px;
    }
  }
}
</style>
