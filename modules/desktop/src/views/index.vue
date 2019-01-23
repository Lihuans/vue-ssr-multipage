<template>
	<div class="resume-wrap">
		<div
			class="module-block"
			v-for="(formItem, formKey, formBlockIndex) in formBlock"
			:key="formBlockIndex"
		>
      <div v-if="formKey === 'experience'">
        <h2>{{ formItem.moduleName }}</h2>
        <div v-for="(formDataItem, formDataIndex) in formData[formKey]"
						:key="formDataIndex">
          <img :src="formDataItem.headUrl" alt="" style="width: 100px;">
          <!--<span v-for="(item, index) in formItem.form" :key="index">-->
            <!--<template v-if="item.name !== 'headUrl'">-->
                <!--<span v-if="item.name === 'nickname'"-->
                      <!--style="font-size: 30px;"-->
                <!--&gt;{{formDataItem[item.name]}}</span>-->
                <!--<span v-else>{{formDataItem[item.name]}}</span>-->
            <!--</template>-->
          <!--</span>-->
          <!--<div v-for="(k, v) in formDataItem">-->
            <!--<span>{{v}}:{{k}}</span>-->
          <!--</div>-->
          <div>
            <span style="font-size: 30px;">{{formDataItem.nickname}}</span>
          </div>
          <div>
            <span>{{formDataItem.sex}}</span>
            <span>{{formDataItem.birth}}</span>
            <span>{{formDataItem.city}}</span>
          </div>
          <div>
            <span>{{formDataItem.phone}}</span>
            <span>{{formDataItem.email}}</span>
          </div>
        </div>
      </div>
			<div v-else>
				<h2>{{ formItem.moduleName }}</h2>
				<button @click="addModuleItem(formKey)" v-show="Object.keys(formData[formKey]).length < 3">添加</button>
				<div>
					<div
						v-for="(formDataItem, formDataIndex) in formData[formKey]"
						:key="formDataIndex"
					>
            <div v-show="!(formKey + formDataIndex === editModule)">
              <p v-for="(item, index) in formItem.form" :key="index">
                <span>{{ item.label }}:{{ formDataItem[item.name] }}</span>
              </p>
              <button @click="editModuleItem(formKey, formDataIndex)">
                编辑
              </button>
            </div>
						<div v-show="formKey + formDataIndex === editModule">
							<form-block
								:form-item="formItem"
								:params="params"
								:form-data-index="formDataIndex"
								@cancelHandler="editClose"
                @submitSuccessHandler="editClose"
							></form-block>
						</div>
					</div>
				</div>
			</div>

			<div v-if="formKey === addModule">
				<form-block
					:form-item="formItem"
					:params="params"
					:form-data-index="addFormDataIndex"
					@cancelHandler="addClose(formKey)"
					@submitSuccessHandler="addModule = ''"
				></form-block>
			</div>
		</div>
	</div>
</template>

<script>
import formBlock from '../components/form';
import { mapState } from 'vuex';
export default {
	name: 'index',
	components: {
		formBlock
	},
	data() {
	  let required = (rule, value, callback) => {
	    if(!value) {
	      return callback(new Error('请输入相关字段'));
			}
		};
		return {
			editModule: '',
			addModule: '',
			params: {},
			addFormDataIndex: 0
		};
	},
	computed: {
		...mapState(['data', 'formBlock', 'formData'])
		// tableDatas () {
		//
		//   return this.data[0].info
		// }
	},
	created() {
		// let params = [];
		Object.keys(this.formData).forEach(val => {
			console.log(val); //base,education
			let info = {};
			info.module = val;
			let arr = [];
			this.formData[val].forEach(v => {
			  let obj = {};
			  this.formBlock[val].form.forEach(o => {
			    obj[o.name] = v[o.name] || '';
        });
			  arr.push(obj);
			});
			info.info = arr;
			this.$set(this.params, val, info);
		});
		console.log('====', this.params);
	},
	methods: {
		// ...mapState('[data]'),
		// ...mapActions(['getPos']),
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		},
		addModuleItem(moduleName) {
			if (this.addModule === '') {
				let obj = {};
				Object.keys(this.params[moduleName]['info'][0]).forEach(val => {
					obj[val] = '';
				});
				// this.formData[moduleName].push(obj);
				this.params[moduleName]['info'].push(obj);
				this.addFormDataIndex = this.params[moduleName]['info'].length - 1;
				console.log('----11111-------', this.params);
				this.editModule = '';
				this.addModule = moduleName;
			}
		},
		editModuleItem(moduleName, index) {
			this.addModule = '';
			this.editModule = moduleName + index;
		},
		editClose() {
			this.editModule = '';
		},
		addClose(moduleName) {
			if (this.addModule !== '') {
				this.addModule = '';
				this.params[moduleName]['info'].pop();
			}
		},
		submit(moduleName) {
		  this.addModule = '';
		//   if(this.params[moduleName]['info'].length > 1) {
		//     console.log('6666666666===',this.params[moduleName]['info'])
			// }
		}
	}
};
</script>

<style lang="stylus" scoped>
.resume-wrap
  margin auto
  padding 30px
  width 1080px
  background-color: #fff
  box-sizing border-box
  /*form*/
    /*width 540px*/
    /*margin auto*/
  .module-block {
    padding-bottom 20px
    margin-bottom 20px
    border-bottom 1px solid #ddd
  }
</style>
