<template>
    <div>
        <input type="text" v-model="userinfo.username">
        <input type="text" v-model="userinfo.password">
        <button @click="login">登录</button>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                userinfo: {
                    username: '15608235967',
                    password: '123456'
                }
            }
        },
        methods: {
            login() {
                this.$axios.login(this.userinfo).then(res => {
                    localStorage.setItem('token', res.msg)
                    console.log(res)
                    // this.$axios.defaults.headers.common['Authorization'] = res.msg
                    // this.$axios.defaults.headers.Authorization = res.msg
                    // this.$utils.setCookie('token', res.msg)
                    this.$axios.getUserInfo().then(res => {

                    })
                }).catch(err => {
                    // alert(err.msg)
                })
            }
         }
    }
</script>

<style scoped>

</style>