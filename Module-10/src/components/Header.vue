<template>
    <header>
        <nav class="border-b">
            <ul class="flex py-5 mx-2">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
                
            </ul>
        </nav>
    
    </header>
</template>
<style scoped>
    ul li a {display:block; padding: 10px 15px;}
  ul li:hover{background-color: orange; border-radius: 5px;}
</style>