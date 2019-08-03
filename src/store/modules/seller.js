import { httpClient } from "@/service/axios";
import api from "@/service/api";
export default {
  namespaced: true,
  state: {
    sellerData: {}
  },
  getters: {
    getSeller: state => {
      return state.sellerData;
    }
  },
  mutations: {
    setSeller: (state, seller) => {
      state.sellerData = seller;
    }
  },
  actions: {
    getSeller: async function(context) {
      const res = await httpClient(api.seller);
      context.commit("setSeller", res.data.data);
    }
  }
};
