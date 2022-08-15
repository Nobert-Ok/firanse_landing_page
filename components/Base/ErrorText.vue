<template>
    <span v-if="!!message" class="error-text my-8">{{ message }}</span>
</template>
<script>
export default {
    name: "ErrorText",
    data() {
        return {
        }
    },
    props: {
        message: {
            type: String
        }
    }
}
</script>
<style lang="scss" scoped>
.error-text {
    font-size: 0.75rem;
    color: $error;
    margin: 20px 18px;
}
</style>