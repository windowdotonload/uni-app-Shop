/*
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
 */
const BASE_URL = 'https://api-hmugo-web.itheima.net/api/public/v1'
export const myRequest = (url, method = 'GET', data) => {
    // console.log('method', method)
    // console.log('data', data)
    return new Promise((res, rej) => {
        uni.request({
            url: BASE_URL + url,
            method: method,
            data: data,
            success(data) {
                // console.log(res)
                if (data.statusCode != 200) {
                    rej({
                        icon: "none",
                        title: "获取数据失败",
                    })
                    return
                }
                res(data)
                // console.log(this.swiperData);
            },
        });
    })
}