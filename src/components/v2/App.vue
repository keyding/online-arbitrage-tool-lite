<template>
    <div
        class="clay oat-app-lite"
        :class="statusClass"
        @mouseenter="handleMouseover"
        @mouseleave="handleMouseleave"
    >
        <Logo />
        <Status :status="status" />
        <!-- 
        <Card :status="status" />
        <Mask :status="status" v-if="visibleMask" /> -->
    </div>
</template>

<script>
export default { name: 'App' }
</script>

<script setup>
import '@/assets/global.v2.css'
import "claymorphism-css/dist/clay.scss";
import { ref, computed, onBeforeMount } from 'vue'
import { getAsin } from '@/utils'
import { eligibleMessage } from '@/messages'

import Logo from '@/components/v2/Logo.vue'
import Status from '@/components/v2/Status.vue'
import Mask from '@/components/Mask.vue'

import { STATUS_MAP, STATUS_CLASS_MAP } from '@/utils'

const status = ref(STATUS_MAP.LOADING)

const maskStatus = ref(false)

const statusClass = computed(() => {
    return STATUS_CLASS_MAP[status.value]
})

const visibleMask = computed(() => {
    return maskStatus.value && status.value !== STATUS_MAP.LOADING
})

const handleMouseover = () => {
    maskStatus.value = true
}

const handleMouseleave = () => {
    maskStatus.value = false
}

onBeforeMount(() => {
    eligibleMessage.send({ asin: getAsin() }, { async: true }).then(response => {
        status.value = response.code
        // status.value = STATUS_MAP.HOVER
    })
})

</script>

<style lang="scss" scoped>
.oat-app-lite {
    --clay-border-radius: 16px;

    position: relative;
    width: 100%;
    height: 160px;
    box-sizing: border-box;
    padding: 16px;
    margin-bottom: 16px;
    font-family: "Fredoka One";
    display: flex;
    flex-direction: column;

    &.yes {
        --clay-background: #34d399;
    }

    &.no {
        --clay-background: #ef4444;
    }

    &.login {
        --clay-background: #fbbf24;
    }

    &.loading {
        --clay-background: #6366F1;
    }
    &.unknown,
    &.busy {
        --clay-background: #FB923C;
    }

    &.hover {
        --clay-background: #14B8A6;
    }
}
</style>