import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      activeType: null,
      itemsPerPage: 20,
      items: {/* [id: number]: Item */},
      users: {/* [id: string]: User */},
      lists: {
        top: [/* number */],
        new: [],
        show: [],
        ask: [],
        job: []
      },
      userInfo: null,
      formBlock: {
		experience: {
			module: 'experience',
			moduleName: '特别的模块',
			lableWidth: '80px',
			form: [
				{
					type: 'upload',
					label: '头像',
					column: 'center',
					name: 'headUrl',
					row: 0,
				},
				{
					type: 'select',
					label: '姓名',
					column: 'center',
					name: 'nickname',
					row: 1,
				},
				{
					type: 'select',
					label: '性别',
					column: 'center',
					name: 'sex',
					row: 2,
				},
				{
					type: 'date-picker-year',
					label: '在校时间',
					column: 'right',
					name: 'birth',
					row: 3,
				},
				{
					type: 'select',
					label: '学历',
					column: 'left',
					name: 'city',
					options: [
						{
							label: '大专'
						},
						{
							label: '本科'
						},
						{
							label: '硕士'
						},
						{
							label: '博士'
						},
						{
							label: '其他'
						}],
					row: 3
				},
				{
					type: 'search-select',
					label: '专业',
					column: 'right',
					name: 'phone',
					row: 3
				},
				{
					type: 'textarea',
					label: '主修课程',
					column: 'left',
					name: 'email',
					row: 3
				}
			]
		},
		base: {
			module: 'base',
			moduleName: '基础信息',
			lableWidth: '80px',
			form: [
        {
          type: 'search-select',
          label: '学校',
          column: 'left',
          name: 'school',
          value: '电子科技大学',
          options: [
            {
              label: '石油大学'
            },
            {
              label: '电子科技大学'
            },
            {
              label: '四川大学'
            },
            {
              label: '理工大学'
            },
            {
              label: '交通大学'
            }]
        },
        {
          type: 'date-picker-year',
          label: '在校时间',
          column: 'right',
          name: 'date',
          value: ''
        },
        {
          type: 'select',
          label: '学历',
          column: 'left',
          name: 'education',
          value: '',
          options: [
            {
              label: '大专'
            },
            {
              label: '本科'
            },
            {
              label: '硕士'
            },
            {
              label: '博士'
            },
            {
              label: '其他'
            }]
        },
        {
          type: 'search-select',
          label: '专业',
          column: 'right',
          name: 'major',
          value: ''
        },
        {
          type: 'textarea',
          label: '主修课程',
          column: 'left',
          name: 'course',
          value: ''
        }
      ]
		},
		education: {
			module: 'education',
			moduleName: '教育背景',
			lableWidth: '80px',
			form: [
        {
          type: 'search-select',
          label: '学校',
          column: 'left',
          name: 'school',
          value: ''
        },
        {
          type: 'date-picker-year',
          label: '在校时间',
          column: 'right',
          name: 'date',
          value: ''
        },
        {
          type: 'select',
          label: '学历',
          column: 'left',
          name: 'education',
          value: '',
          options: [
            {
              label: '大专'
            },
            {
              label: '本科'
            },
            {
              label: '硕士'
            },
            {
              label: '博士'
            },
            {
              label: '其他'
            }]
        },
        {
          type: 'search-select',
          label: '专业',
          column: 'left',
          name: 'major',
          value: ''
        },
        {
          type: 'textarea',
          label: '主修课程',
          column: 'left',
          name: 'course',
          value: ''
        }
      ]
		}
	},
	  formData: {
	  experience: [
			{
				headUrl: 'https://sxsimg.xiaoyuanzhao.com/45/B0/45AD72ACBDE8A8172674497C92A003B0.png',
				nickname: 'lh',
				sex: '女',
				birth: '1991-01',
				city: '成都',
				phone: '18308447569',
				email: 'lh@qq.com'
			}
		],
		base: [
			{
				school: '电子科技大学',
				date: '2018-06',
				education: '本科',
				major: '计算机科学与技术',
				course: '计算机计算机计算机11111'
			},
			{
				school: '电子科技大学',
				date: '2018-06',
				education: '大专',
				major: '计算机科学与技术',
				course: '计算机计算机计算机2222'
			}
		],
		education: [
			{
				school: '电子科技大学',
				date: '2018-06',
				education: '大专',
				major: '计算机科学与技术',
				course: '计算机计算机计算机3333'
			},
			{
				school: '电子科技大学',
				date: '2018-06',
				education: '大专',
				major: '计算机科学与技术',
				course: '计算机计算机计算机444444'
			}
		]
	},
    },
    actions,
    mutations,
    getters
  })
}
