<template>
        <h1 @click="alertMe()">{{ message }}</h1>
</template>

<script>
    export default {
        data() {
            return {
                message: 'asd'
            }
        },
        methods : {
            alertMe() {
                alert('asd');
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
