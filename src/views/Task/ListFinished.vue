<template>
  <div class="ListFinished">
    <!--
         卡片模式：显示三条的清单记录 
      -->
    <div class="ListFinished_content">
      <div class="ListFinished_left">
        <el-calendar @click="getDate()" v-model="date" />
      </div>
      <div class="ListFinished_right">
        <h4>{{ time }}</h4>
        <ul>
          <li v-for="taskItem in state.taskList" :key="taskItem.index">
            {{ taskItem.taskTitle }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
//日期
const date = ref(new Date());
const items = ref([{ message: "Foo" }, { message: "Bar" }]);
let time = ref({
  time: 0,
});
//清单数据
const state = reactive({
  taskList: [],
});
// 生命周期钩子onMounted
onMounted(() => {
  state.taskList = [
    {
      index: 1,
      taskTitle: "背30个英语单词",
      isFinished: false,
    },
    {
      index: 2,
      taskTitle: "写三道高数题",
      isFinished: false,
    },
    {
      index: 3,
      taskTitle: "学习Promise",
      isFinished: false,
    },
    {
      index: 4,
      taskTitle: "学习async和await",
      isFinished: false,
    },
  ];
});
//根据选中的时间获取清单
/*根据用户id和时间戳来获取指定日期的任务清单 */
function getDate() {
  //先用死的数据代替
  /*
     获取的是一个数组对象：
      每个对象包含
      index:任务的id
      taskTitle：String任务
      isFinished：boolean 判断该任务是否完成
    */
  state.taskList = [
    {
      index: 1,
      taskTitle: "背10个英语单词",
      isFinished: false,
    },
    {
      index: 2,
      taskTitle: "写三道高数题",
      isFinished: false,
    },
    {
      index: 3,
      taskTitle: "学习Promise",
      isFinished: false,
    },
    {
      index: 4,
      taskTitle: "学习async和await",
      isFinished: false,
    },
  ];
}
</script>

<style lang="less">
.ListFinished {
  .ListFinished_content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .ListFinished_left {
      width: 600px;
      background: #2ec194;
      border-radius: 15px;
      box-shadow: 0 0 10px #074a99;
    }

    .ListFinished_right {
      // background: rebeccapurple;
      width: 350px;
      min-height: 650px;
      padding: 20px;
      border: 1px solid black;
      border-radius: 5px;
      background-image: url("~@/assets/Images/task/task1.png");
    }
  }
}
</style>
