import axios from "axios";
const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development" ? "" : "http://ustbhuangyi.com/sell",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});
// 拦截器
instance.interceptors.request.use(
  function(config) {
    // console.log("config", config);
    // 在发送请求之前做些什么
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    // console.log("response", response);
    return response;
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

const request = requestConfig => {
  return instance({
    method: requestConfig.method,
    url: requestConfig.url,
    data: requestConfig.params
  })
    .then(res => {
      if (res.status === 200) {
        return res;
      }
    })
    .catch(error => {
      alert(error);
    });
};

export const Plugin = {
  install: function(Vue) {
    Vue.prototype.$http = request;
  }
};

export const httpClient = request;
