import { eligibleMessage } from '@/messages'
import { checkEligible } from '@/api'

eligibleMessage.on(async (data, sender, sendResponse) => {
    const { asin } = data
    const result = await checkEligible(asin)

    sendResponse(result)
})