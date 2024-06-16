<template>
    <div id="wrapper" class="dashboard">
        <Sidebar/>
        <div class="page-wrapper">
            <Navbar />
            <div class="page-container">
                <slot name="template"></slot>
            </div>
        </div>
    </div>  
</template>

<style scoped>
    .page-wrapper{
        margin-left: 240px;
    }

    .page-container{
        padding-left: 2px;
    }
</style>
