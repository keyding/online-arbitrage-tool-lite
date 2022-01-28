<template>
    <div class="mask">
        <div class="click-to">
            <div class="asin">ASIN: {{ asin }}</div>
            <a :href="clickToUrl" target="_blank" class="label">{{ clickToLabel }}</a>
        </div>
        <div class="info">
            <BuyMeACoffeeVue />
            <PowerBy style="margin-top: 12px;" />
        </div>
    </div>
</template>

<script>
export default { name: 'Mask' }
</script>

<script setup>
import { toRefs, computed } from 'vue'
import BuyMeACoffeeVue from '@/components/BuyMeACoffee.vue'
import PowerBy from '@/components/PowerBy.vue'
import { STATUS_MAP, LOGIN_URL, SEARCH_PAGE_URL, getAsin } from '@/utils'

const props = defineProps({
    status: String
})

const asin = getAsin()

const { status } = toRefs(props)

const isNoLogin = computed(() => {
    return status.value === STATUS_MAP.LOGIN
})

const clickToLabel = computed(() => {
    return isNoLogin.value ? 'CLICK TO LOGIN' : 'CLICK TO SEARCH'
})

const clickToUrl = computed(() => {
    return isNoLogin.value ? LOGIN_URL : `${SEARCH_PAGE_URL}${asin}`
})
</script>

<style lang="scss" scoped>
.mask {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    left: 0;
    top: 0;

    .click-to {
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .asin {
            font-size: 16px;
            color: #fff;
        }

        .label {
            font-size: 20px;
            color: #fbbf24;
            margin-top: 16px;
        }
    }

    .info {
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}
</style>