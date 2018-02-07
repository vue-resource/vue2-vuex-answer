export default {
	//记录问题id并增加题目索引
	recordAnswer ({commit,state},id) {
		//点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
		commit('RECORD_ANSWER',id);
		if(state.itemIndex < state.detail.length){//如果不是最后一题，则增加题目的指针位置
			commit('ADD_ITEMINDEX',1);
		}
	},
	//初始化信息
	initialization ({commit}) {
		commit('INITIAL_DATA')
	}
}