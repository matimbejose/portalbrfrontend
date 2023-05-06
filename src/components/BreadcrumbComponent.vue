<template>
<nav>

    <ol class="breadcrumb">

        <li
        
        v-for="(crumb, ci) in crumbs" :key="ci" class="breadcrumb-item algin-items-center"
        >

        <button class="btn btn-link" :class="{ disabled: isLast(ci) }" @click="selected(crumb)">
            {{ crumb }}
        </button>
        
        </li>


    </ol>

    </nav>    
</template>



<script>
export default {
 props: {
    crumbs: {
        type:Array,
        required:true
    }
 },
 methods: {
    isLast(index) {
        return index === this.crumbs.length - 1;
    },

    selected(crumb) {
        this.$emit('selected', crumb)
    }
 }   
}
</script>


<style scoped>
.breadcrumb {
    background-color: #FFF;
    border: 1px solid rgb(0,0, 0.125);
    border-radius: 0.37rem;
}
</style>>
