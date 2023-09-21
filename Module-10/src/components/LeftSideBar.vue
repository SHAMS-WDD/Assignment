
<template>
    <nav>
    <ul class="flex flex-col p-5 space-y-2 mx-2">
        <li><router-link to="/productlist">All Products</router-link></li>
                
    </ul>
</nav>
</template>

<style scoped>
    ul li {border-bottom:1px solid rgb(225, 228, 231); transition: all 0.3s;}
    ul li a {display:block; padding: 5px 15px;}
    ul li:hover{background-color: coral; border-radius: 5px;}
</style>