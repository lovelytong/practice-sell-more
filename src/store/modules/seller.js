import { httpClient } from "@/service/axios";
import api from "@/service/api";
export default {
  namespaced: true,
  state: {
    seller: {}
  },
  getters: {
    seller: state => {
      return state.seller;
    }
  },
  mutations: {
    setSeller: (state, seller) => {
      state.seller = seller;
    }
  },
  actions: {
    getSeller: async function(context) {
      const res = await httpClient(api.seller);
      context.commit("setSeller", res.data);
    }
  }
};
