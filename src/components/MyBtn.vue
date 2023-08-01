<template>
    <button 
        class="btn"
        :class="{'active-btn': backlight}"
        >
        {{ contentPart }}
    </button>
</template>

<script>
export default {
    props:{
        contentPart:{
            type: String
        },
        backlight:{
            type: Boolean,
            default(){
                return false
            }
        }
    }

}
</script>

<style lang="scss" scoped>
    .btn{
        width: 150px;
        height: 40px;
        background-color: rgb(223, 216, 216);
        border-radius: 8px;
        outline: none;
    }
    .active-btn{
        border: 3px solid rgb(53 60 80);
        background-color: rgb(0 255 217);;
    }
</style>