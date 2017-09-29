let kqDomain: string = 'https://ebd.99bill.com';
let vasDomain: string = 'https://rip.99bill.com';

/**
 * 设置域名
 * @returns void
 */
let initDomain = (): void => {
    if (location.port === '8080') {
        kqDomain = '';
        vasDomain = '';
    }
}

initDomain();


const SERVER_URL = {
    OPERS: kqDomain + '/coc-bill-api/bus/3.0/opers',// C0090001N 根据企业帐号查询操作员列表
    AUTHORIZATION: kqDomain + '/coc-bill-api/bus/3.0/oper/pass/login/authorization',// L0090001N 操作员登录
    WRITEOFFVOUCHER: vasDomain + '/rip-website/api/voucher/v1/writeoffVoucher',// R0010005L 核销凭证券
}

const STORE_KEY = {
    OPERS: 'opers',// 员工列表
    OPER: 'oper',// 员工登录信息
    IDCONTENT: 'idContent',// 商户编号
    BUSLOGIN: 'busLogin'// 商户登录态
};

const BUSINESS_CODE = {
    FFAN: 'MAM-FFAN-CARD'
};

const CHANNEL = {
    H5: 'H5CK'
};

const PAGE_URL = {
    RESULT_Page: '/result'
};

export default {
    SERVER_URL,
    STORE_KEY,
    BUSINESS_CODE,
    CHANNEL,
    PAGE_URL
}