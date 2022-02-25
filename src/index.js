import Cookies from 'js-cookie'
import dayjs  from 'dayjs'
import * as secret from './modules/security/index'
export default{
    Cookies,
    dayjs,
    ...secret
}