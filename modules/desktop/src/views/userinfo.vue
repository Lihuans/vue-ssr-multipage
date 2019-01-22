<template>
    <div></div>
</template>

<script>
    export default {
        name: "userinfo",
        asyncData({ store }) {
            return store.dispatch('getUserInfo')
        },
        computed: {
            getUserInfo() {
                return this.$store.state.userInfo
            }
        },
        created() {
            // this.$axios.getUserInfo().then(res => {
            //     console.log(res)
            // })
        },
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>