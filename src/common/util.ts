
export class Util {

    /**
     * 请求数据
     * @param url 请求地址
     * @param other 请求参数 
     */
    public static ajax<T>(url: string, ...other: T[]): Promise<T> {
        return new Promise((resolve, reject) => {
            WONDER.dom.ajax<T>({
                url: url,
                other,
                success: resolve,
                fail: reject
            })
        });
    }

    /**
     * 获取queryString
     * @param url url地址
     * @param key 参数名
     */
    public static getUrlQuery(url: string, key: string): string | object {
        let queries: object = {};
        let result: string | object;

        // 验证数据
        if (!url || url.indexOf('?') < 0) {
            return queries;
        }

        let searchIndex: number = url.lastIndexOf('?');
        let hashIndex: number = url.lastIndexOf('#');
        let search: string = url.substr(searchIndex + 1);

        if (hashIndex > searchIndex) {
            search = url.substring(searchIndex + 1, hashIndex);
        }

        search.replace(/(?:^|&)([^=&]+)=([^=&]*)/g, (r0, r1, r2): string => {
            queries[r1] = decodeURIComponent(r2);
            return '';
        });

        if (key) {
            return queries[key];
        } else {
            return queries;
        }

    }


    /**
     * 获取表单规则信息
     * @param rules 规则明细 
     * @param fields 表单字段
     */
    public static getRulesMsg(rules: object, fields: object): string {
        const defaultMsg: string = '请填写完整';
        let msg: string = defaultMsg;
        if (rules && fields) {
            let messages = Object.getOwnPropertyNames(fields).map((name: string): string => {
                return rules[name].msg;
            });
            msg = messages[0] || msg;
        }
        return msg;
    }
}
