<template>
    <div class="logo">
        <div class="label">Online Arbitrage Tool</div>
        <VersionView />
    </div>
</template>

<script setup>
import VersionView from '@/components/v2/Version.vue'
</script>

<style lang="scss" scoped>
.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    position: relative;
    .label {
        font-size: 18px;
        line-height: 22px;
        text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.25);
        color: #fff;
    }
}
</style>