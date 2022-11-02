<template>
    <div class="status">
        <div class="label" :class="statusClass">{{ label }}</div>
    </div>
</template>

<script>
export default { name: 'Status' }
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
.status {
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .label {
        color: #fff;

        &.yes,
        &.no {
            font-size: 72px;
            text-shadow: 0px 5px 0px rgba(0, 0, 0, 0.25);
        }

        &.login,
        &.unknown,
        &.loading {
            font-size: 36px;
            text-shadow: 0px 3px 0px rgba(0, 0, 0, 0.25);
        }

        &.busy {
            font-size: 28px;
            text-shadow: 0px 3px 0px rgba(0, 0, 0, 0.25);
        }
    }
}
</style>