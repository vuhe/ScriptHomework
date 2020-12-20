Vue.component('form-page', {
    data: function () {
        return {
            isShow: false,
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
            other: '',
            form: {
                name: '',
                region: undefined,
                date1: undefined,
                type: [],
                resource: '',
                desc: '',
            },
            rules: {
                name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                ],
                region: [{ required: true, message: '请选择一个校区', trigger: 'change' }],
                type: [
                    {
                        type: 'array',
                        required: true,
                        message: '请至少选择一个',
                        trigger: 'change',
                    },
                ],
                resource: [
                    { required: true, message: '请填写身体情况', trigger: 'change' },
                ],
            },
        };
    },
    methods: {
        onSubmit() {
            this.$refs.ruleForm.validate(valid => {
                if (valid) {
                    this.isShow = true
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm() {
            this.isShow = false
            this.$refs.ruleForm.resetFields();
        },
    },
    template: `
    <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
            <a-page-header
                style="border: 1px solid rgb(235, 237, 240)"
                title="表单测试"
                sub-title="此页面是用于表单测试的页面"
                @back="() => this.$router.push('/')"
            />                    
        </a-layout-header>
        <a-layout-content class="layout-content">
            <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-model-item ref="name" label="姓名" prop="name">
      <a-input
        v-model="form.name"
        @blur="
          () => {
            $refs.name.onFieldBlur();
          }
        "
      />
    </a-form-model-item>
    <a-form-model-item label="校区" prop="region">
      <a-select v-model="form.region" placeholder="请选择校区">
        <a-select-option value="花园校区">
          花园校区
        </a-select-option>
        <a-select-option value="龙子湖校区">
          龙子湖校区
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item label="出行方式" prop="type">
      <a-checkbox-group v-model="form.type">
        <a-checkbox value="骑车" name="骑车">
          骑车
        </a-checkbox>
        <a-checkbox value="汽车" name="汽车">
          汽车
        </a-checkbox>
        <a-checkbox value="火车" name="火车">
          火车
        </a-checkbox>
      </a-checkbox-group>
    </a-form-model-item>
    <a-form-model-item label="是否有不适症状" prop="resource">
      <a-radio-group v-model="form.resource">
        <a-radio value="是">
          是
        </a-radio>
        <a-radio value="否">
          否
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">
        提交
      </a-button>
      <a-button style="margin-left: 10px;" @click="resetForm">
        重置
      </a-button>
    </a-form-model-item>
  </a-form-model>
  <a-list v-if="isShow" bordered>
      <a-list-item >
        姓名：{{form.name}}
      </a-list-item>
      <a-list-item>
        校区：{{form.region}}
      </a-list-item>
      <a-list-item >
        出行方式：{{form.type}}
      </a-list-item>
      <a-list-item >
        是否有不适症状：{{form.resource}}
      </a-list-item>
    </a-list>
        </a-layout-content>
    </a-layout>
    `
});
