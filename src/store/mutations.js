const ADD_ITEMINDEX = 'ADD_ITEMINDEX'
const RECORD_ANSWER = 'RECORD_ANSWER'
const RECORD_ALLTIME = 'RECORD_ALLTIME'
const INITIAL_DATA = 'INITIAL_DATA'

export default {
	//点击进入下一题
	[ADD_ITEMINDEX] (state,num) {
		state.itemIndex += num
	},
	//记录问题id
	[RECORD_ANSWER] (state,id) {
		state.answerid.push(id)
	},
	//记录答题用时
	[RECORD_ALLTIME] (state) {
		state.timer = setInterval(() => {
			state.allTime ++;
		},1000)
	},
	//初始化数据
	[INITIAL_DATA] (state) {
		state.itemIndex = 1;
		state.answerid = [];
		state.allTime = 0;
	} 
}