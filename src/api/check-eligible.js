import { RESPONSE_CODE_MAP, SELLER_GENTRAL_SERCHER_URL } from '@/utils'
import { request } from '@/api'

export const checkEligible = async (asin) => {
    const response = {
        code: RESPONSE_CODE_MAP.YES,
        message: '',
    }

    try {
        const url = `${SELLER_GENTRAL_SERCHER_URL}?query=${asin}&page=1`
        const fetchResponse = await request(url)

        if (fetchResponse.ok) {
            // No login
            const noLogin = new URL(fetchResponse.url).pathname?.includes(
                'signin'
            )

            const responseData = await fetchResponse.text()

            // No login
            if (noLogin) {
                Object.assign(response, {
                    code: RESPONSE_CODE_MAP.LOGIN,
                    message: 'No login',
                })
            }
            // Service busy
            else if (responseData.startsWith('<!DOCTYPE html>')) {
                Object.assign(response, {
                    code: RESPONSE_CODE_MAP.BUSY,
                    message: 'Service busy',
                })
            }
            // Success
            else {
                const data = JSON.parse(responseData)

                if (
                    data.products &&
                    data.products.length &&
                    data.products[0]?.pathToSellUrl === null
                ) {
                    const currentProduct = data.products[0]

                    const newConditionGatingStatus =
                        currentProduct?.conditionGatingStatuses?.find(
                            (item) => item.condition === 'new'
                        )

                    const GatingStatus =
                        currentProduct?.conditionGatingStatuses?.map(
                            (item) => item.gated
                        )

                    if (currentProduct?.restrictedForAllConditions) {
                        Object.assign(response, {
                            code: RESPONSE_CODE_MAP.NO,
                            message: 'No eligible',
                        })
                    }
                    else if (
                        GatingStatus?.includes(true) &&
                        newConditionGatingStatus?.gated === false
                    ) {
                        Object.assign(response, {
                            code: RESPONSE_CODE_MAP.YES,
                            message: 'Eligible',
                        })
                    }
                    else {
                        Object.assign(response, {
                            code: RESPONSE_CODE_MAP.NO,
                            message: 'No eligible',
                        })
                    }
                }
                else {
                    Object.assign(response, {
                        code: RESPONSE_CODE_MAP.NO,
                        message: 'No eligible',
                    })
                }
            }
        } else {
            Object.assign(response, {
                code: RESPONSE_CODE_MAP.BUSY,
                message: 'Request error',
            })
        }
    } catch (err) {
        Object.assign(response, {
            code: RESPONSE_CODE_MAP.UNKNOWN,
            message: 'Request error',
        })
        console.log('Catch Request Error', err)
    }

    return response
}
