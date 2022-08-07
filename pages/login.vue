<template>
    <div></div>
</template>
<script>
export default {
    name: 'index',
    data() {
        return {
        }
    },
    props: {
    },
    mounted() {
        window.open('https://dashboard.firansefood.com/auth/login')
        this.$router.push('/')
    }
}
</script>