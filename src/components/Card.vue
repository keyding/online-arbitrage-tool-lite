<template>
    <div class="card" :class="statusClass" @click="handleClick">{{ label }}</div>
</template>

<script>
export default { name: 'Card' }
</script>

<script setup>
import { toRefs, computed } from 'vue'
import { STATUS_MAP, STATUS_LABEL_MAP, STATUS_CLASS_MAP } from '@/utils'

const props = defineProps({
    status: {
        type: Number,
        default: STATUS_MAP.YES
    }
})

const { status } = toRefs(props)

const statusClass = computed(() => {
    return STATUS_CLASS_MAP[status.value]
})

const label = computed(() => {
    return STATUS_LABEL_MAP[status.value]
})
</script>

<style lang="scss" scoped>
.card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    // min-width: 205px;
    width: 100%;
    height: 106px;
    border-radius: 16px;
    background: #fff;
    color: #fff;
    margin-top: 14px;

    &.yes {
        font-size: 58px;
        background: #34d399;
    }

    &.no {
        font-size: 58px;
        background: #f87171;
    }

    &.login {
        font-size: 28px;
        background: #fbbf24;
    }

    &.unknown {
        font-size: 28px;
        background: #fbbf24;
    }

    &.loading {
        font-size: 28px;
        background: #94a3b8;
    }

    &.busy {
        font-size: 20px;
        background: #94a3b8;
    }
}
</style>