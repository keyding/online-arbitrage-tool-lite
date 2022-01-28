// GLOBAL
export const DOC = document
export const WIN = window
export const LOC = WIN.location

// container element id
export const CONTAINER_ID = '#rightCol'
export const CONTAINER_ALTER_ID = '#right-col'
export const APP_ID = 'oat-app-lite'

// Max. number of cycles
export const MAX_TIMES = 500

// Interval Time. ms
export const INTERVAL_TIME = 50

// page type enums
export const PAGE_TYPES = {
    PRODUCT: 100,
    UNKNOWN: 999,
}
// status map
export const STATUS_MAP = {
    YES: 1,
    NO: 2,
    LOGIN: 3,
    UNKNOWN: 4,
    LOADING: 5,
    BUSY: 6,
}

// status label map
export const STATUS_LABEL_MAP = {
    [STATUS_MAP.YES]: 'YES',
    [STATUS_MAP.NO]: 'NO',
    [STATUS_MAP.LOGIN]: 'NO LOGIN',
    [STATUS_MAP.UNKNOWN]: 'UNKNOWN',
    [STATUS_MAP.LOADING]: 'LOADING',
    [STATUS_MAP.BUSY]: 'SERVICE BUSY',
}

// status classname map
export const STATUS_CLASS_MAP = {
    [STATUS_MAP.YES]: 'yes',
    [STATUS_MAP.NO]: 'no',
    [STATUS_MAP.LOGIN]: 'login',
    [STATUS_MAP.UNKNOWN]: 'unknown',
    [STATUS_MAP.LOADING]: 'loading',
    [STATUS_MAP.BUSY]: 'busy',
}

// response code map
export const RESPONSE_CODE_MAP = {
    YES: STATUS_MAP.YES,
    NO: STATUS_MAP.NO,
    LOGIN: STATUS_MAP.LOGIN,
    UNKNOWN: STATUS_MAP.UNKNOWN,
    BUSY: STATUS_MAP.BUSY,
}

// seller centers
export const SELLER_CENTERS = {
    COM: 'https://sellercentral.amazon.com',
}

// seller gentral search base url
export const SELLER_GENTRAL_SERCHER_URL = `${SELLER_CENTERS.COM}/productsearch/search`

// login url
export const LOGIN_URL = `${SELLER_CENTERS.COM}/gp/homepage.html/ref=xx_home_logo_xx`

// search page url
export const SEARCH_PAGE_URL = `${SELLER_CENTERS.COM}/product-search/search?q=`
