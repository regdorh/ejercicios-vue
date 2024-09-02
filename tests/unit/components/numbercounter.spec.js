import { shallowMount } from "@vue/test-utils"; 
import NumberCounter from "@/components/NumberCounter.vue";
 
const store = {
  state: { 
    count: 0, 
  },
  getters: { 
    getCount(state) {
      return state.count; 
    },
  },
  mutations: { 
    INCREMENT(state) { 
      state.count++;
    },
    DECREMENT(state) { 
      state.count > 0 && state.count--;
    },
  },
  actions: { 
    async increment(context) { 
      context.commit("INCREMENT"); 
    },
    async decrement(context) { 
      context.commit("DECREMENT");
    },
  },
  modules: {},
};

describe("Componente NumberCounter.vue", () => {

  test("Validación de match con el snapshot (Coincidir con la instantánea)", () => {
    
    const wrapper = shallowMount(NumberCounter, {
      global: {
        mocks: { 
          $store: store,
        },
      },
    });

    expect(wrapper.html()).toMatchSnapshot(); 
  });
});