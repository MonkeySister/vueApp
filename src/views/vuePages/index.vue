<template>
  <div class="pages vuePages">
    <Header>
      <span>{{title}}</span>
    </Header>
    <div class="pageContent">
      <page-menus :menus="menus"></page-menus>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>

    <!-- <Form ref="formCustom"
      :model="formCustom"
      :rules="ruleCustom"
      @on-validate="vali"
      :label-width="80">
      <FormItem v-for="(item,index) in formCustom.list"
        :key="index"
        label="Age"
        :prop="'list.'+index+'.age'">
        <InputNumber v-model="item.age"
          @on-change="checkAge('formCustom',index)"
          number></InputNumber>
      </FormItem>
      <FormItem>
        <Button type="primary"
          @click="handleSubmit('formCustom')">Submit</Button>
        <Button @click="handleReset('formCustom')"
          style="margin-left: 8px">Reset</Button>
      </FormItem>
    </Form> -->

    <el-form :model="formCustom"
      status-icon
      :rules="rules"
      ref="formCustom"
      label-width="100px"
      class="demo-ruleCustom">

      <el-form-item v-for="(item,index) in formCustom.list"
        :key="index"
        label="Age"
        :prop="'list.'+index+'.age'"
        :rules="{ required: true, message: '域名不能为空', trigger: 'blur'}">
        <el-input v-model="item.age"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
          @click="handleSubmit('formCustom')">提交</el-button>
        <el-button @click="resetForm('formCustom')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { Form, InputNumber } from 'view-design'
export default {
  components: {
    // Form,
    // FormItem: Form.Item,
    // InputNumber
  },
  data() {
    const validateAge = (rule, value, callback) => {
      console.log(value);
      if (!value) {
        return callback(new Error('Age cannot be empty'));
      }

    };
    return {
      title: "Vue知识点学习",
      test: '测试',
      menus: [
        {
          label: '动画与过渡',
          value: '/transitionPage'
        }
      ],
      formCustom: {},
      age: null,
      ruleCustom: {
        age: [
          // { validator: validateAge, trigger: 'change' }
          { required: true, message: '请输入', type: 'number', trigger: 'change' }
        ]
      },
      rules: { required: true, message: '年龄', type: 'number', trigger: 'change' }
    }
  },
  computed: {
  },
  mounted() {
    let list = [
      {
        age: null,
      },
      {
        age: null,
      },
      {
        age: null,
      },
      {
        age: null,
      }
    ]
    this.formCustom.list = list
    this.$forceUpdate()
  },
  methods: {
    checkAge(name, index) {
      // this.$refs[name].validateField(`list.${index}.age`, msg => {
      //   console.log(msg);
      // })
      // this.$refs[name].fields.forEach(function (e) {
      //   console.log(e)
      //   if (e.prop.includes('age')) {
      //     e.resetField()
      //   }
      // })
    },
    vali(prop, status, error) {
      // console.log(prop, status, error);
    },
    handleSubmit(name) {

      this.$refs[name].validate((valid) => {
        if (valid) {
          // this.$Message.success('Success!');
        } else {
          // this.$Message.error('Fail!');
        }
      })
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
}
</script>

<style lang="scss" scoped>
.pageContent {
  width: 100%;
  display: flex;
  padding-top: 60px;
  box-sizing: border-box;
}
.content {
  width: 100%;
  min-height: calc(100vh - 60px);
  padding: 1% 2%;
  box-sizing: border-box;
  display: flex;
}
</style>