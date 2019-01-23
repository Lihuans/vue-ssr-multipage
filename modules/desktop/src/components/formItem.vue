<template>
    <div>
    <!--<el-form :inline="true" label-width="80px" size="small">-->
      <el-form-item :label="item.label" v-if="item.type === 'search-select'">
        <el-select
          v-model="params[module]['info'][index][item.name]"
          multiple
          filterable
          remote
          reserve-keyword
          placeholder="请输入关键词"
          :remote-method="remoteMethod"
          :loading="true">
          <!--<el-option-->
            <!--v-for="(it, index) in item.options"-->
            <!--:key="index"-->
            <!--:label="it.label">-->
          <!--</el-option>-->
        </el-select>
      </el-form-item>
      <el-form-item :label="item.label" v-if="item.type === 'date-picker-year'">
          <el-date-picker
              v-model="params[module]['info'][index][item.name]"
              type="year"
              format="yyyy"
              value-format="yyyy"
              placeholder="选择年">
           </el-date-picker>
        </el-form-item>
      <el-form-item :label="item.label" v-if="item.type === 'date-picker-month'">
        <el-date-picker
            v-model="params[module]['info'][index][item.name]"
            type="month"
            placeholder="选择月">
         </el-date-picker>
      </el-form-item>
      <el-form-item :label="item.label" v-if="item.type === 'date-picker-date'">
        <el-date-picker
            v-model="params[module]['info'][index][item.name]"
            type="date"
            placeholder="选择日期">
         </el-date-picker>
      </el-form-item>
      <el-form-item :label="item.label" v-if="item.type === 'date-picker-daterange'">
        <el-date-picker
            v-model="params[module]['info'][index][item.name]"
            type="daterange"
            placeholder="选择日期">
         </el-date-picker>
      </el-form-item>
      <el-form-item :label="item.label" v-if="item.type === 'select'">
        <el-select v-model="params[module]['info'][index][item.name]" placeholder="请选择" @change="changeSelect">
          <el-option
            v-for="it in item.options"
            :key="it.label"
            :value="it.label">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item :label="item.label" v-if="item.type === 'textarea'">
        <el-input type="textarea" v-model="params[module]['info'][index][item.name]"></el-input>
      </el-form-item>
    </div>
    <!--</el-form>-->
</template>

<script>
export default {
	name: 'formItem',
	props: {
		item: {
			type: Object,
			required: true
		},
		params: {
		  type: Object
		},
		module: {
		  type: String
		},
		index: {
		  type: Number
		}
	},
	data() {
	  return {
	    // item: this.datas,
			// formData: this.formData || ''
		};
	},
	mounted() {
		console.log('*********',this.params,this.item,this.module, this.index);
	},
	methods: {
	  remoteMethod(query) {
			if(query != '') {

			}
		},
		changeSelect(e) {
	    console.log(e);
		}
	}
};
</script>

<style scoped>

</style>
