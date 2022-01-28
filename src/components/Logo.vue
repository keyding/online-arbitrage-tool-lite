<template>
    <div class="logo">
        <span class="label highlight">O</span>
        <span class="label">nline</span>
        <span class="label highlight">A</span>
        <span class="label">rbitrage</span>
        <span class="label highlight">T</span>
        <span class="label">ool</span>
        <VersionView />
    </div>
</template>

<script setup>
import VersionView from '@/components/Version.vue'
</script>

<style lang="scss" scoped>
.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    .label {
        font-size: 14;
        color: #111827;

        &.highlight {
            color: #34D399;
            margin-left: 4px;
        }
    }
}
</style>