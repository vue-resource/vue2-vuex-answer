<template>
	<div class="topic_container">
		<page panel="topic"></page>
	</div>
</template>
<script>
	import Page from '@/components/Page'

	export default {
		name: 'topic',
	  	components: {
	  		Page
	  	},
	  	created(){
	      //进入题目页面，开始计时
	  		this.$store.commit('RECORD_ALLTIME');
	  	}
	}
</script>

<style scoped>
    .topic_container{

    }
</style>