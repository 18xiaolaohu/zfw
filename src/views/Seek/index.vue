<template>
  <div>
    <!-- 找房-顶部导航栏 -->
    <div class="zhaofang-dhl">
      <div class="left" @click="$router.push('/home')">
        <van-icon name="arrow-left" />
      </div>
      <div class="title">
        <van-search v-model="value" placeholder="请输入搜索关键词">
          <template #label>
            <p>北京 ▽ |</p>
          </template>
        </van-search>
      </div>
      <div class="right">
        <van-icon name="location-o" />
      </div>
    </div>
    <!-- 选择 -->
    <van-dropdown-menu>
      <van-sticky>
        <van-dropdown-item title="区域">
          <van-picker show-toolbar title="标题" :columns="columns" />
        </van-dropdown-item>
        <van-dropdown-item title="方式"> </van-dropdown-item>
        <van-dropdown-item title="租金"> </van-dropdown-item>
        <van-dropdown-item title="筛选"> </van-dropdown-item>
      </van-sticky>
    </van-dropdown-menu>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      value: '',
      columns: [
        {
          text: '浙江',
          children: [
            {
              text: '杭州',
              children: [{ text: '西湖区' }, { text: '余杭区' }]
            },
            {
              text: '温州',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }]
            }
          ]
        },
        {
          text: '福建',
          children: [
            {
              text: '福州',
              children: [{ text: '鼓楼区' }, { text: '台江区' }]
            },
            {
              text: '厦门',
              children: [{ text: '思明区' }, { text: '海沧区' }]
            }
          ]
        }
      ],
      columns1: [
        {
          text: '浙江'
        },
        {
          text: '福建'
        }
      ]
    }
  },
  methods: {
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.zhaofang-dhl {
  background-color: #21b97a;
  position: absolute;
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .left {
    color: #fff;
  }
  .right {
    color: #fff;
  }
  .van-search {
    width: 274px;
    height: 34px;
    // unset:把本来设置的属性去掉
    background-color: unset;
    padding: unset;
  }
}
.van-dropdown-menu {
  margin-top: 50px;
}
.van-picker {
  .dibuxuanze {
    margin-bottom: 0;
    .quxiao {
      color: #000;
    }
    .queren {
      color: #000;
    }
  }
}
</style>
