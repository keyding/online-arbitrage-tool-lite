import { createApp } from 'vue'

import {
    DOC,
    CONTAINER_ID,
    CONTAINER_ALTER_ID,
    APP_ID,
    MAX_TIMES,
    INTERVAL_TIME,
} from '@/utils'

import App from '@/components/App.vue'

export const initApp = () => {
    let loopCount = 0

    const timer = setInterval(async () => {
        const container =
            document.querySelector(CONTAINER_ID) ||
            document.querySelector(CONTAINER_ALTER_ID)

        if (loopCount++ > MAX_TIMES) {
            clearInterval(timer)
            console.warn('[O.A.T Lite]: Please refresh the page.')
        }

        if (container) {
            const appVm = mountedApp()

            clearInterval(timer)

            container.insertBefore(appVm.$el, container.firstChild)
        }
    }, INTERVAL_TIME)
}

export const mountedApp = () => {
    let AppContainer = DOC.querySelector(`#${APP_ID}`)

    if (AppContainer) {
        AppContainer.innerHTML = ''
    } else {
        AppContainer = DOC.createElement('div')
    }

    return createApp(App).mount(AppContainer)
}
