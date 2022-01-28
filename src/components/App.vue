<template>
    <div
        class="oat-app-lite"
        :class="statusClass"
        @mouseenter="handleMouseover"
        @mouseleave="handleMouseleave"
    >
        <Logo />
        <Card :status="status" />
        <Mask :status="status" v-if="visibleMask" />
    </div>
</template>

<script>
export default { name: 'App' }
</script>

<script setup>
import '@/assets/global.css'
import { ref, computed, onBeforeMount } from 'vue'
import { getAsin } from '@/utils'
import { eligibleMessage } from '@/messages'

import Logo from '@/components/Logo.vue'
import Card from '@/components/Card.vue'
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
    })
})

</script>

<style lang="scss" scoped>
.oat-app-lite {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    box-shadow: inset 0 0 0 2px rgb(213, 217, 217);
    background: #fff;
    border-radius: 16px;
    padding: 14px 16px 16px 16px;
    margin-bottom: 16px;
    background: #fff;
    font-family: "Audiowide";

    &.yes {
        box-shadow: inset 0 0 0 2px #34d399;
    }

    &.no {
        box-shadow: inset 0 0 0 2px #f87171;
    }

    &.login,
    &.unknown {
        box-shadow: inset 0 0 0 2px #fbbf24;
    }

    &.loading,
    &.busy {
        box-shadow: inset 0 0 0 2px #94a3b8;
    }
}
</style>