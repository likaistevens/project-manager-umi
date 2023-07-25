/**
 * 配置request请求时的默认参数
 */
// import { history } from '@umijs/max';
import { message } from 'antd';
import { extend } from 'umi-request';

const request = extend({
  credentials: 'include',
});

// request 拦截器
request.interceptors.request.use(
  (url: string, options?: Record<string, any>) => {
    const { headers = {}, method = 'post' } = options || {};
    const { data } = options || {};
    let { params } = options || {};

    if (method.toLowerCase() === 'get') {
      params = params || data;
    } else {
      headers['Content-Type'] = 'application/json;charset=utf-8';
    }

    return {
      url,
      crossDomain: true,
      options: { ...options, interceptors: true, headers, params, data },
    };
  },
);

request.interceptors.response.use(async (response) => {
  if (response && response.status) {
    const codeMessage: Record<number, string> = {
      200: '',
      400: '请检查请求参数',
      401: '用户未登录，请先登录',
      403: '用户无权限',
      500: '服务器发生错误，请检查服务器。',
      502: '网关错误。',
      503: '服务不可用，服务器暂时过载或维护。',
      504: '网关超时。',
    };
    const { status, headers } = response;
    const errorText = codeMessage[status];
    if (response.status === 200) {
      // const res = await response.clone().json();
      let res = null;
      const contentType = headers.get('Content-Type');
      if (contentType?.includes('text/plain')) {
        res = await response.clone().text();
      } else {
        res = await response.clone().json();
      }

      // if (options.url.startsWith('http://yapi.study.youdao.com/mock')) {
      // 目前可以用了 后端录入yapi说目前没办法录入标准格式，先区分下
      // return res;
      // }
      const { code, message: msg } = res;
      if (code) {
        if (code !== 200) {
          // 截取错误信息的前50个字符
          let tempMsg = msg;
          if (tempMsg && tempMsg.length > 100) {
            tempMsg = tempMsg.slice(0, 100) + '...';
          }
          message.error(tempMsg || '请求失败');
          return;
        }
        return res?.data;
      }
      return res;
    } else {
      message.error(`${status} ${errorText}`);
      if (status === 401) {
        location.href = `https://ke.study.youdao.com/login?back_url=${encodeURIComponent(
          location.href,
        )}`;
      }
      return undefined;
    }
  }
});

export default request;

const openApiRequest = async (OpenAPIConfig: any, options: any) => {
  return request(`${OpenAPIConfig.BASE}${options.url}`, {
    ...options,
    params: options.query,
    data: options?.body,
  });
};

export { openApiRequest as request };
