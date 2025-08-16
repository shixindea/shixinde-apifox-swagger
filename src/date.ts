/**
 * 返回指定格式的当前日期
 */
export const getDate = () => {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var dates = date.getDate();
    var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    var day = date.getDay();
    return year + '年' + month + '月' + dates + '日' + ' ' + arr[day];
}