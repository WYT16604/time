<template>
  <div id="app">
    <div class="common-layout">
      <el-container>
        <el-aside width="200px">
          <!-- 侧边栏 -->
          <div id="home_aside_nav">
            <!-- 备忘录 -->
            <!-- 事项折叠面板 -->
            <div class="demo-collapse">
              <el-collapse v-model="activeNames">
                <!-- 
                title:面板标题
                name:唯一标识
                通过具名 slot 来实现自定义面板的标题内容，以实现增加图标等效果
             -->
                <el-collapse-item name="1">
                  <template #title>
                    <i class="iconfont icon-a-shixiang2"></i
                    ><span class="small_title">事项</span>
                  </template>
                  <div>
                    <i class="iconfont icon-qingdan"></i
                    ><span class="small_title" @click="goPath('/')">清单</span>
                  </div>
                  <div>
                    <i class="iconfont icon-yiwancheng"></i
                    ><span class="small_title" @click="goPath('/finishedList')"
                      >已完成</span
                    >
                  </div>
                  <div>
                    <i class="iconfont icon-weiwancheng"></i
                    ><span
                      class="small_title"
                      @click="goPath('/unFinishedList')"
                      >未完成</span
                    >
                  </div>
                </el-collapse-item>
                <el-collapse-item name="2">
                  <template #title>
                    <i class="iconfont icon-a-shixiang2"></i
                    ><span class="small_title">日记</span>
                  </template>
                  <div>
                    <i class="iconfont icon-liebiao"></i
                    ><span class="small_title">列表</span>
                  </div>
                  <div>
                    <i class="iconfont icon-riji"></i
                    ><span class="small_title">日历</span>
                  </div>
                </el-collapse-item>
                <el-collapse-item name="3">
                  <template #title>
                    <i class="iconfont icon-daojishi"></i
                    ><span class="small_title">番茄专注</span>
                  </template>
                  <div>
                    <i class="iconfont icon-liebiao"></i
                    ><span class="small_title">多次专注</span>
                  </div>
                </el-collapse-item>
                <el-collapse-item name="4">
                  <template #title>
                    <i class="iconfont icon-a-shixiang2"></i
                    ><span class="small_title">数据</span>
                  </template>
                  <div>
                    <i class="iconfont icon-diyitian"></i
                    ><span class="small_title">我的一天</span>
                  </div>
                  <div>
                    <i class="iconfont icon-date_month"></i
                    ><span class="small_title">我的一个月</span>
                  </div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </div>
        </el-aside>
        <el-container>
          <el-header>Header</el-header>
          <!-- 页面渲染部分 -->
          <el-main><router-view></router-view></el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
// 折叠版
const activeNames = ref(["1"]);

//实现跳转
function goPath(path) {
  const router = useRouter();
  router.push(path);
}
</script>
<!-- <script>
import FooterMusic from '@/components/item/FooterMusic.vue'
export default {
  components: {
    FooterMusic
  }
}
</script> -->
<style lang="less">
#app {
  border-radius: 10px;
  margin: auto;
  margin-top: 20px;
  // box-sizing: content-box;
  width: 95%;
  height: 95vh;
  // padding-top: 10px;
  // height: calc(100vh-10px);
  // background: red;
  box-shadow: black 0px 0px 10px; //将h-shadow,v-shadow设为0px,实现四周阴影
  //侧边栏
  .common-layout {
    width: 100%;
    height: 100%;
    .el-aside {
      margin-left: -38px;
      #home_aside_nav {
        height: 95vh;
        border-radius: 10px;
        overflow: hidden;
        background-color: rgb(215, 214, 230);
        padding: 10px;
        .demo-collapse {
          .el-collapse {
            .el-collapse-item {
              min-height: 40px;
              margin-top: 4px;
              margin-bottom: 4px;
              padding: 0 16px;
              // overflow: hidden;
              font-size: 14px;
              line-height: 40px;
              text-overflow: ellipsis;
              background-color: rgba(0, 0, 0, 0) !important;
              .el-collapse-item__header {
                background-color: rgba(0, 0, 0, 0) !important;
              }
              .el-collapse-item__wrap {
                background-color: rgba(0, 0, 0, 0) !important;
              }
            }
          }
        }

        .small_title {
          margin-left: 7px;
          font-size: 16px;
          color: #232323;
          height: 40px;
          line-height: 40px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
