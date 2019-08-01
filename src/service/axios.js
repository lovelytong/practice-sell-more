import axios from "axios";

export const request = {
  install: function(Vue) {
    const instance = requestConfig => {
      return axios({
        timeout: 10000,
        headers: {
          "Content-Type": "application/json"
        },
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
    Vue.prototype.$http = instance;
  }
};
