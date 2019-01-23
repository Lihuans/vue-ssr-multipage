<script>
import formItem from './formItem';
import { mapMutations } from 'vuex';
export default {
	name: 'form-block',
	render() {
		const genFormItem = item => {
			return (
				<form-item
					item={item}
					params={this.params}
					module={this.formItem.module}
					index={this.formDataIndex}
				/>
			);
		};
		let rows = this.formItem.form
			.filter(item => {
				return item.column != 'right';
			})
			.map((item, index) => {
				let nextItem = this.formItem.form[index + 1];
				return (
					<el-row key={index}>
						<el-col span={item.column == 'center' ? 24 : 11}>
							{genFormItem(item)}
						</el-col>
						{nextItem.column == 'right' && (
							<el-col span={11} offset={2}>
								{genFormItem(nextItem)}
							</el-col>
						)}
					</el-row>
				);
			});
		return (
			<el-form
				inline={false}
				labelWidth={this.formItem.lableWidth}
				size="small"
			>
				{rows}
				<el-row>
					<el-col span={24}>
						<el-form-item>
							<el-button
								type="primary"
								onClick={() => {
									this.onSubmit(this.formDataIndex, this.formItem.module);
								}}
							>
								立即创建
							</el-button>
							<el-button
								onClick={() => {
									this.cancelHandler();
								}}
							>
								取消
							</el-button>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
		);
	},
	components: {
		formItem
	},
	props: {
		formItem: {
			type: Object
		},
		params: {
			type: Object
		},
		formDataIndex: {
			type: Number
		}
	},
	created() {
		console.log(
			'111111111*****',
			this.params,
			this.formItem,
			this.formDataIndex
		);
	},
	methods: {
	  ...mapMutations(['editSave']),
		cancelHandler() {
			this.$emit('cancelHandler');
		},
		onSubmit(index, module) {
		  console.log(index, module, this.params);
		  this.$store.commit('editSave', {params: this.params[module], index});
		  this.$emit('submitSuccessHandler');
		}
	}
};
</script>

<style lang="stylus" scoped>
  form
      width 540px
      margin auto
</style>
